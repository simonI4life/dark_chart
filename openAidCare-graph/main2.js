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
      radius: 3,
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
      pointBackgroundColor: colors[i].borderColor,
      // tension: 0.2,
      label: dataLabel[i], // Add the sensor name as the label
    });
  }
  return salesData;
}

host = "https://openaidcare-api.herokuapp.com";

function randn_bm(mean, stddev) {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  num = num * stddev + mean;
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

  const numberOfPoint1 = 5000;
  for (k = 0; k <= numberOfPoint1; k++) {
    points1.push({ x: randn_bm(0.5, 0.1), y: randn_bm(0.5, 0.05) });
  }

  // Calculate the mean of the x values and y values
  const meanX =
    points1.reduce((sum, point) => sum + point.x, 0) / points1.length;
  const meanY =
    points1.reduce((sum, point) => sum + point.y, 0) / points1.length;

  n = 10;

  // Create an array to store the point arrays
  const pointArrays = [];
  for (let i = 0; i < n; i++) {
    pointArrays.push([]);
  }

  // Sort the points by their distance from the mean
  points1.sort((a, b) => {
    const distanceA = Math.sqrt((a.x - meanX) ** 2 + (a.y - meanY) ** 2);
    const distanceB = Math.sqrt((b.x - meanX) ** 2 + (b.y - meanY) ** 2);
    return distanceA - distanceB;
  });

  // Divide the sorted array into n equal parts
  const chunkSize = Math.floor(points1.length / n);
  for (let i = 0; i < n; i++) {
    pointArrays[i] = points1.slice(i * chunkSize, (i + 1) * chunkSize);
  }

  result.data = pointArrays;
  console.log(result.data);

  console.log(result);

  // Create the chart using the result object and colorArray3
  chart = createChart(
    chartid,
    createData(result, colorArray1Point, ["1", "2", "3"]),
    options
  );
}

createChartFromData("chart");
