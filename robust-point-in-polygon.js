//DOC https://github.com/mikolalysenko/robust-point-in-polygon

import classifyPoint from "robust-point-in-polygon"
const polygon = [
    [-23.0278346, -43.4801755],
    [-23.0214362, -43.4527097],
    [-23.0042142, -43.4592328],
    [-23.0102184, -43.4871278],
    [-23.0278346, -43.4801755]
]

console.log(classifyPoint(polygon, [-23.01643398933279, -43.46950899315279]))
console.log(classifyPoint(polygon, [-23.026316694682677, -43.469048478597145]))
