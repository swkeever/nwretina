import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/hero';

const NotFound = (props) => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: {
        title: {
          eq: "not found"
        }
      }) {
        html
      }
    }
  `);

  console.log(data);

  return (
    <Layout>
      <Hero id="not-found">
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
        <div className="buttons">
          <Link to="/" className="button is-primary">Go Home</Link>
          <Link to="/contact/" className="button">Contact Us</Link>
        </div>
      </Hero>
    </Layout>
  );
};

NotFound.propTypes = {

};

export default NotFound;
