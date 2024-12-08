/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number < 0) {
    return false;
  }
  return true;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let result = 0;
  if (a > b && a > c) {
    result = a;
  } else if (b > a && b > c) {
    result = b;
  } else {
    result = c;
  }
  return result;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  const result =
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y);
  return result;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === b) {
    return a + b > c && c > 0;
  }
  if (a === c) {
    return a + c > b && b > 0;
  }
  if (b === c) {
    return b + c > a && a > 0;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let number = num;

  const keys = ['X', 'IX', 'V', 'IV', 'I'];
  const values = [10, 9, 5, 4, 1];

  let str = '';

  for (let i = 0; i < keys.length; i += 1) {
    while (number >= values[i]) {
      str += keys[i];
      number -= values[i];
    }
  }

  return str;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let str = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '-':
        str += 'minus ';
        break;
      case '0':
        str += i === numberStr.length - 1 ? 'zero' : 'zero ';
        break;
      case '1':
        str += i === numberStr.length - 1 ? 'one' : 'one ';
        break;
      case '2':
        str += i === numberStr.length - 1 ? 'two' : 'two ';
        break;
      case '3':
        str += i === numberStr.length - 1 ? 'three' : 'three ';
        break;
      case '4':
        str += i === numberStr.length - 1 ? 'four' : 'four ';
        break;
      case '5':
        str += i === numberStr.length - 1 ? 'five' : 'five ';
        break;
      case '6':
        str += i === numberStr.length - 1 ? 'six' : 'six ';
        break;
      case '7':
        str += i === numberStr.length - 1 ? 'seven' : 'seven ';
        break;
      case '8':
        str += i === numberStr.length - 1 ? 'eight' : 'eight ';
        break;
      case '9':
        str += i === numberStr.length - 1 ? 'nine' : 'nine ';
        break;
      case '.':
      case ',':
        str += 'point ';
        break;
      default:
        str = '';
    }
  }
  return str;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    result += str[i];
  }
  return str === result;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  const index = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return index;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const str = String(num);
  for (let i = 0; i < str.length; i += 1) {
    if (+str[i] === digit) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let left = 0;
  let rigth = 0;
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      left += arr[j];
    }
    for (let h = 0; h < i; h += 1) {
      rigth += arr[h];
    }
    if (rigth === left) {
      return i;
    }
    rigth = 0;
    left = 0;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = new Array(size);
  let count = 1;
  let sCollumn = 0;
  let eCollumn = size - 1;
  let sRow = 0;
  let eRow = size - 1;

  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
  }
  while (sCollumn <= eCollumn && sRow <= eRow) {
    for (let i = sCollumn; i <= eCollumn; i += 1) {
      matrix[sRow][i] = count;
      count += 1;
    }
    sRow += 1;
    for (let j = sRow; j <= eRow; j += 1) {
      matrix[j][eCollumn] = count;
      count += 1;
    }
    eCollumn -= 1;
    for (let l = eCollumn; l >= sCollumn; l -= 1) {
      matrix[eRow][l] = count;
      count += 1;
    }
    eRow -= 1;
    for (let n = eRow; n >= sRow; n -= 1) {
      matrix[n][sCollumn] = count;
      count += 1;
    }
    sCollumn += 1;
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const mLength = matrix.length;
  const mCopy = matrix;
  for (let i = 0; i < mLength / 2; i += 1) {
    for (let j = i; j < mLength - i - 1; j += 1) {
      const tmp = mCopy[i][j];
      mCopy[i][j] = mCopy[mLength - j - 1][i];
      mCopy[mLength - j - 1][i] = mCopy[mLength - i - 1][mLength - j - 1];
      mCopy[mLength - i - 1][mLength - j - 1] = mCopy[j][mLength - i - 1];
      mCopy[j][mLength - i - 1] = tmp;
    }
  }
  return mCopy;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  function replace(items, firstIndex, secondIndex) {
    const item = items;
    const temp = item[firstIndex];
    item[firstIndex] = item[secondIndex];
    item[secondIndex] = temp;
  }
  function partition(items, left, right) {
    const pivot = items[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;
    while (i <= j) {
      while (items[i] < pivot) {
        i += 1;
      }
      while (items[j] > pivot) {
        j -= 1;
      }
      if (i <= j) {
        replace(items, i, j);
        i += 1;
        j -= 1;
      }
    }
    return i;
  }
  function quickSort(array, left, right) {
    let index;
    if (array.length > 1) {
      index = partition(array, left, right);
      if (left < index - 1) {
        quickSort(array, left, index - 1);
      }
      if (index < right) {
        quickSort(array, index, right);
      }
    }
    return array;
  }
  return quickSort(arr, 0, arr.length - 1);
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let copyStr = str;
  let copyIterations = iterations;
  while (copyIterations > 0) {
    let newStr = '';
    let shiftedChars = '';
    for (let i = 0; i < copyStr.length; i += 1) {
      if (i % 2 !== 0) {
        shiftedChars += copyStr[i];
      } else {
        newStr += copyStr[i];
      }
    }

    copyStr = newStr + shiftedChars;
    copyIterations -= 1;
    if (copyStr === str) {
      copyIterations = iterations % (iterations - copyIterations);
    }
  }

  return copyStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const arrFromNums = Array.from(String(number));
  let index = arrFromNums.length - 1;
  let leftIndex = arrFromNums.length - 1;

  while (index > 0 && arrFromNums[index - 1] >= arrFromNums[index]) {
    index -= 1;
  }

  if (index === 0) return number;

  while (arrFromNums[leftIndex] <= arrFromNums[index - 1]) {
    leftIndex -= 1;
  }

  const temp = arrFromNums[leftIndex];
  arrFromNums[leftIndex] = arrFromNums[index - 1];
  arrFromNums[index - 1] = temp;

  const leftPart = arrFromNums.splice(index).sort();
  const maxNum = arrFromNums.join('') + leftPart.join('');

  return Number(maxNum);
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
