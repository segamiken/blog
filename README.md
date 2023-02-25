# ブログ構築手順

- [gatsby-starter-blog
](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog) を使用する。

- [Migrating to TypeScript
](https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#migrating-to-typescript) にしたがって、TypeScript対応を行う。

- [typescript/#current-limitations](https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#parcel-typescript-features) にしたがって、一部修正する。
  - [v4.9からgatsby-configはTypeScriptをsupportしている](https://www.gatsbyjs.com/docs/reference/release-notes/v4.9/#support-for-typescript-in-gatsby-config-and-gatsby-node)が、
  [gatsby-starter-blog内の記述](https://github.com/gatsbyjs/gatsby-starter-blog/blob/aa1a3ce37b656f6264ca4c267f0e9207b7660af4/src/pages/using-typescript.tsx#L23-L24)の記述は古いままだったので、[issue](https://github.com/gatsbyjs/gatsby/issues/37550)を出して修正していただいた。