datos = {};

resultado = {
  Nuevos_usuarios_por_ano: 700,
  N_anual_ideas_nuevas: 500,
  Registros_consultas_vida: 3500,
  Consultas_anuales_usuario: 730,
  Coste_registrar_consultas_idea: 1400,
  Consultas_recibidas_ano_idea: 700,
  Ingresos_idea_derivado_consultas: 350,
  Cuota_minima_seeder: 235,
};

const $ = (id) => {
  return document.getElementById(id).value;
};

const $2 = (id) => {
  return document.getElementById(id);
};

const refreshValues = () => {
  datos.anos_vida = $("anos_vida");
  datos.Consultas_diarias_por_usuario = $("Consultas_diarias_por_usuario");
  datos.N_seeders_anuales = $("N_seeders_anuales");
  datos.N_developers_anuales = $("N_developers_anuales");
  datos.N_buyers_anuales = $("N_buyers_anuales");
  datos.Coste_Seeder = $("Coste_Seeder");
  datosCuota_Seeder = $("Cuota_Seeder");
  datos.N_ideas_anuales_Seeder = $("N_ideas_anuales_Seeder");
  datos.P_Cuotas_anuales_Seeder = $("P_Cuotas_anuales_Seeder");
  datos.Coste_Watcher = $("Coste_Watcher");
  datos.Cuota_Buyer = $("Cuota_Buyer");
  datos.Coste_registro_BC = $("Coste_registro_BC");
  datos.Coste_registro_BC_Watcher = $("Coste_registro_BC_Watcher");
  datos.Cuota_Developer = $("Cuota_Developer");
};

const setValues = () => {
  $2("Nuevos_usuarios_por_ano").innerText =
    resultado.Nuevos_usuarios_por_ano + "€";

  $2("N_anual_ideas_nuevas").innerText = resultado.N_anual_ideas_nuevas + "€";
  $2("Registros_consultas_vida").innerText =
    resultado.Registros_consultas_vida + "€";
  $2("Consultas_anuales_usuario").innerText =
    resultado.Consultas_anuales_usuario + "€";
  $2("Coste_registrar_consultas_idea").innerText =
    resultado.Coste_registrar_consultas_idea + "€";

  // -----

  $2("N_anual_ideas_nuevas").innerText = resultado.N_anual_ideas_nuevas + "€";
  $2("Registros_consultas_vida").innerText =
    resultado.Registros_consultas_vida + "€";
  $2("Consultas_anuales_usuario").innerText =
    resultado.Consultas_anuales_usuario + "€";
  $2("Consultas_recibidas_ano_idea").innerText =
    resultado.Consultas_recibidas_ano_idea + "€";
  $2("Cuota_minima_seeder").innerText = resultado.Cuota_minima_seeder + "€";
  $2("Ingresos_idea_derivado_consultas").innerText =
    resultado.Ingresos_idea_derivado_consultas + "€";
};

setValues();

document.getElementById("go").addEventListener("click", () => {
  console.log("update");
  refreshValues();
  console.log(datos);
  processChart();

  resultado.Consultas_anuales_usuario = datos.Cuota_Buyer * 2;

  setValues();
});

// const datatest = {
//   labels: labels,
//   datasets: [
//     {
//       label: "My First Dataset",
//       data: [65, 59, 80, 81, 56, 55, 40],
//       fill: false,
//       borderColor: "rgb(75, 192, 192)",
//       tension: 0.1,
//     },
//   ],
// };

chart = new Chart("myChart", {
  type: "line",
  data: {
    labels: ["año 0", "año 1", "año 2", "año 3", "año 4", "año 5"],
    datasets: [0, 1, 2, 3],
  },
});

function generateChart(dataset) {
  char.options = {
    type: "line",
    data: {
      labels: ["año 0", "año 1", "año 2", "año 3", "año 4", "año 5"],
      datasets: dataset,
    },
  };
  char.update();
}

colores = [
  "rgb(79, 192, 75)",
  "rgb(75, 169, 192)",
  "rgb(77, 75, 192)",
  "rgb(156, 82, 206)",
  "rgb(206, 82, 140)",
  "rgb(206, 121, 82)",
  "rgb(206, 173, 82)",
  "rgb(79, 192, 75)",
  "rgb(75, 169, 192)",
  "rgb(77, 75, 192)",
  "rgb(156, 82, 206)",
  "rgb(206, 82, 140)",
  "rgb(206, 121, 82)",
  "rgb(206, 173, 82)",
];

options = [10, 50, 100, 500, 1000, 5000, 10000];

const updateChartOptions = () => {
  N_Seeders = [];
  N_Developes = [];
  N_Buyers = [];

  N_options = [N_Seeders, N_Developes, N_Buyers];

  document.querySelectorAll(".active").forEach((el) => {
    N_options[el.id[0]].push(options[el.id[1]]);
  });
  console.log(N_Seeders);
  console.log(N_Developes);
  console.log(N_Buyers);

  years = [0, 1, 2, 3, 4, 5];
  index = -1;
  dataset = [];

  N_Seeders.forEach((Seeders) => {
    N_Developes.forEach((Developes) => {
      N_Buyers.forEach((Buyer) => {
        yx = [];
        years.forEach((year) => {
          const value = Seeders * year * year + Developes + Buyer * year;
          yx.push(value);
        });

        console.log(yx);
        index++;

        dataset.push({
          label: `S${Seeders} D${Developes} B${Buyer}`,
          data: [...yx],
          fill: false,
          borderColor: colores[index],
          tension: 0.2,
        });
      });
    });
  });

  generateChart(dataset);
};

updateChartOptions();

const processChart = () => {
  updateChartOptions();
};
