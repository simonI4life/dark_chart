// https://dribbble.com/shots/1821178-Sales-Report?list=buckets&offset=0

function createChart(id, data, options) {
  var ctx = document.getElementById(id).getContext("2d");
  return new Chart(ctx, { type: "line", data: data, options: options });
}

var chart;

const options = {
  plugins: {
    legend: {
      display: true,
    },
  },
  scales: {
    y: {
      grid: {
        color: "#e1e1e123",
      },
      suggestedMin: 12,
      suggestedMax: 25,
    },
    x: {
      type: "time",

      scaleLabel: { labelString: "Time", display: true },
      display: true,
      distribution: "series",

      min: "2022-12-14",

      time: {
        unit: "hour",
        displayFormats: { year: "yyyy-mm-dd hh:mm:ss" },
      },

      grid: {
        color: "#e1e1e123",
      },
    },
  },
};

function createData(jsonData, colors, sensors) {
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
      label: sensors[i], // Add the sensor name as the label
    });
  }
  return salesData;
}

host = "https://openaidcare-api.herokuapp.com";

// host = "http://localhost:8087";

createChartFromData(["T2A", "T1B", "T0A"], "chart");
createChartFromData(["T2A"], "chart1");

async function createChartFromData(sensors, chartid) {
  // Create an empty result object
  const result = {
    data: [],
  };

  // Loop through the sensors array
  for (const sensor of sensors) {
    // Make an HTTP GET request to retrieve data for the current sensor
    const response = await fetch(`${host}/api/measures/friendlyname/${sensor}`);
    const data = await response.json();

    // Create an empty array for the current sensor
    result.data.push([]);

    // Loop through data.measures and add the data to result.data[i]
    data.measures.forEach((item) => {
      result.data[result.data.length - 1].push({
        x: item.date,
        y: item.data[1],
      });
    });
  }

  // Create the chart using the result object and colorArray3
  chart = createChart(
    chartid,
    createData(result, colorArray3, sensors),
    options
  );
}
