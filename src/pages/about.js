import React from 'react';
import {
  Layout,
  Head,
  Content,
} from '../components';
import slugs from '../utils/slugs';

const About = () => (
  <Layout location="/about/">
    <Head title="About" />
    <Content slugPrefix={slugs.about} />
  </Layout>
);

export default About;
