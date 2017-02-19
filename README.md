# Create Yo-Yo Component

Everything you need to create a modern JavaScript application.

You can scale this up to something more complex very easily.

[Inspired by this little post here](https://www.reddit.com/r/node/comments/5t2hc8/stepbystep_tutorial_to_build_a_modern_javascript/ddkk1v7/)

### Getting Started

```
git clone --depth 1 https://github.com/abradley2/create-app
mv create-app my-app-name
cd my-app-name
rm -rf .git
git init
npm install
npm run watch
```

### Development

Just execute `npm run watch` to start the simple development server with live-reload on
by default.

The app source is located in `/main.js`, so start there.

### Production

Run `npm run build` to build the bundle and export it to `/public/bundle.js`

`npm run start` will start up a static file server hosting the `/public` directory.

If you need an api, I suggest adding express and leveldb. Since this repository is
a quick-starter for prototyping, it would not make sense to have to have decisions
regarding back end and testing already made for you.

Just start prototyping.
