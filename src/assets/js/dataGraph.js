// <block:setup:1>
let montants = [1200, 750, 775, 760, 2560];
let ajoutMontant = document.getElementById("montant");
let provenance = document.getElementById("titre");
let motif = document.getElementById("desc");
let debitCredit = document.getElementById("operator");
let envoi = document.querySelector(".btSubmit");
let montantsCount = montants.length + 2;
let valeurMontant;


console.log();
let labels = [];
for (let i = 0; i < montantsCount; ++i) {
  labels.push(i.toString());
}
console.log(labels);
const data = {
  labels: labels,
  datasets: [
    {
      // configuration de la courbe
      label: provenance,
      data: montants,
      borderColor: "purple",
      fill: true,
      cubicInterpolationMode: "monotone",
    },
  ],
};
console.log(data);
// </block:setup>

// <block:config:0>
const config = {
  type: "line",
  data: data,
  options: {
    elements: {
      point: {
        radius: 0,
      },
    },
    responsive: true,
    plugins: {
      legend: false,
      title: {
        // display: true,
        // text: "Chart.js Line Chart - Cubic interpolation mode",
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  },
};

/*Le contexte du canevas HTML */
context = document.getElementById("myChart").getContext("2d");
/* Création du graphique */
chart = new Chart(context, config);

/* Générer des données aléatoires */
function generateData() {
  let newtransaction;
  // let newcoming = Math.floor(ajoutMontant).toFixed(2); // Deux chiffres après la virgule
  let event = new Date();
  newtransaction = `${event.getDay()}/${event.getMonth()}/${event.getFullYear()} à ${event.getHours()}h${event.getMinutes()}min${event.getSeconds()}sec ${provenance}`;
  console.log(newtransaction);
}

let testdata =generateData();

function addmoney() {
 
  valeurMontant = ajoutMontant.value;
  /* Ajoute la valeur en X */
  //   augmenter la capaciter max du tableau correspondant
  config.data.labels.push(labels.length+1);
  console.log(config.data.labels)

  /* Ajoute la valeur */
  config.data.datasets[0].data.push(valeurMontant);

  /* Rafraichir le graphique */
  chart.update();
  };



envoi.addEventListener("click",(e) =>{
  e.preventDefault() 
 valeurMontant = ajoutMontant.value;
//   augmenter la capaciter max du tableau correspondant
  montantsCount ++;

  console.log(valeurMontant);
  addmoney();
 
  console.log(config.data.labels);
  console.log (config.data.datasets[0].data);


});
