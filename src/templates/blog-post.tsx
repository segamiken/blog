import * as React from "react"
import { Link, graphql, PageProps } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { css } from "@emotion/react"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}: PageProps<GatsbyTypes.BlogPostBySlugQuery>) => {
  const siteTitle = site?.siteMetadata?.title || `Title`
  const postTitle = post?.frontmatter?.title as string
  const postDescription = post?.frontmatter?.description || post?.excerpt

  return (
    <Layout location={location} title={siteTitle}>
      <>
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h1 itemProp="headline">{postTitle}</h1>
            <p>{post?.frontmatter?.date}</p>
          </header>
          <section
            css={blogPostStyle}
            dangerouslySetInnerHTML={{ __html: post?.html as string }}
            itemProp="articleBody"
          />
          <hr />
          <footer>
            <Bio />
          </footer>
        </article>
        <nav className="blog-post-nav">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields?.slug || "/"} rel="prev">
                  ← {previous.frontmatter?.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields?.slug || "/"} rel="next">
                  {next.frontmatter?.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }: any) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`

const blogPostStyle = css`
  ul,
  ol {
    padding-left: var(--spacing-5);
  }
`
