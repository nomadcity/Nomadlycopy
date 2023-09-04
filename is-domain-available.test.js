const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const API_KEY = process.env.API_KEY_CONNECT_RESELLER;

// Function to test domain availability
async function checkDomainAvailability(domainName) {
  const apiUrl = `https://api.connectreseller.com/ConnectReseller/ESHOP/checkDomain?APIKey=${API_KEY}&websiteName=${domainName}`;

  try {
    const response = await axios.get(apiUrl);
    const { statusCode } = response.data.responseMsg;
    console.log(response.data);
    if (statusCode === 200) {
      return `Domain ${domainName} is available for purchase!`;
    } else if (statusCode === 400) {
      return `Domain ${domainName} is not available.`;
    } else {
      return `Error checking domain availability.`;
    }
  } catch (error) {
    console.error('Error checking domain availability:', error.message);
    return 'An error occurred while checking domain availability.';
  }
}

// Example usage
async function testDomainAvailability() {
  const domainToCheck = 'softblue.sbs'; // Replace with the domain name you want to check
  const result = await checkDomainAvailability(domainToCheck);
  console.log(result);
}

testDomainAvailability(); // Call the function to test domain availability
