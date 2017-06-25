// SHOULD BE CALLED ASYNCHRONOUSLY ONLY AFTER TEST FILE CREATION

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
        // if (file.source().includes('dabTape')) {
          compilation.assets['../tests/tape-test-sample.js'] = {
            source: function() {
              console.log(file.source());
              // remove dabTape if we move away from multiple file/framework feature
              // CHANGE DABTAPE/DAB SIGNALLERS
             return "const test = require('tape')" + "\n" + file.source().replace(/(\/\*\ dabTape)|(\/\*\ dab)|(\*\/)/g,'');
            },
            size: function() {
              return file.source().length;
            }
          };
        // }
      }
    }
    callback();
    unComment();
  });
};

module.exports = webpackCommentExtractionPlugin;
