function minerTask(data) {
  let recources = {};
  for (let i = 0; i < data.length; i += 2) {
    if (!recources.hasOwnProperty(data[i])) {
      recources[data[i]] = Number(data[i + 1]);
    } else {
      recources[data[i]] += Number(data[i + 1]);
    }
  }
  for (const resource in recources) {
    console.log(`${resource} -> ${recources[resource]}`);
  }
}
// minerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
minerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
