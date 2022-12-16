// https://dribbble.com/shots/1821178-Sales-Report?list=buckets&offset=0

function createChart(id, data, options) {
  var ctx = document.getElementById(id).getContext("2d");
  return new Chart(ctx, { type: "line", data: data, options: options });
}

function createChart2(id, data, options) {
  var ctx = document.getElementById(id).getContext("2d");
  return new Chart(ctx, { type: "line", data: data, options: options });
}

let currentDate = new Date();
let previousMonth = new Date();

let mode = 0;

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

const sourceData1 = [
  {
    date: new Date("9-1-2021"),
    d: [0, 0],
  },
  {
    date: new Date("9-15-2021"),
    d: [885, 892],
  },
  {
    date: new Date("10-20-2021"),
    d: [991, 989],
  },
  {
    date: new Date("12-01-2021"),
    d: [1113, 1086],
  },
  {
    date: new Date("01-02-2022"),
    d: [1221, 1184],
  },
  {
    date: new Date("02-12-2022"),
    d: [1321, 1352],
  },
  {
    date: new Date("03-13-2022"),
    d: [1359, 1425],
  },
  {
    date: new Date("03-19-2022"),
    d: [2020, 2071],
  },
  {
    date: new Date("04-04-2022"),
    d: [2052, 2071],
  },
  {
    date: new Date("04-16-2022"),
    d: [2104, 2170],
  },
  {
    date: new Date("05-13-2022"),
    d: [2086, 2267],
  },
  {
    date: new Date("06-06-2022"),
    d: [2070, 2267],
  },
  {
    date: new Date("06-18-2022"),
    d: [2030, 2364],
  },
  {
    date: new Date("07-17-2022"),
    d: [2220, 2437],
  },
  {
    date: new Date("08-15-2022"),
    d: [2482, 2558],
  },
  {
    date: new Date("09-13-2022"),
    d: [2441, 2632],
  },
  {
    date: new Date("10-10-2022"),
    d: [2371, 2736],
  },
  {
    date: new Date("11-12-2022"),
    d: [2741, 3033],
  },
  {
    date: new Date("12-13-2022"),
    d: [2982, 3230],
  },
];

proc = (data) => {
  data.sort((a, b) => a.date - b.date);

  const result = {
    data: [],
    label: [],
  };

  data.forEach((item) => {
    result.label.push(item.date);
    item.d.forEach((value, index) => {
      if (!result.data[index]) {
        result.data[index] = [];
      }
      result.data[index].push(value);
    });
  });

  return result;
};

const getGrowth = (data) => {
  data.sort((a, b) => a.date - b.date);

  const growth = [];
  for (let i = 1; i < data.length; i++) {
    const period =
      (data[i].date - data[i - 1].date) / (31 * 1000 * 60 * 60 * 24);
    growth.push(
      data[i].d.map((value, index) => (value - data[i - 1].d[index]) / period)
    );
  }

  const result = {
    data: [],
    label: [],
    grown: [],
    avg: [],
  };

  data.forEach((item) => {
    result.label.push(item.date);
    item.d.forEach((value, index) => {
      if (!result.data[index]) {
        result.data[index] = [];
      }
      result.data[index].push(value);
    });
  });

  growth.forEach((item) => {
    item.forEach((value, index) => {
      if (!result.grown[index]) {
        result.grown[index] = [];
      }
      if (value < 1000) result.grown[index].push(value);
      else result.grown[index].push(0);
    });
  });
  // cambiar esto para que calcule la media de los incrementos
  result.grown.forEach((values) => {
    result.avg.push(values.reduce((a, b) => a + b) / values.length);
  });

  const response = {
    data: result.grown,
    label: result.label,
  };

  return response;
};

var chart = createChart(
  "chart",
  createData(proc(sourceData1), colorArray1),
  options
);

var chart1 = createChart2(
  "chart1",
  createData(getGrowth(sourceData1), colorArray1),
  options
);

console.log(getGrowth(sourceData1));

let a = 0;

const action = (number) => {
  console.log({ number }, { mode });
  if (number === 3) {
    if (mode === 2) {
      currentDate.setMonth(currentDate.getMonth() - 6);
      previousMonth.setMonth(previousMonth.getMonth() - 6);
    }

    if (mode === 1) {
      currentDate.setMonth(currentDate.getMonth() - 12);
      previousMonth.setMonth(previousMonth.getMonth() - 12);
    }

    chart.options.scales.x.max = currentDate.toISOString();
    chart.options.scales.x.min = previousMonth.toISOString();

    chart.update("none");
  }
  if (number === 4) {
    if (mode === 2) {
      currentDate.setMonth(currentDate.getMonth() + 6);
      previousMonth.setMonth(previousMonth.getMonth() + 6);
    }

    if (mode === 1) {
      currentDate.setMonth(currentDate.getMonth() + 12);
      previousMonth.setMonth(previousMonth.getMonth() + 12);
    }

    chart.options.scales.x.max = currentDate.toISOString();
    chart.options.scales.x.min = previousMonth.toISOString();

    chart.update("none");
  }
};

const setMode = (m) => {
  mode = m;
  if (m === 2) {
    currentDate = new Date();
    previousMonth = new Date();

    previousMonth.setMonth(previousMonth.getMonth() - 6);

    chart.options.scales.x.max = currentDate.toISOString();
    chart.options.scales.x.min = previousMonth.toISOString();

    chart.options.scales.x.time.unit = "month";

    chart.update("none");
  }

  if (m === 1) {
    currentDate = new Date();
    previousMonth = new Date();

    previousMonth.setMonth(previousMonth.getMonth() - 12);

    chart.options.scales.x.max = currentDate.toISOString();
    chart.options.scales.x.min = previousMonth.toISOString();

    chart.options.scales.x.time.unit = "month";

    chart.update("none");
  }

  if (m === 0) {
    previousMonth.setMonth(previousMonth.getMonth() - 12);

    chart.options.scales.x.max = "auto";
    chart.options.scales.x.min = "auto";

    chart.options.scales.x.time.unit = "month";

    chart.update("none");
  }
};
