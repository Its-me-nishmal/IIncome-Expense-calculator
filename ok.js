const categoryin = document.getElementById('categories');
const valuein = document.getElementById('val');
const addbt = document.getElementById('add');
const cnlbt = document.getElementById('cnl');
const tbody = document.querySelector(".scrollable-tbody");
let sum1 = 0;
let sum2 = 0;

const change = document.getElementById('pl');
let one = 0;

let intervalId = null;
let hasIntervalStarted = false;

function cn(sum1, sum2) {
  const txt = [
    'Your Total Income Is ' + sum1,
    'Your Total Expense Is ' + sum2,
    'Your Balance Is ' + (sum1 - sum2),
  ];

  let nn = 0;

  if (hasIntervalStarted) {
    
    clearInterval(intervalId);
  } else {
    
    hasIntervalStarted = true;
  }

  intervalId = setInterval(function () {
    change.textContent = txt[nn];
    nn = (nn + 1) % txt.length;
  }, 3000);
}


function handleYes() {
  const value = valuein.value;

  const expenseValue = parseInt(value);
  sum2 += expenseValue;
  expence(categoryin, valuein, tbody, sum1, sum2);
  valuein.value = "";
  categoryin.value = "";
  document.getElementById("myDialog").style.display = "none";
}

function handleNo() {
  const value = valuein.value;

  const incomeValue = parseInt(value);
  sum1 += incomeValue;
  income(categoryin, valuein, tbody, sum1, sum2);
  valuein.value = "";
  categoryin.value = "";
  document.getElementById("myDialog").style.display = "none";
}



addbt.addEventListener('click', function () {
  const category = categoryin.value;
  const value = valuein.value;

  if (category.trim() === "" || value.trim() === "") {
    alert("Please enter a valid category and value.");
  }
  else if (
    category === "Salary" ||
    category === "Business" ||
    category === "Rental" ||
    category === "Investment" ||
    category === "Freelance" ||
    category === "Commission" ||
    category === "Pension" ||
    category === "Social Security" ||
    category === "Alimony" ||
    category === "Gifts" ||
    category === "Other"
  ) {
    const incomeValue = parseInt(value);
    sum1 += incomeValue;
    income(categoryin, valuein, tbody, sum1, sum2);
    valuein.value = "";
    categoryin.value = "";
  }
  else if (
    category === "Housing" ||
    category === "Transportation" ||
    category === "Food" ||
    category === "Health" ||
    category === "Insurance" ||
    category === "Debt Payments" ||
    category === "Entertainment" ||
    category === "Education" ||
    category === "Savings" ||
    category === "Charitable" ||
    category === "Childcare" ||
    category === "Personal Care" ||
    category === "Taxes" ||
    category === "Miscellaneous"
  ) {
    const expenseValue = parseInt(value);
    sum2 += expenseValue;
    expence(categoryin, valuein, tbody, sum1, sum2);
    valuein.value = "";
    categoryin.value = "";
  }
  else {
    openDialog()
  }

})

cnlbt.addEventListener('click', function () {
  valuein.value = "";
  categoryin.value = "";
})


function income(categoryin, valuein, tbody, sum1, sum2) {
  const nr = document.createElement("tr");

  nr.innerHTML = `<td id="tdg1">${categoryin.value}</td><td id="tdg2">${valuein.value}</td>`;
  tbody.appendChild(nr);

  let now = parseInt(document.getElementById("total").textContent);
  let nev = parseInt(valuein.value);
  let mix = parseInt(now + nev);
  document.getElementById("total").textContent = `${mix} ₹`;

  pie(sum1, sum2);
  cn(sum1, sum2);
}


function expence() {
  const nr = document.createElement("tr");
  nr.innerHTML = `<td id="tdr1">${categoryin.value}</td><td id="tdr2">${valuein.value}</td>`;
  tbody.appendChild(nr);

  let now = parseInt(document.getElementById("total").textContent);
  let nev = parseInt(valuein.value);
  let mix = parseInt(now - nev);
  document.getElementById("total").textContent = `${mix} ₹`;

  pie(sum1, sum2);
  cn(sum1, sum2);
}

function pie(sum1, sum2) {
  const xValues = ["income", "expense"];
  const yValues = [sum1, sum2];
  const barColors = [
    "#00aba9",
    "#b91d47"
  ];

  new Chart("myChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "Total Income And Expense",
        fontColor: "white"
      },
      legend: {
        labels: {
          fontColor: "white" // Set the legend text color to white
        }
      }
    }
  });
}

function openDialog() {
  document.getElementById("myDialog").style.display = "block";
}



