// https://dribbble.com/shots/1821178-Sales-Report?list=buckets&offset=0

function createChart(id, data, options) {
  var ctx = document.getElementById(id).getContext("2d");
  return new Chart(ctx, { type: "scatter", data: data, options: options });
}

var chart;

const options = {
  responsive: true,
  maintainAspectRatio: false,

  animation: {
    duration: 0,
  },

  plugins: {
    legend: {
      display: true,
    },
  },

  elements: {
    point: {
      radius: 1,
    },
  },

  scales: {
    y: {
      grid: {
        color: "#e1e1e123",
      },
      suggestedMin: 0,
      suggestedMax: 1,
    },
    x: {
      type: "linear",
      grid: {
        color: "#e1e1e123",
      },
      suggestedMin: 0,
      suggestedMax: 1,
    },
  },
};

function createData(jsonData, colors, dataLabel) {
  // Create an empty salesData object
  let salesData = {
    labels: "1123",
    datasets: [],
  };

  for (let i = 0; i < jsonData.data.length; i++) {
    salesData.datasets.push({
      data: jsonData.data[i],
      // backgroundColor: colors[i].backgroundColor,
      borderColor: colors[i].borderColor,
      pointBackgroundColor: colors[i].pointBackgroundColor,
      // tension: 0.2,
      label: dataLabel[i], // Add the sensor name as the label
    });
  }
  return salesData;
}

host = "https://openaidcare-api.herokuapp.com";

function randn_bm() {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  num = num / 10.0 + 0.5; // Translate to 0 -> 1
  if (num > 1 || num < 0) return randn_bm(); // resample between 0 and 1
  return num;
}

async function createChartFromData(chartid) {
  // Create an empty result object
  const result = {
    data: [],
  };

  // Create an empty array for the current sensor
  result.data.push();

  points = [];
  points1 = [];

  const numberOfPoint = 100;

  for (i = 0; i <= numberOfPoint; i++) {
    for (j = 0; j <= numberOfPoint; j++) {
      points.push({ x: i / numberOfPoint, y: j / numberOfPoint });
    }
  }

  const numberOfPoint1 = 1000;

  for (k = 0; k <= numberOfPoint1; k++) {
    points1.push({ x: randn_bm(), y: randn_bm() });
  }

  // Loop through data.measures and add the data to result.data[i]
  // result.data.push(points);
  result.data.push(points1);

  console.log(result);

  // Create the chart using the result object and colorArray3
  chart = createChart(
    chartid,
    createData(result, colorArray1Point, ["1", "2"]),
    options
  );
}

createChartFromData("chart");
