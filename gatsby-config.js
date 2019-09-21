require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const csp = [
  "default-src 'self'",
  'frame-src https://www.google.com',
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' https://identity.netlify.com https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js https://www.google.com/recaptcha/api.js https://www.gstatic.com",
  "object-src 'none'",
].join('; ');

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.nwretina.com',
    description: 'Dr. Michael Osetinsky is a retina specialist in vitreo retinal diseases of the eye including macular degeneration, diabetic retinopathy, and retinal detachments.',
    keywords: [
      'eye',
      'retina',
      'retinal',
      'care',
      'medical',
      'doctor',
      'specialist',
      'clinic',
      'surgeon',
      'surgery',
      'Seattle',
      'Everett',
      'Washington',
      'WA',
      'Greater Seattle Area',
      'vitreoretinal disorders',
      'macular degeneration',
      'diabetic retinopathy',
      'retinal detachment',
    ],
    title: 'NW Retina',
    titleFull: 'Northwest Retina',
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
        icon: 'icon-facebook',
      },
    ],
    developer: {
      name: 'Sean Keever',
      link: 'https://swkeever.github.io',
    },
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
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        allPageHeaders: [
          `Content-Security-Policy: ${csp}`,
        ],
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
      },
    },
    'gatsby-plugin-netlify-cache',
  ],
};
