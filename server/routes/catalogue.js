const express = require('express');
const Catalogue = require('../models/CatalogueSchema');
const router = express.Router();

router.post('/add', async (req, res) => {
  let newCatalogue = new Catalogue({
    itemcode: req.body.itemcode,
    imagelink: req.body.imagelink,
    itemname: req.body.itemname,
    description: req.body.description,
    details: req.body.details,
    one_month_price: req.body.one_month_price,
    two_month_price: req.body.two_month_price,
    three_month_price: req.body.three_month_price,
    six_month_price: req.body.six_month_price,
    nine_month_price: req.body.nine_month_price,
    twelve_month_price: req.body.twelve_month_price,
    status: req.body.status
  });
  try {
    await newCatalogue.save();
    res.send("Done");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/all', async (req, res) => {
  try {
    const allItems = await Catalogue.find({});
    res.json(allItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/update/:itemcode', async (req, res) => {
  try {
    const updatedItem = await Catalogue.findOneAndUpdate(
      { itemcode: req.params.itemcode },
      req.body,
      { new: true }
    );
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/delete/:itemcode', async (req, res) => {
  try {
    const deletedItem = await Catalogue.findOneAndDelete({ itemcode: req.params.itemcode });
    res.json(deletedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
