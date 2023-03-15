import * as React from "react"
import { Link, PageProps } from "gatsby"
import { css, Global } from "@emotion/react"
import { globalStyle } from "../styles/global"

type Props = {
  location: PageProps["location"]
  title: string
  children: React.ReactElement
}

const Layout = ({ location, title, children }: Props) => {
  // @ts-ignore
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <>
      <Global styles={globalStyle} />
      <div css={layoutBaseStyle}>
        <header css={headerBaseStyle}>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

const layoutBaseStyle = css`
  margin: var(--spacing-0) auto;
  max-width: var(--maxWidth-wrapper);
  padding: var(--spacing-10) var(--spacing-5);
`

const headerBaseStyle = css`
  margin-bottom: var(--spacing-12);
`

export default Layout
