require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const scriptSources = require('./src/utils/scripts/sources');

module.exports = {
  siteMetadata: {
    title: 'NW Retina',
    titleFull: 'Northwest Retina, LLC',
    phone: {
      office: '425-252-2333',
      fax: '425-525-3359',
    },
    address: {
      street: {
        line1: '1724 W Marine View Dr',
        line2: 'Suite 130',
      },
      city: 'Everett',
      state: 'WA',
      zipCode: 98201,
      coordinates: {
        latitude: 47.995280,
        longitude: -122.22245,
      },
    },
    officeHours: {
      weekStart: 'Monday',
      weekEnd: 'Friday',
      hourStart: '8am',
      hourEnd: '5pm',
    },
    socialMedia: [
      {
        name: 'Facebook',
        href: 'https://www.facebook.com/nwretina',
      },
    ],
    developer: {
      name: 'Sean Keever',
      link: 'https://swkeever.github.io',
    },
    siteUrl: 'https://www.nwretina.com',
    email: 'office@nwretina.com',
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static`,
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
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-csp',
      options: {
        directives: {
          'script-src': [
            '\'self\'',
            ...Object.values(scriptSources),
          ].join(' '),
        },
      },
    },
  ],
};
