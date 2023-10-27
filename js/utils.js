/*global Buffer process */
const fs = require('fs');
require('dotenv').config();
const axios = require('axios');
const { t } = require('./config');
const { getAll } = require('./db');
const { log } = require('console');
const resolveDns = require('./resolve-cname.js');

const API_KEY_CURRENCY_EXCHANGE = process.env.API_KEY_CURRENCY_EXCHANGE;
const UPDATE_DNS_INTERVAL = Number(process.env.UPDATE_DNS_INTERVAL || 60);
const PERCENT_INCREASE_USD_TO_NAIRA = Number(process.env.PERCENT_INCREASE_USD_TO_NAIRA);

function isValidUrl(url) {
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
  return urlRegex.test(url);
}

function isNormalUser(chatId) {
  return !isAdmin(chatId) && !isDeveloper(chatId);
}

function isDeveloper(chatId) {
  return chatId === Number(process.env.TELEGRAM_DEVELOPER_CHAT_ID); // Replace with the actual developer's chat ID
}

function isAdmin(chatId) {
  return chatId === Number(process.env.TELEGRAM_ADMIN_CHAT_ID); // Replace with the actual admin's chat ID
}

async function convertUSDToNaira(amountInUSD) {
  try {
    const apiUrl = `https://openexchangerates.org/api/latest.json?app_id=${API_KEY_CURRENCY_EXCHANGE}`;

    const response = await axios.get(apiUrl);
    const usdToNairaRate = response.data.rates['NGN']; // Get the exchange rate for USD to Naira

    const nairaAmount = Number(amountInUSD) * usdToNairaRate * (1 + PERCENT_INCREASE_USD_TO_NAIRA);
    return nairaAmount.toFixed();
  } catch (error) {
    console.error(`Error converting currency: ${error.message}`);
    return error.message;
  }
}
// convertUSDToNaira(1).then(console.log);

function today() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Note: Months are 0-indexed
  const year = currentDate.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
}
function week() {
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 1);
  const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil(days / 7);

  return year() + ' Week ' + weekNumber;
}

function month() {
  const currentDate = new Date();
  return year() + ' Month ' + (currentDate.getMonth() + 1);
}
function year() {
  const currentDate = new Date();
  return 'Year ' + currentDate.getFullYear();
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

const regularCheckDns = (bot, chatId, domain) => {
  const checkDnsPropagation = async () => {
    if (await resolveDns(domain)) {
      bot.sendMessage(chatId, t.dnsPropagated.replace('{{domain}}', domain));
      clearInterval(intervalDnsPropagation);
      return;
    }
    bot.sendMessage(chatId, t.dnsNotPropagated.replace('{{domain}}', domain));
  };
  const intervalDnsPropagation = setInterval(checkDnsPropagation, UPDATE_DNS_INTERVAL * 1000);
};

const nextNumber = arr => {
  let n = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) n++;
    else return n;
  }
  return n;
};

const sendMessageToAllUsers = async (bot, message, nameOf, myChatId) => {
  const chatIds = await getChatIds(nameOf);
  const total = chatIds.length;
  bot.sendMessage(myChatId, `Total users: ${total}`);
  for (let i = 0; i < total; i++) bot.sendMessage(chatIds[i], message).catch(err => log(err.message, chatIds[i]));
};

const getChatIds = async nameOf => {
  let ans = await getAll(nameOf);
  if (!ans) return [];
  return ans.map(a => a._id);
};

const sendQrCode = async (bot, chatId, bb) => {
  const qrCode = await bb.getQrcode();
  const buffer = Buffer.from(qrCode?.qr_code, 'base64');
  fs.writeFileSync('image.png', buffer);
  bot
    .sendPhoto(chatId, 'image.png', {
      caption: 'Here is your QR code!',
    })
    .then(() => fs.unlinkSync('image.png'))
    .catch(log);
};
module.exports = {
  year,
  week,
  today,
  month,
  isAdmin,
  isValidUrl,
  sendQrCode,
  nextNumber,
  isDeveloper,
  isValidEmail,
  isNormalUser,
  regularCheckDns,
  convertUSDToNaira,
  sendMessageToAllUsers,
};
