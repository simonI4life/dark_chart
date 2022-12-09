// https://dribbble.com/shots/1821178-Sales-Report?list=buckets&offset=0

function createChart(id, data, options) {
  var ctx = document.getElementById(id).getContext("2d");
  return new Chart(ctx, { type: "line", data: data, options: options });
}

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      grid: {
        color: "#e1e1e123",
      },
      suggestedMin: 0,
    },
    x: {
      grid: {
        color: "#e1e1e123",
      },
    },
  },
};

function createData(jsonData, colors) {
  // Create an empty salesData object
  let salesData = {
    labels: jsonData.label,
    datasets: [],
  };

  // Iterate over the array of objects in the "data" property of the object
  for (let i = 0; i < jsonData.data.length; i++) {
    // Add the y value as a data point in the first dataset
    salesData.datasets.push({
      fill: true,
      data: jsonData.data[i],
      backgroundColor: colors[i].backgroundColor,
      borderColor: colors[i].borderColor,
      pointBackgroundColor: colors[i].pointBackgroundColor,
      tension: 0.2,
    });
  }

  return salesData;
}

const sourceData1 = {
  data: [
    [20, 21, 12, 68, 73, 35, 7, 95, 62, 87, 84],
    [22, 18, 23, 58, 71, 15, 27, 62, 87, 84, 23],
  ],
  label: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

const sourceData2 = {
  data: [
    [7, 8, 6, 9, 5, 2, 10, 1, 4, 3],
    [10, 4, 5, 6, 7, 8, 9, 1, 2, 3],
    [8, 1, 3, 5, 7, 9, 2, 4, 6, 10],
  ],
  label: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

const sourceData3 = {
  data: [
    [43, 22, 16, 58, 71, 15, 27, 62, 87, 84, 23],
    [60, 15, 25, 35, 65, 75, 85, 95, 40, 20, 10],
  ],
  label: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
};

const sourceData4 = {
  data: [
    [20, 30, 40, 50, 32, 70, 80, 90, 21, 1],
    [60, 15, 25, 35, 65, 75, 85, 95, 40, 20, 10],
    [7, 81, 62, 93, 35, 22, 10, 1, 4, 3],
    [10, 14, 53, 6, 27, 8, 9, 1, 2, 3],
  ],
  label: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

// Propuesta

var chart0 = createChart(
  "salesData",
  createData(sourceData2, colorArray),
  options
);

var chart1 = createChart(
  "salesData2",
  createData(sourceData3, colorArray),
  options
);

var chart2 = createChart("SD3", createData(sourceData1, colorArray1), options);

var chart3 = createChart(
  "salesData4",
  createData(sourceData4, colorArray2),
  options
);
