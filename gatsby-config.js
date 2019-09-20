require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const cspDirectives = [
  "default-src 'self'",
  `script-src 
  'self' 
  'unsafe-inline' 
  https://identity.netlify.com/v1/netlify-identity-widget.js
  https://unpkg.com/aos@next/dist/aos.js
  https://www.google.com/recaptcha/api.js
  https://use.fontawesome.com/releases/v5.3.1/js/all.js
  `,
  "style-src 'self'",
];

const directivesToCspHeader = (headers) => headers.join(';');

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
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': [
            'X-Frame-Options: DENY',
            'X-XSS-Protection: 1; mode=block',
            'X-Content-Type-Options: nosniff',
            `Content-Security-Policy: ${directivesToCspHeader(cspDirectives)}`,
            'Referrer-Policy: no-referrer-when-downgrade',
          ],
        },
      },
    },
  ],
};
