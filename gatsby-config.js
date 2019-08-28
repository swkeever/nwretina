require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'NW Retina',
    titleFull: 'Northwest Retina, LLC',
    phone: {
      office: '425-252-2333',
      fax: '425-525-3359',
    },
    address: {
      street: '1724 W Marine View Dr, Suite 130',
      city: 'Everett',
      state: 'WA',
      zipCode: 98201,
    },
    officeHours: {
      weekStart: 'Monday',
      weekEnd: 'Friday',
      hourStart: '8am',
      hourEnd: '5pm',
    },
    navLinks: [
      {
        link: {
          href: '/',
        },
        name: 'Home',
      },
      {
        link: {
          href: '/about/',
        },
        name: 'About',
      },
      {
        link: {
          href: '/your-visit/',
        },
        name: 'Your Visit',
      },
      {
        link: {
          href: 'location/',
        },
        name: 'Location',
      },
      {
        link: {
          href: 'https://www.mypatientvisit.com/#/login?practiceID=YKOXLW',
        },
        name: 'Medical Records',
      },
      {
        link: {
          href: '/billing-insurance/',
        },
        name: 'Billing & Insurance',
      },
      {
        link: {
          href: '/contact/',
        },
        name: 'Contact',
      },
    ],
    directions: {
      fromNorth: [
        'Take Everett Avenue exit off I-5 (exit 194)',
        'Travel west on Everett Ave 1.2 miles',
        'Turn right on Marine View Dr.',
        'Travel north on Marine View Dr. 0.8 miles',
        'Turn right on 18th into Marina Village',
      ],
      fromSouth: [
        'Take Pacific Ave exit off I-5 (exit 193)',
        'Travel west on Pacific 1.2 miles',
        'Turn right on Marine View Dr.',
        'Travel north on Marine View Dr. 1.2 miles',
        'Turn right on 18th Street into Marina Village',
      ],
    },
    insuranceProviders: [
      'Aetna',
      'Cigna',
      'Community Healthplan of Washington',
      'DSHS',
      'First Choice',
      'GEHA',
      'Humana',
      'Lifewise',
      'Medicare',
      'Molina',
      'Premera Blue Cross',
      'Premera Medicare Advantage',
      'Regence Blue Shield',
      'Regence Medicare Advantage',
      'Soundpath',
      'Tricare/Triwest',
      'Uniform Medical',
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-catch-links',
  ],
};
