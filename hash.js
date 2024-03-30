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

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}

const myHashTable = new HashTable(50);
console.log(myHashTable);
// myHashTable.set("grapes", 10000);
// myHashTable.get("grapes");
