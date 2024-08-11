const users = [
    { name: "Sharlene Bush", gender: "female", balance: 3456 },
    { name: "Sheree Anthony", gender: "female", balance: 5407 },
    { name: "Elma Head", gender: "female", balance: 0 },
    { name: "Moore Hensley", gender: "male", balance: 1234 },
    { name: "Ross Vazquez", gender: "male", balance: 2345 },
    { name: "Carey Barr", gender: "male", balance: 4567 },
    { name: "Blackburn Dotson", gender: "male", balance: 6907 }
  ];
  
  const getTotalBalanceByGender = (users, gender) => {
    return users
      .filter(user => user.gender === gender) // Фільтрація користувачів за гендером
      .reduce((total, user) => total + user.balance, 0); // Підрахунок загального балансу
  };
  
  const clients = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863