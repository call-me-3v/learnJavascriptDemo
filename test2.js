const database = [
  { id: 1, username: "3V", name: "Vincent" },
  { id: 1, username: "Cheese", name: "Kelvin" },
  { id: 2, username: "Mouse", name: "Bob" },
  { id: 3, username: "3G", name: "Mtn" },
];

const result = database.filter((info) => info.id === 0);

console.log(result);

if (result.length > 0) {
  console.log("leng");
}

console.log(database.slice(0,3));