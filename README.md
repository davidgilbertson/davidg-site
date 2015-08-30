# dg707-site
This is the sauce for [dg707.com](http://www.dg707.com).

## Developing
To run the site locally, do `npm run dev` which will kick off node running on port `80` and webpack running on port `8081`.

In this mode, the webpack dev server (a little express jobby) serves up the code.

Webpack will import CSS where it is required from within the components. **All** CSS must be imported into a component
hence `App.jsx` references `layout.scss`, `resets.scss`, `typography.scss` etc. Production treats CSS differently.

## Production
To build for deployment run `npm run build`.

During the build for production, all references to `scss` files from within components are gathered and processed
into a single `main.css` file which is hashed and then loaded into `index.html`.

## Server
The entry point for the server is `index.js` which does nothing more than require `babel/register` and call `server.js`.
Then it's ES2015 all the way down.

## Webpack Magic
In production, `index.js` looks at this file to get the hash that it needs to reference the JS and CSS files.

When `server.js` first responds, it gets a reference to the correct JS/CSS files and sends that to the HTML template. 

## Magic Numbers
Here be a list of funny looking settings that future me may be puzzled by:

* In package.json > tasks, `UV_THREADPOOL_SIZE` in the dev task is because of `https://github.com/sass/node-sass/issues/857`.

## TODO
* Clean up of the `node_modules` folder (e.g. `node-jsx` can go).

* Get the `<title>` working across routes

* Bring in [bubble reader](http://www.bubblereader.com), Facebook Slim and cookbox, do they even still work?

* There is shared logic/loaders/etc. in the two webpack configs, bring this out a config base and import it into the other config files.

* The arranging of images on load is a bit funky, can I do something here?