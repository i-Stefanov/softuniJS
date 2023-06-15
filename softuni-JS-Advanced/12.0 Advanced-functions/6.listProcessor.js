function listPorcessor(commands) {
  let collection = [];
  let actions = {
    add,
    remove,
    print,
  };
  commands.map((commnad) => {
    if (commnad === `print`) {
      actions[commnad]();
    } else {
      let [action, string] = commnad.split(` `);
      return actions[action](string);
    }
  });
  function add(string) {
    collection.push(string);
    return collection;
  }
  function remove(string) {
    while (collection.includes(string)) {
      collection.splice(collection.indexOf(string), 1);
    }
  }
  function print() {
    console.log(collection.join(`,`));
  }
}
listPorcessor(["add hello", "add again", "remove hello", "add again", "print"]);
