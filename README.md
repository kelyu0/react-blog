<h1 align="center">
  React Issue Blog
</h1>
<h2 align="center">
  A minimal personal blog system.
</h2>

## 👉 [Demo](https://kelyu0.github.io/)

- Front-end : `React` + `React-router`, bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Get issues by `Github api` - [My articles repo](https://github.com/kelyu0/articles/issues)
- Deploy with `Github pages` - [My github.io repo](https://github.com/kelyu0/kelyu0.github.io)

## 🔥 Features

- Syntax/Code Highlighting
- Article anchor navigation
- Responsive
- Back to the top
- Jump to github comments

## 🌱 Minimalist

Minimalist page, minimal code. Use the most streamlined code to achieve the most needed functions.

- 3 Pages：Issue list, Issue content, About
- 5 Files：Posts.js, Post.js, PostContent.js, About.js, Catalog.js

## 🚀 Usage

### Local preview

```
  git clone git@github.com:kelyu0/react-issue-blog.git
  cd react-issue-blog
  npm install
  npm run start
```

Open http://localhost:3000 to view it in the browser.

### Customize

Change the content in src/config.js and customize it as your blog.

    export const config = {
      // Your Github UserName
      githubUserName: "kelyu0",
      // Your Github Repo Name Where You Have your issues as Blog
      githubRepo: "articles",
      // About Page links
      thirdPartySite: [
        {
          href: "https://github.com/kelyu0",
          title: "GitHub",
        },
        //Other sites ...
      ],
    };

### build

    npm run build  # Compiles and minifies for production
