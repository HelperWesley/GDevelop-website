import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import PageContainer from '../../lib/PageContainer';
import Helmet from 'react-helmet';
import Navbar, { NavBarSpacer } from '../../components/Navbar';
import BannerContainer from '../../components/Containers/BannerContainer';
import { renderWebMonetizationMeta } from '../../lib/WebMonetization';

import Spacer from '../../components/Grid/Spacer';
import CenteredRow from '../../components/Grid/CenteredRow';
import SkewedBorderContainer from '../../components/Containers/SkewedBorderContainer';
import WhiteHugeTitle from '../../components/WhiteHugeTitle';
import BlogCard from '../../components/BlogCard';

const List = function ({ data, pageContext }) {
  const thumbnails = data.allFile.edges;
  const posts = data.allMarkdownRemark.edges;
  return (
    <PageContainer {...pageContext}>
      {(t) => {
        return (
          <React.Fragment>
            <Helmet title={t('GDevelop Blog')}>
              <html lang={pageContext.localeCode} />
              <meta
                name="description"
                content="GDevelop is a game creator bundled with dozens of features to imagine and create any kind of games. No coding skills are required."
              />
              {renderWebMonetizationMeta()}
            </Helmet>
            <Navbar t={t} />
            <BannerContainer>
              <NavBarSpacer />
              <WhiteHugeTitle>{t('GDevelop Blog')}</WhiteHugeTitle>
            </BannerContainer>
            <Spacer height="20px" />
            <SkewedBorderContainer>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug;
                const content = node.frontmatter.description || node.excerpt;

                const slug = node.fields.slug.replace("/", "");
                let thumbnail = null;
                for(let n of thumbnails) {
                  const {node} = n;
                  if(node.relativePath.indexOf(slug) !== -1 && node.relativePath.indexOf("thumbnail") !== -1) {
                    thumbnail = node.publicURL;
                    break;
                  }
                }
                console.log(thumbnail);

                return (
                  <React.Fragment>
                    <CenteredRow key={node.fields.slug}>
                      <BlogCard
                        title={title}
                        content={content}
                        link={'/blog/post' + node.fields.slug}
                        date={node.frontmatter.date}
                        thumbnail={thumbnail}
                      />
                    </CenteredRow>
                    <Spacer height="50px" />
                  </React.Fragment>
                );
              })}
            </SkewedBorderContainer>
          </React.Fragment>
        );
      }}
    </PageContainer>
  );
};

export default List;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { hidden: { ne: true } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 350)
          fields {
            slug
          }
          frontmatter {
            date
            title
            description
            hidden
          }
        }
      }
    }
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      edges {
        node {
          publicURL
          relativePath
        }
      }
    }
  }
`;
