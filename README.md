# Unexpected NaN Comparison in JavaScript

This repository demonstrates a common, yet often overlooked, quirk in JavaScript's handling of NaN (Not a Number) values during comparisons.

## The Problem

JavaScript's loose comparison (==) and strict comparison (===) operators behave unexpectedly when dealing with NaN.  The strict equality operator (===) always returns `false` when comparing NaN to itself or any other value, even NaN.  The loose equality operator (==) also returns `false` when comparing NaN to anything, including NaN.

This can lead to unexpected results in your code, especially when dealing with calculations or data that might produce NaN values.

## The Solution

The best way to check for NaN is using the `isNaN()` global function. This function returns `true` if the argument is NaN, and `false` otherwise.   This provides a reliable and explicit way to handle NaN comparisons.

## How to Reproduce the Bug

1. Clone this repository.
2. Open `bug.js`.
3. Run the code using Node.js (or any JavaScript runtime). You'll see that the comparisons return `false` even though you might expect them to return `true` in the first case, and `true` in the second. 
4. Compare this with the solution provided in `bugSolution.js`