//v SHOULD BE CALLED ASYNCHRONOUSLY ONLY AFTER TEST FILE CREATION

function webpackCommentExtractionPlugin() {}

webpackCommentExtractionPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation, callback) {
    function unComment() {
        const file = compilation.assets['../tests/tape-test-sample.js'];
      if (file === undefined) {
        console.log('file is UNDEFINEDER')
          setTimeout(function(){unComment}, 1000);
      } else if (file) {
        console.log('file is defined')
        compilation.assets['../tests/tape-test-sample.js'] = {
          source: function() {
           return file.source().replace(/(\/\*\ dab)|(\*\/)/g,'');
          },
          size: function() {
            return file.source().length;
          }
        };
      }
    }
    callback();
    unComment();
  });
};

module.exports = webpackCommentExtractionPlugin;
