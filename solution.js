// A class to check the paratheses and generate the output
class Parantheses {

// Initial Method to parse the given strings of arrays.
    braces(values) {
        let value;

        let result = [];
        let len = values.length;

        for (value of values) {
            if (ob.checkCorrectness(value)) {
                result.push('YES');
            } else {
                result.push('NO');
            }
        }
        return result;
    }

    // The method to check the correctness of Paranthesis and write 'YES' or 'NO' accordingly.
    checkCorrectness(str) {
        let i, ch, expectedBracket;

        let temp = [];
        let len = str.length;

        const openingBrackets = ['[', '{', '('];
        const closingBrackets = [']', '}', ')'];

        for (ch of str) {

            if (openingBrackets.indexOf(ch) > -1) {
                temp.push(ch);
            } else if (closingBrackets.indexOf(ch) > -1) {

                expectedBracket = openingBrackets[closingBrackets.indexOf(ch)];
                if (temp.length === 0 || (temp.pop() !== expectedBracket)) {
                    return false;
                }

            } else {
                // Ignore the characters which do not match valid Brackets symbol
                continue;
            }
        }

        return (temp.length === 0);
    }


}

// Inputs
const i1 = ["{}[]()", "{[}]"];
const i2 = ['()[]()([]()[])', '((]([)]', '{}[]()', '{{}]}', '{[}', '{[}]'];

// Outputs
var result1 = [];
var result2 = [];

// Create objects for the class Paranthes
var ob = new Parantheses();
var obj1 = new Parantheses();
var obj2 = new Parantheses();

// calling the methods in the Parantheses class and the storing the outputs.
result1 = obj1.braces(i1);
result2 = obj2.braces(i2);


console.log("The Resultant Array is : ", result1);

console.log("The Resultant Array is : ", result2);
