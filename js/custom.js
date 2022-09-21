// find total income
const income = document.querySelectorAll(".income");
const incomeSubTotal = document.querySelectorAll(".incomeSubTotal");
var incomeArray = [];

income.forEach(function (income) {
  incomeArray.push(
    parseInt(income.textContent.replace("$", "").replace(",", ""))
  );
});

function incomeCalc() {
  let sum = 0;
  for (i = 0; i < incomeArray.length; i++) {
    sum += incomeArray[i];
  }
  return sum;
}

var incomeTotal = incomeCalc().toString();

if (incomeTotal.length == 4) {
  const a = incomeTotal.substring(0, 1);
  const b = incomeTotal.substring(1);
  incomeTotal = `$${a},${b}`;
  incomeSubTotal.forEach(function (income) {
    income.textContent = incomeTotal;
  });
} else if (incomeTotal.length == 5) {
  const a = incomeTotal.substring(0, 2);
  const b = incomeTotal.substring(2);
  incomeTotal = `$${a},${b}`;
  incomeSubTotal.forEach(function (income) {
    income.textContent = incomeTotal;
  });
} else {
  incomeSubTotal.forEach(function (income) {
    income.textContent = `$${incomeTotal}`;
  });
}

// find total expenses
var expenseArray = [];
const expenseSubTotal = document.querySelectorAll(".expenseSubTotal");
const expense = document.querySelectorAll(".expense");

expense.forEach(function (expense) {
  expenseArray.push(
    parseInt(expense.textContent.replace("$", "").replace(",", ""))
  );
});
function expenseCalc() {
  let sum = 0;
  for (i = 0; i < expenseArray.length; i++) {
    sum += expenseArray[i];
  }
  return sum;
}

var expenseTotal = expenseCalc().toString();

if (expenseTotal.length == 4) {
  const a = expenseTotal.substring(0, 1);
  const b = expenseTotal.substring(1);
  expenseTotal = `$${a},${b}`;
  expenseSubTotal.forEach(function (expense) {
    expense.textContent = expenseTotal;
  });
} else if (expenseTotal.length == 5) {
  const a = expenseTotal.substring(0, 2);
  const b = expenseTotal.substring(2);
  expenseTotal = `$${a},${b}`;
  expenseSubTotal.forEach(function (expense) {
    expense.textContent = expenseTotal;
  });
} else {
  expenseSubTotal.forEach(function (expense) {
    expense.textContent = `$${expenseTotal}`;
  });
}

// find total debts
var debtArray = [];
const debtSubTotal = document.querySelectorAll(".debtSubTotal");

const debt = document.querySelectorAll(".debt");

debt.forEach(function (debt) {
  debtArray.push(parseInt(debt.textContent.replace("$", "").replace(",", "")));
});

function debtCalc() {
  let sum = 0;
  for (i = 0; i < debtArray.length; i++) {
    sum += debtArray[i];
  }
  return sum;
}

var debtTotal = debtCalc().toString();

if (debtTotal.length == 4) {
  const a = debtTotal.substring(0, 1);
  const b = debtTotal.substring(1);
  debtTotal = `$${a},${b}`;
  debtSubTotal.forEach(function (debt) {
    debt.textContent = debtTotal;
  });
} else if (debtTotal.length == 5) {
  const a = debtTotal.substring(0, 2);
  const b = debtTotal.substring(2);
  debtTotal = `$${a},${b}`;
  debtSubTotal.forEach(function (debt) {
    debt.textContent = debtTotal;
  });
} else {
  debtSubTotal.forEach(function (debt) {
    debt.textContent = `$${expenseTotal}`;
  });
}

// adjust text and financial summary based on overall position

const a = document.querySelector(".incomeSubTotal");
const b = document.querySelector(".expenseSubTotal");
const c = document.querySelector(".debtSubTotal");
const positive = document.querySelectorAll(".positive");
const negative = document.querySelectorAll(".negative");

const totalIncome = parseInt(a.textContent.replace("$", "").replace(",", ""));
const totalExpenses = parseInt(b.textContent.replace("$", "").replace(",", ""));
const totalDebts = parseInt(c.textContent.replace("$", "").replace(",", ""));

var position = totalIncome - totalExpenses - totalDebts;

addEventListener("DOMContentLoaded", function () {
  if (position < 0) {
    negative.forEach(function (neg) {
      neg.classList.remove("d-none");
    });
  } else {
    positive.forEach(function (pos) {
      pos.classList.remove("d-none");
    });
  }
});

// total monthly deficit or surplus
const total = document.querySelectorAll(".total");

var positionString = position.toString();

if (positionString.length == 5 && position < 0) {
  const a = positionString.substring(0, 1);
  const b = positionString.substring(1, 2);
  const c = positionString.substring(2);
  positionString = `${a}$${b},${c} Deficit per month`;
  total.forEach(function (total) {
    total.textContent = positionString;
  });
} else if (positionString.length == 6 && position < 0) {
  const a = positionString.substring(0, 1);
  const b = positionString.substring(1, 3);
  const c = positionString.substring(3);
  positionString = `${a}$${b},${c} Deficit per month`;
  total.forEach(function (total) {
    total.textContent = positionString;
  });
} else if (positionString.length == 4 && position > 0) {
  const a = positionString.substring(0, 1);
  const b = positionString.substring(1);
  positionString = `$${a},${b} Surplus per month`;
  total.forEach(function (total) {
    total.textContent = positionString;
  });
} else if (positionString.length < 5 && position < 0) {
  const a = positionString.substring(0, 1);
  const b = positionString.substring(1);
  positionString = `${a}$${b} Deficit per month`;
  total.forEach(function (total) {
    total.textContent = positionString;
  });
} else if (positionString.length < 4 && position > 0) {
  total.forEach(function (total) {
    total.textContent = `$${positionString} Surplus per month`;
  });
}
// Responsive pyramid height
const triangle1 = document.querySelector(".triangle1");
const triangle2 = document.querySelector(".triangle2");
const triangle3 = document.querySelector(".triangle3");
const triangle4 = document.querySelector(".triangle4");
const triangle5 = document.querySelector(".triangle5");
const triangle6 = document.querySelector(".triangle6");
const text1 = document.querySelector('.text1');
const text2 = document.querySelector('.text2');
const text3 = document.querySelector('.text3');

const pyramid = document.querySelector(".pyramid");
const Observer = new ResizeObserver((entries) => {
  const height = entries[0].contentRect.height;
  const sector = height / 3;
   triangle1.style.borderBottom = `${height}px solid ${array[0].color1}`;
   triangle2.style.borderBottom = `${height}px solid ${array[0].color2}`;
   text1.textContent = `${array[0].type}`;
   triangle3.style.borderBottom = `${sector * 2}px solid ${array[1].color1}`;
   triangle4.style.borderBottom = `${sector * 2}px solid ${array[1].color2}`;
   text2.textContent = `${array[1].type}`;
   triangle5.style.borderBottom = `${sector}px solid ${array[2].color1}`;
   triangle6.style.borderBottom = `${sector}px solid ${array[2].color2}`;
   text3.textContent = `${array[2].type}`;
});
Observer.observe(pyramid);

const array = [];
array.push({
  value: incomeCalc(),
  type: "Income",
  color1: "#5ea532",
  color2: "#4e892a",
});
array.push({
  value: expenseCalc(),
  type: "Expenses",
  color1: "#f76a6a",
  color2: "#e33030",
});
array.push({
  value: debtCalc(),
  type: "Debt",
  color1: "#fd8947",
  color2: "#ca4b02",
});
array.sort((a, b) => b.value - a.value);

