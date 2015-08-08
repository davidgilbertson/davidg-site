# dg707-site
This is the sauce for [dg707.com](http://www.dg707.com).

## Developing
To run the site locally, do `npm run dev` which will kick off webpack running on port `80`. 
This will pick options from `webpack.config.js`

In this mode, the webpack dev server (a little express jobby) serves up the code, `build/index.html` is 
the entry point and is only there for development work.

Webpack will import CSS where it is required from within the components. **All** CSS must be imported into a component
hence `App.jsx` references `layout.scss`, `resets.scss`, `typography.scss` etc. Production treats CSS differently.

## Production
To build for deployment run `npm run prod`.

This does this: `set NODE_ENV=production&& webpack -p --config webpack.production.config.js && nodemon`.
Setting the environment is necessary for testing locally (and is Windows only).

During the build for production, all references to `scss` files from within components are gathered and processed
into a single `main.css` file which is hashed and then loaded into `index.html`.

## Server
The entry point for the server is `start.js` which does nothing more than require `babel/register` and call `server.js`.
Then it's ES2015 all the way down.

## Webpack Magic
I've got a little plugin in `webpack.production.config.js` that dumps the stats out to `webpack-build-stats.json`
when `npm run prod` is run.

In production, `server.js` looks at this file to get the hash that it needs to reference the JS and CSS files.

When `server.js` first responds, it gets a reference to the correct JS file and sends that to the HTML template. 
It also gets the compiled CSS and inlines it in a `<style>` tag.

Server-side rendering only happens in production mode.

## Performance
It's a single network request to get ~20kb of HTML, CSS and the font downloaded and rendered at the moment. I'll be happy
with the setup up until the first page is getting near ~200kb. Then I'll think about splitting out the CSS so that's
not loading on every request (it's not cached if it's inlined).

My JS is 210kb (most of which is fat React) but that's not so bad because the page is rendered server-side it
looks finished without the JS.

## TODO
* On each new build I should be clearing out the `dist` directory.

* Clean up of the `node_modules` folder (e.g. `node-jsx` can go).

* `server/routes.jsx` is an odd mix of concerns. I'd prefer a config file separate the the JSX.

* Get the `<title>` working across routes

* Do better with the header on the iFramed sites

* Bring in [bubble reader](http://www.bubblereader.com), Facebook Slim and cookbox, do they even still work?

* Maybe use this site a testbed for self-testing react components

* There is shared logic/loaders/etc. in the two config files, bring this out a config base and import it into the other config files.

* Hide/show nav doesn't update the masonry photo layout

* The arranging of images on load is a bit funky, can I do something here?