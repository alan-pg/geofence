polygone = [
    [-73.89632720118, 40.8515320489962],
    [-73.8964878416508, 40.8512476593594],
    [-73.8968799791431, 40.851375925454],
    [-73.8967188588015, 40.851660158514],
    [-73.89632720118, 40.8515320489962]
]

function isPointInPoly(poly, pt) {
    for (var c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i)
        ((poly[i][1] <= pt[1] && pt[1] < poly[j][1]) || (poly[j][1] <= pt[1] && pt[1] < poly[i].y))
            && (pt[0] < (poly[j][0] - poly[i][0]) * (pt[1] - poly[i][1]) / (poly[j][1] - poly[i][1]) + poly[i][0])
            && (c = !c);
    return c;
}

console.log(isPointInPoly(polygone, [-73.89632720118, 40.8515320489962]))

