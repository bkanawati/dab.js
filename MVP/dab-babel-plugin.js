module.exports = function({types: t}) {
  let tapeCount = 0;
  return {
    visitor: {
      Program(path, state) {
        // console.log("filename" ,state.file.opts);
        // if there are comments in the program file
        if (path.parent.comments.length) {
          const comments = path.parent.comments
          // loop through the comments
          for (let i = 0; i < comments.length; i += 1) {
            // console.log('comments', path.parent.comments[i].value)
            // require tape library setup
            const reqTape = " dabconst test = require('tape'); " +
            "\n" +
            "const " + state.file.opts.sourceMapTarget.slice(0, state.file.opts.sourceMapTarget.length - 3) + " = require('" + state.file.opts.filename + "');"
            // require file name setup
            const reqFileName = " dabconst " + state.file.opts.sourceMapTarget.slice(0, state.file.opts.sourceMapTarget.length - 3) + " = require('" + state.file.opts.filename + "');";
            // if a comments requires Tape then replace with complete require statement
            // TODO FIX TAPE SYNTAX!!!!!!!!!
            if (comments[i].value.includes('%Tape')) {
              // if (tapeCount === 0) {
              //   // console.log("first", comments[i].value );
                comments[i].value = reqTape;
              //   tapeCount++;
              // } else {
              //   // console.log("2nd", comments[i].value);
              //   comments[i].value = reqFileName;
              //   tapeCount++;
              // }
            }
// ----------------------------------------------------------------------------
            // SECTION INCLUDES NAME/DESCRIPTION - ASSERTION AND VARIABLES
            // Split on squigglys/tildas
            if (comments[i].value.includes('~')) {
              let currcomments = comments[i].value.split("~");
              // currcomments[0] is empty
              // currcomments[1] = name/description and is required
              let description = currcomments[1].replace(/\r\n/, "\n").split(/\n/)[0].replace(/^[ ]+|[ ]+$/g, '');
              let actual;
              let expression;
              let expected;
              let errMessage;
              let resultOfAssertion = "";
              let assertion;
              let startIndExpression;
              let expressionEndPoint;
              let variables;
              let finalCommentsTranspiled = "";

              // Helper function that splits the ASSERTION: actual, expected, and expression
              function assertions(string) {
                let argumentSplit = string.split("|");
                let threeArgExpression = [
                  "equal",
                  "notEqual",
                  "deepEqual",
                  "notDeepEqual",
                  "deepLooseEqual",
                  "notDeepLooseEqual"
                ];

                // Find the expression start index and end index
                for (let j = 0; j < threeArgExpression.length; j++) {
                  if (argumentSplit[0].indexOf(threeArgExpression[j]) !== -1) {
                    startIndExpression = argumentSplit[0].indexOf(threeArgExpression[j]);
                    expressionEndPoint = startIndExpression + threeArgExpression[j].length;
                  }
                }

                // If assertion contains an error message
                if (argumentSplit.length > 1) {
                  // console.log("1st", argumentSplit);
                  let firstAssSplit = argumentSplit[0].slice(0, startIndExpression);
                  let secondAssSplit = argumentSplit[0].slice(startIndExpression);
                  actual =  firstAssSplit.replace(/^[ ]+|[ ]+$/g, '');
                  expression = argumentSplit[0].slice(startIndExpression, expressionEndPoint).replace(/^[ ]+|[ ]+$/g, '');
                  expected = argumentSplit[0].slice(expressionEndPoint).replace(/\r\n/, "\n").split(/\n/)[0];
                  let message = argumentSplit[1].replace(/\s*[\r\n]+\s*/g, "\n").split(/\n/)[0].replace(/^[ ]+|[ ]+$/g, '');
                  errMessage = "'" + message + "'";
                }

                // If assertion does not contain an error message
                if (argumentSplit.length < 2) {
                  //  console.log("2nd", argumentSplit[0]);
                  let firstAssSplit = argumentSplit[0].slice(0, startIndExpression);
                  let secondAssSplit = argumentSplit[0].slice(startIndExpression);
                  actual =  firstAssSplit.replace(/^[ ]+|[ ]+$/g, '');
                  expression = argumentSplit[0].slice(startIndExpression, expressionEndPoint).replace(/^[ ]+|[ ]+$/g, '');
                  // TODO SHOULD WE HAVE A DEFAULT ERROR MESSAGE
                  expected = argumentSplit[0].slice(expressionEndPoint).replace(/\r\n/, "\n").split(/\n/)[0];
                  errMessage = "'" + "Error: " + description + "'"
                }
                resultOfAssertion = "\t" + "t." + expression + "(" + actual + ", " + expected + ", " + errMessage + ");" + "\n";
                // console.log(resultOfAssertion);
                return resultOfAssertion;
              }


              for (let index = 2; index < currcomments.length; index++) {
                  // if comments[index] is an assertion
                  if (currcomments[index][0] !== 'v' && currcomments[index][1] !== ':' && currcomments[index] !== undefined && /\S/.test(currcomments[index])) {
                      assertion = assertions(currcomments[index]);
                      finalCommentsTranspiled += assertion;
                  }

                  // if currcomments[index] is a variable (optional)
                  if (currcomments[index].indexOf("v:") !== -1 && currcomments[index][0] === 'v' && currcomments[index][1] === ':') {
                    variables = "\t" + currcomments[index].slice(2).replace(/^[ ]+|[ ]+$/g, '');
                    finalCommentsTranspiled += variables;
                  }
                  console.log("here we go again", finalCommentsTranspiled);
              }
              comments[i].value = " dabtest('" + description + "', function (t) {" + "\n" + finalCommentsTranspiled + "\t" + "t.end();" + "\n" + "});" ;
            }
          }
        }
      }
    }
  };
}
