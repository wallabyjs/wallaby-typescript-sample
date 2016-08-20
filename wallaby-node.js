module.exports = function (w) {

  return {
    files: [
      'src/*Node.ts'
    ],

    tests: [
      'test/*NodeSpec.ts'
    ],

    env: {
      type: 'node'
    },
    
    // you may remove the setting if you have a tsconfig.json file where the same is set
    compilers: {
      '**/*.ts': w.compilers.typeScript({module: 'commonjs'})
    }
  };
};
