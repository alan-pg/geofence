import { booleanPointInPolygon, point, polygon } from '@turf/turf';

/* const pt = point([-23.01631549244363, -43.46813570212515]); */
const pt = point([-23.018487920125875, -43.480237829180204]);

const poly = polygon([[
    [-81, 41],
    [-81, 47],
    [-72, 47],
    [-72, 41],
    [-81, 41]
]]);

const teste = polygon(
    [[
        [-23.0278346, -43.4801755],
        [-23.0214362, -43.4527097],
        [-23.0042142, -43.4592328],
        [-23.0102184, -43.4871278],
        [-23.0278346, -43.4801755]
    ]])

console.log(booleanPointInPolygon(pt, teste));
//= true