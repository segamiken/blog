---
title: 新しいブログを作りました
date: "2023-03-26"
description: "Gatsbyを使用して、新しいブログを作成しました。"
---

### 前置き
元々、[こちらのサイト](https://ken-japanmalaysia.com/)でほぼ日記レベルですが、ブログを執筆していました。

追記（2025年5月）：元のブログには100記事近く記事がありましたが、そのうち一部の10記事程度をこちらのサイトに移行済みです。

### ブログ引越しのモチベーション
- XServerのサーバー代を払いたくない
- ページの読み込み速度を向上させたい   
- wordpressの管理画面から記事を上げるのが面倒なので、楽に（できたらGitHubで）管理したい

### ブログ構築手順

- [gatsby-starter-blog](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog) を使用する。

- [Migrating to TypeScript](https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#migrating-to-typescript) にしたがって、TypeScript対応を行う。

- [typescript/#current-limitations](https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#parcel-typescript-features) にしたがって、一部修正する。
  - v4.9からgatsby-configはTypeScriptをsupportしているが、gatsby-starter-blog内の[記述](https://github.com/gatsbyjs/gatsby-starter-blog/blob/aa1a3ce37b656f6264ca4c267f0e9207b7660af4/src/pages/using-typescript.tsx#L23-L24)は古いままだったので、[issue](https://github.com/gatsbyjs/gatsby/issues/37550)を出して修正していただいた。

### まとめ

https://github.com/segamiken/blog でコードを管理しています。
今後、日本語・英語モードを切り替えて表示できるようにしたり、その他諸々付け加えていきたいなと考えています。