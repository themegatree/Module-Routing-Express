# Modular Routing in Express Apps

## Learning objectives

- Explain the benefits of modularising route handlers
- Modularise route handlers in an Express application
- Use `app.locals` to store application level data

### Quickstart
```sh
$ npm install
$ npm start
```

### Run tests
```sh
# feature tests
$ npm start
$ npx cypress open

# unit tests
$ npx jasmine
```

## Instructions

* Extract an **Index** router from `app.js` using Express Router
* Extract a **Game** router from `app.js` using Express Router
* Extract a **Turn** router from `app.js` using Express Router
* Your cypress tests should still pass
* Your jasmine tests should still pass


## Resources

- [Express Routing](https://expressjs.com/en/guide/routing.html#express-router)
- [Express App Locals](https://expressjs.com/en/api.html#app.locals)
- [Resources and State](https://sjmog.github.io/rest/)
