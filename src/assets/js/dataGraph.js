// initialisation de ma courbe
let montants = [1200, 750, 775, 760, 2560];
let ajoutMontant = document.getElementById("montant");
let provenance = document.getElementById("titre");
let motif = document.getElementById("desc");
let debitCredit = document.getElementById("operator");
let envoi = document.querySelector(".btSubmit");
let grid = document.getElementById("true-container");
let montantsCount = montants.length ;
let btnallOpe = document.getElementById("allOperation");
let btncreditOpe = document.getElementById("creditOpe");
let btndebitOpe = document.getElementById("debitOpe");
let opevalue = document.querySelectorAll(`.operation`);
let debitOpeValue = document.querySelectorAll(".debit");
console.log(debitOpeValue);
let creditOpeValue = document.querySelectorAll(".credit");
console.log(creditOpeValue);
let avoir= document.getElementById("solde");
let valeurMontant;
let valeurProvenance;
let valeurMotif;
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
      label: "Compte",
      // nom de chaque point
      data: montants,
      // tableau des montants
      borderColor: "purple",
      // couleur de la courbe
      fill: true,
      // couleur dessous de la courbe
      cubicInterpolationMode: "monotone",
      // gere la forme de la courbe
    },
  ],
};
console.log(data);
// fin de l'initialisation

// <block:config:0>
const config = {
  type: "line",
  // type de la courbe
  data: data,
  options: {
    elements: {
      point: {
        radius: 0,
        // gere les cercle des points
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
let context = document.getElementById("myChart").getContext("2d");
/* Création du graphique */
let chart = new Chart(context, config);

/* Générer des données aléatoires */
function generateData() {
  let newtransaction;
  // let newcoming = Math.floor(ajoutMontant).toFixed(2); // Deux chiffres après la virgule
  let event = new Date();
  newtransaction = `${event.getDay()}/${event.getMonth()}/${event.getFullYear()} à ${event.getHours()}h${event.getMinutes()}min${event.getSeconds()}sec ${provenance}`;
  console.log(newtransaction);
}

let testdata = generateData();

function addmoney() {
  valeurMontant = ajoutMontant.value;
  /* Ajoute la valeur en X */
  //   augmenter la capaciter max du tableau correspondant
  config.data.labels.push(labels.length + 1);
  console.log(config.data.labels);

  /* Ajoute la valeur de l'operation */
  config.data.datasets[0].data.push(valeurMontant);

  /* Rafraichir le graphique */
  chart.update();
}

envoi.addEventListener("click", (e) => {
  e.preventDefault();
  valeurMontant = ajoutMontant.value;
  valeurProvenance= provenance.value;
  valeurMotif = motif.value;
  //   augmenter la capaciter max du tableau correspondant
  montantsCount++;

  console.log(valeurMontant);

  // let operator = document.getElementById("operator").value;
  console.log(valeurProvenance);
  console.log(valeurMotif);

  grid.innerHTML += `<div class="operation credit">
       <div class="grid-x grid-padding-x align-middle">
         <div class="cell shrink">
           <div class="picto">
             <img src="./assets/images/sac-dargent.png" alt="credit" />
           </div>
         </div>
         <div class="cell auto">
           <div>
           <h2>${valeurProvenance}</h2>
           <small>${valeurMotif}</small>
           </div>
         </div>
         <div class="cell small-3 text-right">
           <div>
           <p class="count">${valeurMontant}€</p>
             <small>100%</small>
           </div>
         </div>
       </div>
     `;
  
  addmoney();
  console.log(config.data.labels);
  console.log(config.data.datasets[0].data);
});
//  test  ajout historique
function removeClasslist() {
  btnallOpe.classList.remove("active");
  btncreditOpe.classList.remove("active");
  btndebitOpe.classList.remove("active");
}

btncreditOpe.addEventListener("click", () => {
  removeClasslist();
  btncreditOpe.classList.add("active");
  creditOpeValue.forEach(element => element.style.display="block"); 
  debitOpeValue.forEach(element => element.style.display="none");
  
});

btndebitOpe.addEventListener("click", () => {
  removeClasslist();
  btndebitOpe.classList.add("active"); 
  debitOpeValue.forEach(element => element.style.display="block");
  creditOpeValue.forEach(element => element.style.display="none");
});

btnallOpe.addEventListener("click", () => {
  removeClasslist();
  btnallOpe.classList.add("active");
  creditOpeValue.forEach(element => element.style.display="block");
  debitOpeValue.forEach(element => element.style.display="block");
});

let countDebit = document.querySelectorAll(".debit .count");
let countCredit = document.querySelectorAll(".credit .count");
console.log(countDebit);
console.log(countCredit);


console.log(countDebit);

