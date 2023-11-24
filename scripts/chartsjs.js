const ctx = document.getElementById("grafico");
const topoMortalidadeInfantilGraphBtn = document.querySelector(
  ".topoMortalidadeInfantilGraphBtn"
);

let valores = [15.1];
let labels = ["Norte"];
let cores = ["rgba(75, 192, 192, 0.6)"];

let j = 0;

const chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        label: "",
        data: valores,
        backgroundColor: cores,
        borderWidth: 1,
        barThickness: 50,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

function addGraph() {
  let labelsItens = ["Nordeste", "Sudeste", "Sul", "Centro-Oeste"];
  let valoresItens = [13.7, 11.5, 10.2, 11.8];
  let coresItens = [
    "rgba(255, 99, 132, 0.6)",
    "rgba(255, 206, 86, 0.6)",
    "rgba(54, 162, 235, 0.6)",
    "rgba(255, 159, 64, 0.6)",
  ];

  if (j < 4) {
    labels.push(labelsItens[j]);
    valores.push(valoresItens[j]);
    cores.push(coresItens[j]);
    j++;
    chart.data.labels = labels;
    chart.data.datasets[0].data = valores;
    chart.data.datasets[0].backgroundColor = cores;
    chart.update();
  } else {
    labels.push("Brasil");
    valores.push(12.4);
    cores.push("rgba(130,255,89, 0.5)");
    chart.data.labels = labels;
    chart.data.datasets[0].data = valores;
    chart.data.datasets[0].backgroundColor = cores;
    chart.update();
    topoMortalidadeInfantilGraphBtn.remove();
  }
}

var chartContainer = document.getElementById("grafico");
var originalContainerWidth = chartContainer.offsetWidth;

function mudaChartWidth() {
  if (window.matchMedia("(max-width: 600px)").matches) {
    chartContainer.style.width = "380px";
  } else {
    chartContainer.style.width = originalContainerWidth + "px";
  }

  chart.resize();
  chart.update();
}

window.addEventListener("resize", mudaChartWidth);

mudaChartWidth();

function mudaChartBarra() {
  if (window.matchMedia("(max-width: 600px)").matches) {
    chart.data.datasets.forEach(function (dataset) {
      dataset.barThickness = 35;
    });
  } else {
    chart.data.datasets.forEach(function (dataset) {
      dataset.barThickness = 90;
    });
  }
  chart.update();
}

window.addEventListener("resize", mudaChartBarra);

topoMortalidadeInfantilGraphBtn.addEventListener("click", addGraph);
