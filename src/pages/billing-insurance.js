import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import { Content } from '../components';
import slugs from '../utils/slugs';

const BillingInsurance = () => {
  return (
    <Layout location="/billing-insurance/">
      <Head title="Billing & Insurance" />
      <Content slugPrefix={slugs.billing} />
    </Layout>
  );
};

export default BillingInsurance;
