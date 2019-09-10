import React from 'react';
import {
  Layout,
  Head,
  Content,
} from '../components';
import routes from '../utils/routes';

const About = () => (
  <Layout>
    <Head title={routes.about.name} />
    <Content slugPrefix={routes.about.slug} />
  </Layout>
);

export default About;
