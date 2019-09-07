require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

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
    nav: {
      internal: [
        {
          link: '/',
          name: 'Home',
        },
        {
          link: '/about/',
          name: 'About',
        },
        {
          link: '/your-visit/',
          name: 'Your Visit',
        },
        {
          link: 'location/',
          name: 'Location',
        },
        {
          link: '/billing-insurance/',
          name: 'Billing & Insurance',
        },
        {
          link: '/contact/',
          name: 'Contact',
        },
      ],
      external: [
        {
          link: 'https://www.mypatientvisit.com/#/login?practiceID=YKOXLW',
          name: 'Your Medical Records',
        },
        {
          link: 'https://www.aao.org/',
          name: 'American Academy of Ophthalmology',
        },
        {
          link: 'https://goo.gl/maps/ZqnsBcWeuXWpVYRo9',
          name: 'Google Maps',
        },
      ],
    },
    socialMedia: {
      facebook: 'https://www.facebook.com/nwretina',
    },
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
  ],
};
