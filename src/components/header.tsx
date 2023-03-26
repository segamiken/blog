import * as React from "react"
import { css } from "@emotion/react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

type Props = {
  title: string
}

const Header = ({ title }: Props) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            twitter
            github
          }
        }
      }
    }
  `)

  const social = site.siteMetadata?.social

  return (
    <div css={baseStyle}>
      <h1 css={titleStyle}>
        <Link to="/">{title}</Link>
      </h1>
      <nav css={navigationStyle}>
        <a
          href={`https://twitter.com/${social.twitter}`}
          target="_blank"
          rel="external noopener"
          aria-label={`ken twitter account link`}
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href={`https://github.com/${social.github}`}
          target="_blank"
          rel="external noopener"
          aria-label={`ken GitHub account link`}
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </nav>
    </div>
  )
}

const baseStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const titleStyle = css`
  font-size: var(--fontSize-4);
  margin: 0;
`

const navigationStyle = css`
  display: flex;
  gap: var(--spacing-5);
  margin-right: var(--spacing-6);
`

export default Header
