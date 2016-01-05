# Angular AEM App

## Description
Angular 2 application invoking AEM content.

## Use and Installation

### Environment Setup
You will need node and typings to run this application.

For Node, use version 0.11 (that's what we are using)

run `node -v` to check version.

If not on the proper version install node version manager by running:
`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash`

Restart shell and run `nvm install 0.11`.

Then run `nvm use 0.11`, you will now be using node 0.11

You can go back to your previous version by running `nvm use {some_version}`

Then globally install typings
`npm install -g typings`

### Install dependencies

* `npm install`
* `typings install`

### Development

`npm run dev`
This will serve up the application on port 9000. Once the bundle is Valid, then open your browser to localhost:9000

### Production

`npm run prod`

## Documentation

To generate documentation run
`npm run docs`

Then view the html file in doc/index.html

