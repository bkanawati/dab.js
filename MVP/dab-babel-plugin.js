module.exports = function ({types: t}) {
  let tapeCount = 0;
  return {
    visitor: {
      Program(path, state) {
        // if there are comments in the program file

        if (path.parent.comments.length) {
          // console.log(path.parent.comments,state.file.opts.sourceMapTarget);
          //  console.log(path.parent.comments, state.file.opts.sourceFileName);
          // loop through comments

          for (let i = 0; i < path.parent.comments.length; i += 1) {
            let testArr = [];
            // console.log('COMMENTS', path.parent.comments[i].value)
            let comment = path.parent.comments
            // console.log(tapeCount);
            let reqTape = " dabconst test = require( 'tape' ); " + "\n" + "const " + state.file.opts.sourceMapTarget.slice(0,state.file.opts.sourceMapTarget.length-3) + " = require('" + state.file.opts.filename + "');"
            let reqFileName = " dabconst " + state.file.opts.sourceMapTarget.slice(0,state.file.opts.sourceMapTarget.length-3) + " = require('" + state.file.opts.filename + "');";
            // if a comment requires Tape then replace with complete require statement
            if (comment[i].value.includes('%Tape')) {
              // console.log("comm", comment[i].value);
              if (tapeCount === 0) {
                // console.log("first", comment[i].value );
                comment[i].value = reqTape;
                tapeCount++;
              } else {
                // console.log("2nd", comment[i].value);
                comment[i].value = reqFileName;
                tapeCount++;
              }
            }
            if (comment[i].value.includes('~')) {
              let currComment = comment[i].value.split("~");

              // currComment[0] is empty
              // currComment[1] is description always
              let description = "'" + currComment[1].split(/\n/)[0] + "'";
              let actual;
              let expression;
              let expected;
              let errMessage;
              let resultOfAssertion = "";
              let assertion;
              let changeComment;
              function assertions(string) {
                let argumentSplit = string.split(":");
                //if assertion contains an error message
                if (argumentSplit.length > 1) {
                  // console.log("1st", argumentSplit);
                  actual = argumentSplit[0].split(" ")[0];
                  expression = argumentSplit[0].split(" ")[1];
                  expected = argumentSplit[0].split(" ")[2];
                  let message = argumentSplit[1].split(/\n/)[0];
                  errMessage = "'" + message + "'";
                  console.log(message)
                }
                //if assertion does not contain an error message
                 if (argumentSplit.length < 2) {
                  let noArgumentSplit = string.split(" ");
                  // console.log("2nd", noArgumentSplit);
                  actual = noArgumentSplit[0];
                  expression = noArgumentSplit[1];
                  expected = noArgumentSplit[2].split(/\n/)[0];
                  errMessage = "'" + "errorr" + "'";
                }
                resultOfAssertion += "   t." + expression + "(" + actual + ", " + expected + ", " + errMessage + ");" + "\n";
                console.log(resultOfAssertion);
                return resultOfAssertion;
              }
              // if comment[2] does not exist then comment[2] would have been assertion
              if (currComment[2].indexOf("v") === -1 && currComment[2][0] !== 'v') {
                if (currComment.length >= 3 ){
                  for(let i = 2; i < currComment.length; i++) {
                    if (currComment[i] !== undefined && /\S/.test(currComment[i])) {
                      assertion = assertions(currComment[i]);
                    }
                  }
                }
                changeComment = " dabtest(" + description + ", function (t) {" + "\n" + assertion  + "t.end();" + "\n" + "});";
              }
              // if currComment[2] is a variable (optional)
              let variables;
              if (currComment[2].indexOf("v") !== -1 && currComment[2][0] === 'v') {
                let varStorage = currComment[2].slice(1).split(";");
                let allVar = "";
                for(let eachVar = 0; eachVar < varStorage.length; eachVar++) {
                  console.log("Variable storage" , varStorage);
                  if (/\S/.test(varStorage[eachVar]) && varStorage[eachVar] !== undefined) {
                    if (eachVar === varStorage.length-1) {
                      console.log("last var" , eachVar, varStorage[eachVar]);
                      allVar += "   let " + varStorage[eachVar].split(/\n/)[0] + ";";
                    } else {
                      console.log("first var", eachVar, allVar);
                      allVar += "   let " + varStorage[eachVar] + ";" + "\n";
                    }
                  } else {
                    continue;
                  }
                }
                variables = allVar;
                if (currComment.length > 3 ){
                  for(let i = 3; i < currComment.length; i++) {
                    if (currComment[i] !== undefined && currComment[i] !== " " && currComment[i] !== "") {
                      assertion = assertions(currComment[i]);
                    }
                  }
                }
                changeComment = " dabtest(" + description + ", function (t) {" + "\n" + variables + "\n" + assertion + "   t.end();" + "\n" + "});";
              }
              comment[i].value = changeComment ;
            }
          }
        }
      }
    }
  };
}
