const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'content' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;
  createRedirect({
    fromPath: '/everett',
    toPath: '/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/medical-records',
    toPath: '/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/everett/kirkland',
    toPath: '/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/hello-world',
    toPath: '/',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/billing-insurance/kirkland',
    toPath: '/',
    isPermanent: true,
  });
};
