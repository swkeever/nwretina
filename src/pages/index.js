import React from 'react';
import slugs from '../utils/slugs';
import {
  Content,
  Jumbotron,
  Head,
  Layout,
} from '../components';
import getContent from '../functions/get-content';
import toAnchorLink from '../functions/to-anchor-link';

export default () => {
  const content = getContent(slugs.home);
  const anchor = toAnchorLink(content[0].id);

  return (
    <Layout location="/">
      <Head title="Home" />
      <Content slugPrefix={slugs.home} homePage />
    </Layout>
  );
};
