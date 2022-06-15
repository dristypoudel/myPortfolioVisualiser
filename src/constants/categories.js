const incomeColors = [
  "#123123",
  "#154731",
  "#165f40",
  "#16784f",
  "#14915f",
  "#10ac6e",
  "#0bc77e",
  "#04e38d",
  "#00ff9d",
  "#1107de",
  "#644c14"
];
const expenseColors = [
  "#b50d12",
  "#bf2f1f",
  "#c9452c",
  "#d3583a",
  "#dc6a48",
  "#e57c58",
  "#ee8d68",
  "#f79d79",
  "#ffae8a",
  "#cc474b",
  "#f55b5f",
  "#beeed1",
  "#cba1be"
];

const incomeCategories = [
  { category: "Non life insurance Index", amount: 0, color: incomeColors[0] },
  { category: "Life insuranc Indexe", amount: 0, color: incomeColors[1] },
  { category: "Banking Index", amount: 0, color: incomeColors[2] },
  { category: "Others Index", amount: 0, color: incomeColors[3] },
  { category: "Hydropower Index", amount: 0, color: incomeColors[4] },
  { category: "Finance Index", amount: 0, color: incomeColors[5] },
  { category: "Microfinance Index", amount: 0, color: incomeColors[6] },
  { category: "Hotel Index", amount: 0, color: incomeColors[7] },
  { category: "DevBank Index", amount: 0, color: incomeColors[8] },
  { category: "ManProc Index", amount: 0, color: incomeColors[9] },
];

const expenseCategories = [
  { category: "Non life insurance Index", amount: 0, color: expenseColors[0] },
  { category: "Life insuranc Indexe", amount: 0, color: expenseColors[1] },
  { category: "Banking Index", amount: 0, color: expenseColors[2] },
  { category: "Others Index", amount: 0, color: expenseColors[3] },
  { category: "Hydropower Index", amount: 0, color: expenseColors[4] },
  { category: "Finance Index", amount: 0, color: expenseColors[5] },
  { category: "Microfinance Index", amount: 0, color: expenseColors[6] },
  { category: "Hotel Index", amount: 0, color: expenseColors[7] },
  { category: "DevBank Index", amount: 0, color: expenseColors[8] },
  { category: "ManProc Index", amount: 0, color: expenseColors[9] },
];

const resetCategories = () => {
  incomeCategories.forEach((c) => (c.amount = 0));
  expenseCategories.forEach((c) => (c.amount = 0));
};

export { resetCategories, incomeCategories, expenseCategories };
