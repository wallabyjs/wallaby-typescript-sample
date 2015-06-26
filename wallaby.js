module.exports = function (w) {

  return {
    files: [
      'src/*Browser.ts'
    ],

    tests: [
      'test/*BrowserSpec.ts'
    ]

    // TypeScript compiler is on by default with default options,
    // you can configure built-in compiler by passing options to it
    // See interface CompilerOptions in
    // https://github.com/Microsoft/TypeScript/blob/master/src/compiler/types.ts
    //compilers: {
    //  '**/*.ts': w.compilers.typeScript({})
    //}

  };
};
