# babel-preset-min

This is a preset that uses the default options of [babel-minify](https://github.com/boopathi/babel-minify/tree/master/packages/babel-minify)

Check [babel-minify#options](https://github.com/boopathi/babel-minify/tree/master/packages/babel-minify#options) to find the default transformations applied or to find what exactly this preset will do.

**WARNING:** This might cause some regression, depending on what other plugins and presets you use with this preset - because all the plugins are applied in one pass by default in babel. You can enable the `passPerPreset` option in babel, but then all the `babel-minify` plugins are still applied in one pass. So, consider using  `babel-minify` NodeAPI or CLI or Gulp task with the [options](https://github.com/boopathi/babel-minify/tree/master/packages/babel-minify#options) - `plugins: []` and `presets: []` to pass your other plugins and presets.

## Install

```
npm install babel-preset-min --save-dev
```

### .babelrc

```json
{
  "presets": ["min"],
  "comments": false,
  "compact": true,
  "minified": true,
  "passPerPreset": true
}
```
