# snake
> Simple rendition of the classic snake game using HTML5 and canvas.
> Snake is a game where the player maneuvers a line which grows in length, with the line itself being a primary obstacle.

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

```shell
git clone https://github.com/wilmoore/snake-game.js.git
cd snake-game
npm install
npm run build
open index.html
```

## How does this differ from the original?

This is based on [Intro to JS for Games: Building Snake]; however, the following changes have been made:

- Uses JS constructor functions and prototypes.
- Organizes the code into cohesive CommonJS modules.
- Uses browserify and CommonJS instead of relying on globals.
- Uses a key map to define keyboard actions.

## Inspiration

- [Intro to JS for Games: Building Snake](http://slides.com/zachklabunde/js-for-games)

## Licenses

[![GitHub license](https://img.shields.io/github/license/wilmoore/snake-game.js.svg)](https://github.com/wilmoore/snake-game.js/blob/master/license)


[Intro to JS for Games: Building Snake]: http://slides.com/zachklabunde/js-for-games
