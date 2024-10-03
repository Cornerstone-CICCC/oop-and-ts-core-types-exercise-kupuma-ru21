"use strict";
// Exercise: Define a type alias `Rectangle` with two properties `width` and `height` (both numbers).
// Then, create a function `calculateArea` that takes a `Rectangle` and returns its area.
function calculateArea({ width, height }) {
    return width * height;
}
console.log(calculateArea({ width: 10, height: 5 }));
// Expected output: 50
