import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import {
  Hero,
  Header,
  Layout,
} from '../components';

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
      <Hero
        id="not-found"
        color="primary"
        image="/uploads/pnw2.jpg"
      >
        <Header content="Page not found." />
        <div className="buttons">
          <Link to="/" className="button is-white is-outlined">Go Home</Link>
          <Link to="/contact/" className="button is-white is-outlined">Contact Us</Link>
        </div>
      </Hero>
    </Layout>
  );
};

NotFound.propTypes = {

};

export default NotFound;
