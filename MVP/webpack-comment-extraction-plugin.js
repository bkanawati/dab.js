function webpackCommentExtractionPlugin() {}

webpackCommentExtractionPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation, callback) {
    const source = compilation.assets['../tests/tape-test-sample.js'].source();
    compilation.assets['../tests/tape-test-sample.js'] = {
      source: function() {
       return source.replace(/(\/\*\ dab)|(\*\/)/g,'');
      },
      size: function() {
        return source.length;
      }
    };
    callback();
  });
};

module.exports = webpackCommentExtractionPlugin;
