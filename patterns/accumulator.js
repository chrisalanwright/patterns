/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  if (typeof n !== "number") return NaN;

  if (n < 0) return undefined;

  if (n === 0) return 1;

  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  // Had some struggles with this one, AI suggested the * operator.
  // Had to look up why this works.
  return product;
}

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  if (typeof n !== "number") return null;

  if (n <= 0) return [];

  let array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
    // Using push to add integers into the array at the end.
    // Is this the most effective method?
  }
  return array;
}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
export function getLongestString(strings) {
  let longestString = "";
  for (let string of strings) {
    if (string.length > longestString.length) {
      longestString = string;
    }
  }

  return longestString;

  // These can get a little confusing for me, espically when using
  // only strings and not numbers.
}

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  let headCount = 0;

  for (let present of attendance) {
    if (present) {
      headCount += 1;
    }
  }

  return headCount;
}

/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  if (typeof dna !== "string") return null;

  let complement = "";
  for (let strand of dna) {
    if (strand === "A") {
      complement += "T";
    } else if (strand === "T") {
      complement += "A";
    } else if (strand === "C") {
      complement += "G";
    } else if (strand === "G") {
      complement += "C";
    }
  }
  return complement;
  // Copilot helped with this one, they were also suggesting a switch statement. but I wasn't sure how that works.
}

// I feel I need to practice this section more, it was definitely harder than the guard.js file. When it comes to strings and not numbers I feel lost.
