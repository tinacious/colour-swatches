# Colour Swatches

A small Angular app designed to display colour swatches nicely.

![Screenshot](screenshot.png)


## Development

Clone the repository.

Get the development environment setup:

    npm install
    bower install
    grunt server

Change the branding in the footer to your own.

Add colours in the `main.js` file:

```js
$scope.colours = [
  { name: 'orange', code: 'ffa629' },
  { name: 'green', code: '2fff83' },
  { name: 'raspberry', code: 'fb006f' }
];
```

## Distribution

Build a minified version of the colour swatches:

    grunt build
