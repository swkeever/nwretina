import routes from './utils/routes';

export const siteData = {
  site: {
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
  },
};

export const testImage = '/__mocks__/pnw.jpg';

export const allFileData = {
  allFile: {
    edges: [
      {
        node: {
          childImageSharp: {
            fluid: {
              base64: 'base64',
              aspectRatio: 1.0,
              src: testImage,
              srcSet: testImage,
              sizes: '100',
            },
          },
          relativePath: `${testImage}`,
        },
      },
    ],
  },
};

export const allMarkdownRemarkData = {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          id: '1',
          html: '<div><p>Lorem nostrud ex reprehenderit pariatur eu magna veniam voluptate voluptate pariatur nostrud exercitation.</p></div>',
          frontmatter: {
            order: 1,
            title: 'Your Eyes Matter 👀',
            image: `/${testImage}`,
            page: routes.about.name,
            imageDescription: 'Apple',
          },
          fields: {
            slug: routes.about.slug,
          },
        },
      },
      {
        node: {
          id: '2',
          html: '<div><p>In esse deserunt tempor officia minim ex dolore est commodo laboris culpa esse aute.</p></div>',
          frontmatter: {
            order: 2,
            title: 'Retina Care',
            image: `/${testImage}`,
            page: routes.about.name,
            imageDescription: '🍎',
          },
          fields: {
            slug: routes.about.slug,
          },
        },
      },
      {
        node: {
          id: '3',
          html: '<div><p>In esse <strong>deserunt</strong> tempor officia minim ex dolore est commodo laboris culpa esse aute.</p></div>',
          frontmatter: {
            order: 3,
            title: 'We Put Patients First',
            image: `/${testImage}`,
            page: routes.about.name,
            imageDescription: '😃',
          },
          fields: {
            slug: routes.about.slug,
          },
        },
      },
    ],
  },
};

export const acceptSubstrings = {
  exact: false,
};
