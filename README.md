# Space Invaders

Play Space Invaders in your browser! (Well, move your spaceship and watch enemies approach you; there's no bullets flying yet).

## Play

Hosted version of [the game is here](https://thekevinscott.github.io/space-invaders/).

Move your spaceship using the left or right arrow keys. You can also use "h" and "l" because Vim is awesome. Make sure your browser window has focus.

## Code
Code is organized as follows:

```
- app: all the javascript code for the game
- assets: various image files for enemies and spaceship
- node_modules: I'm using yarn to require packages like less and reset-css
- styles: all the stylesheets
```

The JS is written in vanillajs (no frameworks). `index.js` sets up the game. `utils.js` provides convenience methods for working with the DOM.

The rest of the JS files are classes providing functionality around game elements (enemies, player, etc.)

## Requirements
Please use the latest version of Chrome or Safari.

The code uses uncompiled ES6 modules, which are supported natively in Chrome 61+ and Safari 11+

https://caniuse.com/#feat=es6-module
