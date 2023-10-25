const Item = require("../models/Item");
exports.getFilteredItems = (itemName, itemType) =>
  Item.find({ name: itemName, type: itemType });
exports.getAllItems = () => Item.find();
exports.getOneItem = (id) => Item.findById(id);
exports.create = (itemData) => Item.create(itemData);
exports.edit = (itemId, itemData) => Item.findByIdAndUpdate(itemId, itemData);
exports.delete = (itemId) => Item.findByIdAndDelete(itemId);
exports.addOwnerId = (itemId, userId) => {
  const item = Item.findById(itemId);
  item.buyingList.push(userId);
  return item.save();
};
