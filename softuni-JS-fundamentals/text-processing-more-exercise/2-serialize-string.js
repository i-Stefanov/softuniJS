function serialize(data) {
  let str = data[0];
  let dataObj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!dataObj.hasOwnProperty(char)) {
      dataObj[char] = [];
    }
    dataObj[char].push(i);
  }
  for (const char in dataObj) {
    console.log(`${char}:${dataObj[char].join(`/`)}`);
  }
}

// serialize(["abababa"]);
serialize(["avjavamsdmcalsdm"]);
