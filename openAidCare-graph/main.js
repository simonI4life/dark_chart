// https://dribbble.com/shots/1821178-Sales-Report?list=buckets&offset=0

function createChart(id, data, options) {
  var ctx = document.getElementById(id).getContext("2d");
  return new Chart(ctx, { type: "line", data: data, options: options });
}

var chart;

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

      scaleLabel: { labelString: "Time", display: true },
      display: true,
      distribution: "series",

      min: "2022-12-12",

      time: {
        unit: "year",
        displayFormats: { year: "yyyy-mm-dd hh:mm:ss" },
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
    labels: "Demo",
    datasets: [],
  };

  console.log(jsonData.data[0]);

  for (let i = 0; i < jsonData.data.length; i++) {
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

proc = async (msg) => {
  data = JSON.parse(msg);
  const measures = data.measures;

  // measures.sort((a, b) => a.date - b.date);

  const result = {
    data: [[]],
  };

  measures.forEach((item) => {
    result.data[0].push({
      x: item.date,
      y: item.data[1],
    });
  });

  chart = createChart("chart", createData(result, colorArray3), options);
};

host = "http://localhost:8087";
httpGetAsync(`${host}/api/measures/friendlyname/T0A`, proc);
