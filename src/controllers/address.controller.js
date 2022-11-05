const express = require("express");

const Address = require("../models/address.model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const address = await Address.find().lean().exec();
    return res.status(201).send(address);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const address = await Address.create(req.body);
    return res.status(200).send(address);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const address = await Address.findById(req.params.id);
    res.status(200).send(address);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:customerId/:customerId",async (req, res)=>{
  try{
    const address = await Address.findOne({customerId: req.params.customerId});
    res.status(200).send(address);
  }catch(err) {
    return res.status(500).send({ message: err.message});
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const address = await Address.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
      .lean()
      .exec();
    res.status(200).send(address);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const address = await Address.findOneAndDelete({ id: req.params.id });
    res.status(200).send(address);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
