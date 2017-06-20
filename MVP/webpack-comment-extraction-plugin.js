// SHOULD BE CALLED ASYNCHRONOUSLY ONLY AFTER TEST FILE CREATION

function webpackCommentExtractionPlugin() {}

webpackCommentExtractionPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation, callback) {
    function unComment() {
        console.log('in function');
        const source = compilation.assets['../tests/tape-test-sample.js'].source();
        compilation.assets['../tests/tape-test-sample.js'] = {
          source: function() {
           return source.replace(/(\/\*\ dab)|(\*\/)/g,'');
          },
          size: function() {
            return source.length;
          }
        };
    }
    callback();
    unComment();
  });
};

module.exports = webpackCommentExtractionPlugin;
