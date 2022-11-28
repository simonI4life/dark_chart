// https://dribbble.com/shots/1821178-Sales-Report?list=buckets&offset=0

// Line Chart
var salesData = {
  labels: ["0", "1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "Front",
      fillColor: "rgba(195, 40, 96, 0.1)",
      strokeColor: "rgba(195, 40, 96, 1)",
      pointColor: "rgba(195, 40, 96, 1)",
      pointStrokeColor: "#202b33",
      pointHighlightStroke: "rgba(225,225,225,0.9)",
      data: [5000, 3000, 2500, 4500, 2500, 3400, 3000],
    },
    {
      label: "Middle",
      fillColor: "rgba(255, 172, 100, 0.1)",
      strokeColor: "rgba(255, 172, 100, 1)",
      pointColor: "rgba(255, 172, 100, 1)",
      pointStrokeColor: "#202b33",
      pointHighlightStroke: "rgba(225,225,225,0.9)",
      data: [1900, 1700, 2100, 3600, 2200, 2500, 2000],
    },
    {
      label: "Back",
      fillColor: "rgba(19, 71, 34, 0.2)",
      strokeColor: "rgba(88, 188, 116, 1)",
      pointColor: "rgba(88, 188, 116, 1)",
      pointStrokeColor: "#202b33",
      pointHighlightStroke: "rgba(225,225,225,0.9)",
      data: [1000, 1400, 1100, 2600, 2000, 900, 1400],
    },
  ],
};

var salesData2 = {
  labels: ["0", "1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "Back",
      fillColor: "rgba(93, 61, 119, 0.2)",
      strokeColor: "rgba(151, 88, 188, 1)",
      pointColor: "rgba(151, 88, 188, 1)",
      pointStrokeColor: "#202b33",
      pointHighlightStroke: "rgba(225,225,225,0.9)",
      data: [1400, 2100, 1241, 5000, 3000, 1200, 0],
    },
    {
      label: "Back",
      fillColor: "rgba(61, 91, 119, 0.2)",
      strokeColor: "rgba(88, 140, 188, 1)",
      pointColor: "rgba(88, 140, 188, 1)",
      pointStrokeColor: "#202b33",
      pointHighlightStroke: "rgba(225,225,225,0.9)",
      data: [1200, 1100, 2150, 2600, 5400, 1900, 5400],
    },
  ],
};

var ctx = document.getElementById("salesData").getContext("2d");
window.myLineChart = new Chart(ctx).Line(salesData, {
  pointDotRadius: 6,
  pointDotStrokeWidth: 2,
  datasetStrokeWidth: 3,
  scaleShowVerticalLines: false,
  scaleGridLineWidth: 2,
  scaleShowGridLines: true,
  scaleGridLineColor: "rgba(225, 255, 255, 0.02)",
  scaleOverride: true,
  scaleSteps: 11,
  scaleStepWidth: 500,
  scaleStartValue: 0,
  responsive: true,
});

var ctx = document.getElementById("salesData2").getContext("2d");
window.myLineChart = new Chart(ctx).Line(salesData2, {
  pointDotRadius: 6,
  pointDotStrokeWidth: 2,
  datasetStrokeWidth: 3,
  scaleShowVerticalLines: false,
  scaleGridLineWidth: 2,
  scaleShowGridLines: true,
  scaleGridLineColor: "rgba(225, 255, 255, 0.02)",
  scaleOverride: true,
  scaleSteps: 11,
  scaleStepWidth: 500,
  scaleStartValue: 0,
  responsive: true,
});

var ctx = document.getElementById("salesData3").getContext("2d");
window.myLineChart = new Chart(ctx).Line(salesData, {
  pointDotRadius: 6,
  pointDotStrokeWidth: 2,
  datasetStrokeWidth: 3,
  scaleShowVerticalLines: false,
  scaleGridLineWidth: 2,
  scaleShowGridLines: true,
  scaleGridLineColor: "rgba(225, 255, 255, 0.02)",
  scaleOverride: true,
  scaleSteps: 11,
  scaleStepWidth: 500,
  scaleStartValue: 0,
  responsive: true,
});

var ctx = document.getElementById("salesData4").getContext("2d");
window.myLineChart = new Chart(ctx).Line(salesData2, {
  pointDotRadius: 6,
  pointDotStrokeWidth: 2,
  datasetStrokeWidth: 3,
  scaleShowVerticalLines: false,
  scaleGridLineWidth: 2,
  scaleShowGridLines: true,
  scaleGridLineColor: "rgba(225, 255, 255, 0.02)",
  scaleOverride: true,
  scaleSteps: 11,
  scaleStepWidth: 500,
  scaleStartValue: 0,
  responsive: true,
});
