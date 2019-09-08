import React from 'react';
import {
  Layout,
  Head,
  Content,
} from '../components';
import navLinks from '../utils/routes';

const About = () => (
  <Layout location={navLinks.about.href}>
    <Head title={navLinks.about.name} />
    <Content slugPrefix={navLinks.about.slug} />
  </Layout>
);

export default About;
