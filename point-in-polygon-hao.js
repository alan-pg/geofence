import inside from 'point-in-polygon-hao'
//DOC https://turfjs.org/docs/#booleanPointInPolygon
const polygon = [
    [
        [1, 1],
        [1, 2],
        [2, 2],
        [2, 1],
        [1, 1]
    ]
];

console.log(inside([1.5, 1.5], polygon))
// => true

console.log(inside([4.9, 1.2], polygon))
// => false

console.log(inside([1, 2], polygon))
// => 0 to indicate on edge