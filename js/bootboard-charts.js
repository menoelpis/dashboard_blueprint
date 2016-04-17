// first pie chart
var data = {
    series: [5, 3, 4]
};

var sum = function(a, b) {
    return a + b
};

new Chartist.Pie('.ct-chart-one', data, {
    labelInterpolationFnc: function(value) {
        return Math.round(value / data.series.reduce(sum) * 100) + '%';
    }
});

// second pie chart
var data = {
    series: [8, 1, 7]
};

var sum = function(a, b) {
    return a + b
};

new Chartist.Pie('.ct-chart-two', data, {
    labelInterpolationFnc: function(value) {
        return Math.round(value / data.series.reduce(sum) * 100) + '%';
    }
});

// third pie chart
var data = {
    series: [7, 3, 9]
};

var sum = function(a, b) {
    return a + b
};

new Chartist.Pie('.ct-chart-three', data, {
    labelInterpolationFnc: function(value) {
        return Math.round(value / data.series.reduce(sum) * 100) + '%';
    }
});