class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }
  addPlant(plantName, spaceRequired) {
    if (this.spaceAvailable - spaceRequired < 0) {
      throw new Error("Not enough space in the garden.");
    } else {
      let plantData = { plantName, spaceRequired, ripe: false, quantity: 0 };
      this.plants.push(plantData);
      this.spaceAvailable -= spaceRequired;
      return `The ${plantName} has been successfully planted in the garden.`;
    }
  }
  ripenPlant(plantName, quantity) {
    let result = this.plants.filter((plant) => plant.plantName === plantName);
    if (result.length === 0) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }
    this.plants.forEach((plant) => {
      if (plantName === plant.plantName && plant.ripe === true) {
        throw new Error(`The ${plantName} is already ripe.`);
      }
    });
    if (quantity <= 0) {
      throw new Error("The quantity cannot be zero or negative.");
    }
    for (const plant of this.plants) {
      if (plantName === plant.plantName) {
        plant.ripe = true;
        plant.quantity += quantity;
        if (plant.quantity === 1) {
          return `${quantity} ${plantName} has successfully ripened.`;
        } else {
          return `${quantity} ${plantName}s have successfully ripened.`;
        }
      }
    }
  }
  harvestPlant(plantName) {
    let result = this.plants.filter((plant) => plant.plantName === plantName);
    if (result.length === 0) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }
    if (!result[0].ripe) {
      throw new Error(
        `The ${plantName} cannot be harvested before it is ripe.`
      );
    }
    this.plants = this.plants.filter((plant) => plant.plantName !== plantName);
    this.spaceAvailable += result[0].spaceRequired;
    let harvestedPlantName = result[0].plantName;
    let harvestedQuantity = result[0].quantity;
    this.storage.push({
      plantName: harvestedPlantName,
      quantity: harvestedQuantity,
    });
    return `The ${plantName} has been successfully harvested.`;
  }
  generateReport() {
    let plantNames = [];
    for (const plant of this.plants) {
      plantNames.push(plant.plantName);
    }
    let sortedNames = plantNames.sort((a, b) => a.localeCompare(b));
    let line1 = `The garden has ${this.spaceAvailable} free space left.`;
    let line2 = `Plants in the garden: ${sortedNames.join(`, `)}`;
    let line3 = [];
    if (this.storage.length === 0) {
      line3 = ["Plants in storage: The storage is empty."];
    } else {
      for (const plant of this.storage) {
        line3.push(`${plant.plantName} (${plant.quantity})`);
      }
    }
    let result = `${line1}\n${line2}\nPlants in storage: ${line3.join(`, `)}`;
    return result;
  }
}
const myGarden = new Garden(250);
console.log(myGarden.addPlant("apple", 20));
console.log(myGarden.addPlant("orange", 200));
console.log(myGarden.addPlant("raspberry", 10));
console.log(myGarden.ripenPlant("apple", 10));
console.log(myGarden.ripenPlant("orange", 1));

console.log(myGarden.harvestPlant("orange"));
console.log(myGarden.generateReport());
