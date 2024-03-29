const areasOfCountry = {
  USA: {
    Alabama: ['205', '334', '256', '251'],
    Alaska: ['907'],
    Arizona: ['602', '480', '520', '928'],
    Arkansas: ['501', '870', '479'],
    California: [
      '213',
      '415',
      '310',
      '510',
      '408',
      '818',
      '916',
      '619',
      '707',
      '714',
      '805',
      '909',
      '925',
      '949',
      '760',
      '562',
      '323',
      '661',
      '831',
      '951',
      '209',
      '626',
      '530',
      '650',
      '858',
      '442',
    ],
    Colorado: ['303', '719', '970', '720'],
    'Connecticut ': ['203', '860', '475'],
    Delaware: ['302'],
    Florida: [
      '305',
      '904',
      '813',
      '407',
      '352',
      '561',
      '321',
      '850',
      '727',
      '786',
      '754',
      '863',
      '772',
      '954',
      '941',
      '386',
    ],
    Georgia: ['404', '706', '912', '770', '678', '229', '478'],
    Hawaii: ['808'],
    Idaho: ['208'],
    Illinois: ['217', '309', '312', '618', '708', '773', '815', '847', '630', '224', '331'],
    Indiana: ['317', '219', '812', '765', '260'],
    Iowa: ['515', '319', '712', '641', '563'],
    Kansas: ['913', '316', '785', '620'],
    Kentucky: ['502', '606', '859', '270'],
    Louisiana: ['504', '318', '225', '337', '985'],
    Maine: ['207'],
    Maryland: ['301', '410', '240', '443'],
    Massachusetts: ['617', '413', '508', '781', '978', '351', '774'],
    Michigan: ['313', '616', '810', '906', '517', '248', '734', '989', '231', '269'],
    Minnesota: ['218', '612', '320', '507', '651', '763', '952'],
    Mississippi: ['601', '228', '662'],
    Missouri: ['314', '816', '417', '573', '660'],
    Montana: ['406'],
    Nebraska: ['402', '308'],
    Nevada: ['702', '775'],
    'New Hampshire': ['603'],
    'New Jersey': ['201', '609', '908', '973', '732', '856'],
    'New Mexico': ['505', '575'],
    'New York': ['212', '315', '516', '518', '607', '716', '914', '917', '718', '631', '845', '646'],
    'North Carolina': ['704', '919', '336', '828', '252', '910', '980', '984'],
    'North Dakota': ['701'],
    Ohio: ['216', '614', '513', '419', '330', '937', '740', '440'],
    Oklahoma: ['405', '918', '580'],
    Oregon: ['503', '541'],
    Pennsylvania: ['215', '412', '717', '814', '610', '724', '484', '570'],
    'Rhode Island': ['401'],
    'South Carolina': ['803', '864', '843'],
    'South Dakota': ['605'],
    Tennessee: ['615', '901', '423', '931', '865', '731'],
    Texas: [
      '214',
      '512',
      '713',
      '915',
      '817',
      '903',
      '409',
      '210',
      '972',
      '830',
      '956',
      '281',
      '832',
      '940',
      '806',
      '325',
      '936',
      '432',
    ],
    Utah: ['801', '435'],
    Vermont: ['802'],
    Virginia: ['703', '804', '757', '540', '276'],
    Washington: ['206', '509', '360', '425', '253'],
    'West Virginia': ['304'],
    Wisconsin: ['414', '608', '715', '920', '262'],
    Wyoming: ['307'],
    'District of Columbia': ['202'],
    'American Samoa': ['684'],
    Guam: ['671'],
    'Northern Mariana Islands': ['670'],
    'Puerto Rico': ['787', '939'],
    'U.S. Virgin Islands': ['340'],
  },
  Canada: {
    Manitoba: ['204'],
    Saskatchewan: ['306'],
    Alberta: ['403', '780'],
    Ontario: ['416', '613', '519', '807', '705', '905', '647', '289', '343'],
    Quebec: ['418', '514', '819', '450', '438'],
    'British Columbia': ['604', '250'],
    'Nova Scotia, Prince Edward Island': ['902'],
    'New Brunswick': ['506'],
    'Newfoundland and Labrador': ['709'],
    'Northwest Territories, Yukon, Nunavut': ['867'],
  },

  'New Zealand': {
    'Area Codes': ['20', '21', '26', '27'],
  },
  Australia: {
    'Area Codes': ['4'],
  },
  UK: {
    'Area Codes': ['71', '72', '73', '74', '75', '77', '78', '79'],
  },
}

const countryCodeOf = {
  USA: '1',
  Canada: '1',
  'New Zealand': '64',
  Australia: '61',
  UK: '44',
}

const carriersOf = {
  USA: [
    'Mixed Carriers',
    'T-mobile', //
    'Metro PCS',
    'Sprint',
    'Verizon Wireless',
    'AT&T',
  ],
  Canada: [
    'Mixed Carriers',
    'Bell', //
    'Telus',
    'Roger',
    'Fido',
  ],

  'New Zealand': [
    'Mixed Carriers',
    'Spark', //
    'Vodafone',
    'Vocus',
    '2Degrees/Voyager',
    'Skinny Mobile',
  ],
  Australia: [
    'Mixed Carriers',
    'Telstra', //
    'Optus',
    'Vodafone',
  ],
  UK: [
    'Mixed Carriers',
    'EE', //
    'Three',
    'Vodafone',
    'Virgin/O2',
  ],
}

module.exports = { areasOfCountry, countryCodeOf, carriersOf }
