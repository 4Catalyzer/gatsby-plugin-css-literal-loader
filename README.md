# gatsby-plugin-css-literal-loader

Provides drop-in support for https://github.com/4Catalyzer/css-literal-loader

## Install

`npm install --save less gatsby-plugin-css-literal-loader`

## How to use

1.  Include the plugin in your `gatsby-config.js` file.
2.  Optionally configure for a css-preprocesser

```javascript
// in gatsby-config.js
plugins: [`gatsby-plugin-css-literal-loader`];
```

You can also pass options directly to the loader: see https://github.com/4Catalyzer/css-literal-loader#setup
for all available options.

```javascript
// in gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-css-literal-loader`,
    options: {
      tagName: 'less',
      extension:
    },
  },
];
```

### Use with other gatsby preprocessor plugins

`gatsby-plugin-css-literal-loader` pairs nicely with Sass, Less, PostCSS or any other preprocessor, many of which already have Gatsby plugins.

** Sass **

```javascript
// in gatsby-config.js
plugins: [
  'gatsby-plugin-sass'
  {
    resolve: `gatsby-plugin-css-literal-loader`,
    options: { extension: '.module.scss' },
  },
];
```

** Less **

```javascript
// in gatsby-config.js
plugins: [
  'gatsby-plugin-sass'
  {
    resolve: `gatsby-plugin-css-literal-loader`,
    options: { extension: '.module.less' },
  },
];
```

** Other thing **

I think you see the pattern here :)
