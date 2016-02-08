module.exports = function (w) {

  return {
    files: [
      'src/*Browser.ts'
    ],

    tests: [
      'test/*BrowserSpec.ts'
    ]

    // TypeScript compiler is on by default with default options (and options from tsconfig.json),
    // you can also configure built-in compiler by passing options to it
    //compilers: {
    //  '**/*.ts': w.compilers.typeScript({})
    //}

  };
};
