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

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  } // O(1)

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          //   console.log(currentBucket[i][1]);
          return currentBucket[i][1];
        }
      }
    } // O(1) w no collisions, O(n) worst case
    return undefined;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          keysArray.push(this.data[i][j][0]);
        }
      }
    }
    console.log(keysArray);
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
console.log(myHashTable);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 54);
myHashTable.set("oranges", 2);
myHashTable.get("grapes");
myHashTable.keys();
