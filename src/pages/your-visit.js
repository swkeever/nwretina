import React from 'react';
import {
  Layout,
  Head,
  Content,
} from '../components';
import navLinks from '../utils/routes';

const YourVisit = () => (
  <Layout>
    <Head title={navLinks.visit.name} />
    <Content slugPrefix={navLinks.visit.slug} />
  </Layout>
);

export default YourVisit;
