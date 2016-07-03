# babel-minify

Node API + CLI

## Install

```
npm install babel-minify --save-dev
```

## Example

```js
import minify from 'babel-minify';
const outputCode = minify(inputCode, {
  conditionals: true,
  drop_debugger: true
});
```

## Options

Options and defaults

```js
{
  mangle         = true,
  mangle_globals = false,

  dead_code      = false,
  conditionals   = true,
  evaluate       = true, // eval constant expressions
  drop_debugger  = false,
  drop_console   = false,
  properties     = true,
  join_vars      = true,
  booleans       = true,
  unsafe         = true,
  keep_fnames    = false,

  // number of passes
  npasses        = 1,

  // passed on to babel transform to tell whether to use babelrc
  babelrc        = false,

  // should there be any other plugins added to this build process
  plugins        = [],

  // should there be any other presets
  presets        = [],

  // if false, babel-minify can give a list of plugins to use as a preset
  minify         = true,
}
```

## Internals

Plugins used for specific options

+ [mangle](https://github.com/boopathi/babel-minify/tree/master/packages/babel-plugin-transform-mangle)
+ mangle_globals - [mangle-options](https://github.com/boopathi/babel-minify/tree/master/packages/babel-plugin-transform-mangle#options)
+ [dead_code](https://www.npmjs.com/package/babel-plugin-transform-dead-code-elimination)
+ [x] [conditionals](https://github.com/boopathi/babel-minify/tree/master/packages/babel-plugin-transform-conditionals)
+ [evaluate](https://github.com/boopathi/babel-minify/tree/master/packages/babel-plugin-transform-evaluate)
+ [drop_debugger](https://www.npmjs.com/package/babel-plugin-transform-remove-debugger)
+ [drop_console](https://www.npmjs.com/package/babel-plugin-transform-remove-console)
+ properties - [member-expression-literals](https://www.npmjs.com/package/babel-plugin-transform-member-expression-literals), [property-literals](https://www.npmjs.com/package/babel-plugin-transform-property-literals)
+ [join_vars](https://www.npmjs.com/package/babel-plugin-transform-merge-sibling-variables)
+ booleans - [minify booleans](https://www.npmjs.com/package/babel-plugin-transform-minify-booleans)
+ unsafe - [undefined-to-void](https://www.npmjs.com/package/babel-plugin-transform-undefined-to-void), [simplify-comparison-operators](https://www.npmjs.com/package/babel-plugin-transform-simplify-comparison-operators)
+ keep_fnames - [mangle-options](https://github.com/boopathi/babel-minify/tree/master/packages/babel-plugin-transform-mangle#options)