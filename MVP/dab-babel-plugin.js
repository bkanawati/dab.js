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
              // console.log('CURRENT COMMENTS', currcomments);
              // currcomments[0] is empty
              // currcomments[1] = name/description and is required
              let description = "'" + currcomments[1].replace(/\r\n/, "\n").split(/\n/)[0].replace(/^[ ]+|[ ]+$/g, '') + "'";
              console.log(description);
              let actual;
              let expression;
              let expected;
              let errMessage;
              let resultOfAssertion = "";
              let assertion;
              let changecomments;
              let startIndExpression;
              let expressionEndPoint;

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

                // Find the expression
                for (let j = 0; j < threeArgExpression.length; j++) {
                  if (argumentSplit[0].indexOf(threeArgExpression[j]) !== -1) {
                    // TODO HAVE BATUL EXPLAIN THIS
                    startIndExpression = argumentSplit[0].indexOf(threeArgExpression[j]);
                    // console.log('startIndExpress',startIndExpression);
                    expressionEndPoint = threeArgExpression[j].length;
                    // console.log('expressionEndPt',startIndExpression);
                  }
                }

                // If assertion contains an error message
                if (argumentSplit.length > 1) {
                  console.log("1st", argumentSplit);
                  let firstAssSplit = argumentSplit[0].slice(0, startIndExpression);
                  let secondAssSplit = argumentSplit[0].slice(startIndExpression);
                  actual = state.file.opts.sourceMapTarget.slice(0, state.file.opts.sourceMapTarget.length - 3) + "." + firstAssSplit.replace(/^[ ]+|[ ]+$/g, '');
                  expression = argumentSplit[0].slice(startIndExpression, startIndExpression + expressionEndPoint).replace(/^[ ]+|[ ]+$/g, '');;
                  // console.log('exp', expression)
                  expected = argumentSplit[0].slice(startIndExpression + expressionEndPoint).replace(/\r\n/, "\n").split(/\n/)[0];
                  let message = argumentSplit[1].replace(/\s*[\r\n]+\s*/g, "\n").split(/\n/)[0].replace(/^[ ]+|[ ]+$/g, '');
                  errMessage = "'" + message + "'";
                }
                // If assertion does not contain an error message
                if (argumentSplit.length < 2) {
                   console.log("2nd", argumentSplit[0]);
                  let firstAssSplit = argumentSplit[0].slice(0, startIndExpression);
                  let secondAssSplit = argumentSplit[0].slice(startIndExpression);
                  actual = state.file.opts.sourceMapTarget.slice(0, state.file.opts.sourceMapTarget.length - 3) + "." + firstAssSplit.replace(/^[ ]+|[ ]+$/g, '');
                  expression = argumentSplit[0].slice(startIndExpression, startIndExpression + expressionEndPoint).replace(/^[ ]+|[ ]+$/g, '');;
                  // TODO SHOULD WE HAVE A DEFAULT ERROR MESSAGE
                  expected = argumentSplit[0].slice(startIndExpression + expressionEndPoint).replace(/\r\n/, "\n").split(/\n/)[0];
                  errMessage = "'" +
                    "error" +
                    "'";
                }
                resultOfAssertion += "\t" + "t." + expression + "(" + actual + ", " + expected + ", " + errMessage + ");" + "\n";
                console.log(resultOfAssertion);
                return resultOfAssertion;
              }

              // if comments[2] does not exist (NO VARIABLES) then comments[2] would have been assertion
              if (currcomments[2][0] !== 'v') {
                if (currcomments.length >= 3) {
                  for (let i = 2; i < currcomments.length; i++) {
                    // TODO WHAT DOES THE REGEX SPACES DO?
                    if (currcomments[i] !== undefined && /\S/.test(currcomments[i])) {
                      assertion = assertions(currcomments[i]);
                    }
                  }
                }
                changecomments = " dabtest(" + description + ", function (t) {" + "\n" + assertion + "\t" + "t.end();" + "\n" + "});";
              }

              // if currcomments[2] is a variable (optional)
              let variables;
              if (currcomments[2].indexOf("v") !== -1 && currcomments[2][0] === 'v') {
                // TODO ENSURE THAT SPLITTING ON SEMI COLON DOESNT BREAK STUFF E.G. SEMICOLON IN STRINGS
                let varStorage = currcomments[2].slice(1).replace(/\s*[\r\n]+\s*/g, ";").split(";");
                let allVar = "";
                for (let eachVar = 0; eachVar < varStorage.length; eachVar++) {
                  // console.log("Variable storage" , varStorage);
                  if (/\S/.test(varStorage[eachVar]) && varStorage[eachVar] !== undefined) {
                    if (eachVar === varStorage.length - 1) {
                      // console.log("last var" , eachVar, varStorage[eachVar]);
                      allVar += "\t" + "let " + varStorage[eachVar].replace(/\s*[\r\n]+\s*/g, "\n").split(/\n/)[0] + ";";
                    } else {
                      // console.log("first var", eachVar, allVar);
                      allVar += "\t" + "let " + varStorage[eachVar].replace(/\s*/g, "") + ";" + "\n";
                    }
                  } else {
                    continue;
                  }
                }
                variables = allVar;
                // once variables are done currcomments[3] and so on will be assertion
                if (currcomments.length > 3) {
                  for (let i = 3; i < currcomments.length; i++) {
                    // TODO BATUL WHY TWO CHECKS?
                    if (currcomments[i] !== undefined && currcomments[i] !== " " && currcomments[i] !== "") {
                      assertion = assertions(currcomments[i]);
                    }
                  }
                }
                // TRANSPILED TEST SYNTAX
                changecomments = " dabtest(" + description + ", function (t) {" + "\n" + variables + "\n" + assertion + "\t" + "t.end();" + "\n" + "});";
              }
              comments[i].value = changecomments;
            }
          }
        }
      }
    }
  };
}
