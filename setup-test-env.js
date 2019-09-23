import '@testing-library/jest-dom/extend-expect';
import { useStaticQuery } from 'gatsby';
import routes from './src/utils/routes';

//
// IMPORTANT:
// you can only use these exports in test files!
//

export const testImage = '__mocks__/pnw.jpg';

const siteData = {
  site: {
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
  },
};

const allFileData = {
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

const allMarkdownRemarkData = {
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

export const data = {
  ...siteData,
  ...allFileData,
  ...allMarkdownRemarkData,
};

export const acceptSubstrings = {
  exact: false,
};

useStaticQuery.mockImplementation(() => data);
