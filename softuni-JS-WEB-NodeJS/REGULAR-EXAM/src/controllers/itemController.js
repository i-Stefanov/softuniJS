const router = require("express").Router();
const itemManager = require("../managers/itemManager");
const { getErrorMessage } = require("../utils/errorHelpers");
//* res.render('items') renders the index file in the items folder
router.get("/", async (req, res) => {
  const items = await itemManager.getAllItems().lean();
  res.render("items", { items });
});
router.get("/create", (req, res) => {
  res.render("items/create");
});
router.post("/create", async (req, res) => {
  const itemData = req.body;
  const owner = req.user._id;
  try {
    await itemManager.create({ ...itemData, owner });
    // await itemManager.addOwnerId(ownerId);
    res.redirect("/items");
  } catch (err) {
    // if err render the same page and pass the error to handlebars (the second arg in rener)
    res.render("items/create", { error: getErrorMessage(err) });
  }
});
router.get("/:itemId/details", async (req, res) => {
  const itemId = req.params.itemId;

  try {
    const item = await itemManager.getOneItem(itemId).lean();
    // the ? in req.user?._id means that the variable could be undefined and if it is the skip the variable
    let isOwner = req.user?._id == item.owner._id;

    res.render("items/details", { item, isOwner });
  } catch (err) {
    res.render(`items/${itemId}/details`, { error: getErrorMessage(err) });
  }
});
router.get("/:itemId/edit", async (req, res) => {
  const itemId = req.params.itemId;

  const item = await itemManager.getOneItem(itemId).lean();
  res.render("items/edit", { item });
});
router.post("/:itemId/edit", async (req, res) => {
  const itemId = req.params.itemId;
  const itemData = req.body;
  try {
    await itemManager.edit(itemId, itemData);
    res.redirect(`/items/${itemId}/details`);
  } catch (err) {
    res.render("items/edit", {
      error: "Unable to update item...",
      ...itemData,
    });
  }
});
router.get("/:itemId/delete", async (req, res) => {
  const itemId = req.params.itemId;
  try {
    await itemManager.delete(itemId);
    res.redirect("/items");
  } catch (err) {
    res.render(`/items/${itemId}/details`, {
      error: "Unsuccessful deletion!",
    });
  }
});
router.get("/search", async (req, res) => {
  const { name, type } = req.body;
  const result = await itemManager.getFilteredItems(name, type).lean();
  console.log(result);
  res.render("search", { result });
});
router.get("/:itemId/buy", (req, res) => {});
// router.get("/:itemId/comments", async (req, res) => {
//   const itemId = req.params.itemId;
//   const { message } = req.body;
//   const userId = req.user._id;

//   await itemManager.addOwnerId(itemId, { userId });
//   res.redirect(`/items/${itemId}/details`);
// });
module.exports = router;
