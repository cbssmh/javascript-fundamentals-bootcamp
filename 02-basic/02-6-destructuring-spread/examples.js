const users = [
  { name: "A", age: 20 },
  { name: "B", age: 30 }
];

const names = users.map(user => user.name);
const adults = users.filter(user => user.age >= 25);
