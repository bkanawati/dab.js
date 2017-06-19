function webpackDabUncommentPlugin() {}

webpackDabUncommentPlugin.prototype.apply = function(compiler) {
  compiler.plugin('after-compile', function(compilation, callback) {
    const source = compilation.assets['../tests/mvp-test-sample.js'].source();
    compilation.assets['../tests/tape-test-sample.js'] = {
      source: function() {
        return source.replace(/(\/\* ~)|(\*\/)/g, '');
      },
      size: function() {
        return source.length;
      },
    };
    callback();
  });
};

module.exports = webpackDabUncommentPlugin;
