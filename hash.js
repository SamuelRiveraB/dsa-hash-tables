let user = {
  age: 54,
  name: "Kylie",
  magic: true,
  scream: function () {
    console.log("AAAAHHHH");
  },
};

console.log(user.age); // O(1)
user.spell = "Abra Kadabra"; // O(1)
console.log(user.spell);
user.scream(); // O(1)
