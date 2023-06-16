class SmartHike {
  constructor(username) {
    this.username = username;
    this.goals = {};
    this.listOfHikes = [];
    this.resources = 100;
  }
  addGoal(peak, altitude) {
    if (!this.goals.hasOwnProperty(peak)) {
      this.goals[peak] = altitude;
      return `You have successfully added a new goal - ${peak}`;
    } else {
      return `${peak} has already been added to your goals`;
    }
  }
  hike(peak, time, difficultyLevel) {
    if (!Object.keys(this.goals).includes(peak)) {
      throw new Error(`${peak} is not in your current goals`);
    } else if (this.resources <= 0) {
      throw new Error("You don't have enough resources to complete the hike");
    } else if (this.resources - time * 10 < 0) {
      return "You don't have enough resources to complete the hike";
    } else {
      this.resources -= time * 10;
      this.listOfHikes.push({ peak, time, difficultyLevel });
    }
    return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
  }
  rest(time) {
    this.resources += time * 10;
    if (this.resources > 100) {
      this.resources = 100;
      return `Your resources are fully recharged. Time for hiking!`;
    } else {
      return `You have rested for ${time} hours and gained ${
        time * 10
      }% resources`;
    }
  }
  showRecord(criteria) {
    let result = [];
    if (this.listOfHikes.length === 0) {
      return `${this.username} has not done any hiking yet`;
    }
    if (criteria !== "all") {
      result = this.listOfHikes.filter(
        (hike) => hike.difficultyLevel === criteria
      );
      if (result.length === 0) {
        return `${this.username} has not done any ${criteria} hiking yet`;
      }

      result = result.reduce((prev, current) => {
        return prev.time < current.time ? prev : current;
      });
      return `${this.username}'s best ${criteria} hike is ${result.peak} peak, for ${result.time} hours`;
    } else {
      let line1 = "All hiking records:";

      let result = [];
      result.push(line1);
      for (const hike of this.listOfHikes) {
        result.push(
          `${this.username} hiked ${hike.peak} for ${hike.time} hours`
        );
      }
      return result.join(`\n`);
    }
  }
}
const user = new SmartHike("Vili");
user.addGoal("Musala", 2925);
user.hike("Musala", 8, "hard");
console.log(user.showRecord("easy"));
user.addGoal("Vihren", 2914);
user.hike("Vihren", 4, "hard");
console.log(user.showRecord("hard"));
user.addGoal("Rui", 1706);
user.hike("Rui", 3, "easy");
console.log(user.showRecord("all"));
