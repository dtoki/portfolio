# Gridsome Clean Snow blog theme.

A simple, hackable & minimalistic starter for Gridsome that uses Markdown for content, these theme was built using the [gridsome starter blog](https://github.com/gridsome/gridsome-starter-blog) modified with bootstrap css v4 and inspired by some other themes:

- [Reactgo blog](https://www.gatsbyjs.org/showcase/reactgo.com)
- [Gridsome starter blog](https://gridsome-starter-blog.netlify.com)

## Features

- Beautiful and simple design.
- Markdown for content.
- Tags support.
- Dark / Light toggle.
- CSS variables, SCSS & BEM for styling.
- 100, 100, 100, 100 score on Google Lighthouse.
- Uses same front-matter fields as Dev.to.

### [Demo URL](https://portfolio-git-master.dtoki.vercel.app)

___

## Getting Started With Gridsome

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Install this starter

1. `gridsome create my-gridsome-site https://github.com/gridsome/gridsome-starter-blog.git`
2. `cd my-gridsome-site` to open folder
3. Happy coding 🎉🙌

___

## Developing

### Commands

#### `gridsome develop`

Starts a local dev server accessisble at [localhost](http://localhost:8080)

___

### FAQ?

Running into `node-gyp` build issues?

```shell
$sudo rm -f $(xcode-select --print-path)     #removes the xcode cli tools path you currently have installed.

$xcode-select --install                      #should force the promt to reinsall CLI tools to appear if it doen't show up automatically.
```
