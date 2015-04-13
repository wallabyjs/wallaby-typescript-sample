module.exports = function (w) {

  return {
    files: [
      'src/*.ts'
    ],

    tests: [
      'test/*Spec.ts'
    ]

    // TypeScript compiler is on by default with default options,
    // you can configure built-in compiler by passing options to it
    // https://github.com/Microsoft/TypeScript/blob/master/src/compiler/types.ts#L1584
    //compilers: {
    //  '**/*.ts': w.compilers.typeScript({})
    //}

  };
};