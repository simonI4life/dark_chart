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
      type: "time",
      time: {
        unit: "month",
      },
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

const generateDateArray = (number) => {
  date = [];
  for (i = 0; i <= number; i++) {
    date.push(new Date(`2022-${i + 1}-01 00:00:00`));
  }

  return date;
};

const sourceData = {
  data: [
    [2048, 2049, 2072, 2087, 2069, 2217],
    [2086, 2185, 2267, 2267, 2364, 2437],
  ],
  label: [
    new Date("04-07-2022"),
    new Date("05-06-2022"),
    new Date("05-22-2022"),
    new Date("06-04-2022"),
    new Date("06-25-2022"),
    new Date("07-14-2022"),
  ],
};

var chart = createChart("chart", createData(sourceData, colorArray1), options);

let a = 0;

const action = (number) => {
  if (number === 1) {
    chart.options.scales.x.min = "2022-01-01 00:00:00";
    chart.options.scales.x.max = "2022-12-31 00:00:00";
    chart.options.scales.x.time.unit = "month";

    // chart.update();
    chart.update("none");
  }

  if (number === 2) {
    chart.options.scales.x.min = "2022-11-01 00:00:00";
    chart.options.scales.x.max = "2022-12-31 00:00:00";

    chart.options.scales.x.time.unit = "day";

    // chart.update();
    chart.update("none");
  }
};
