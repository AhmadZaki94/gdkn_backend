const express = require("express");
const Customer = require("../models/customer.model");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).send(customer);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const customer = await Customer.find().lean().exec();
    res.status(200).send(customer);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id).lean().exec();
    res.status(200).send(customer);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
      .lean()
      .exec();
    res.status(200).send(customer);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const customer = await Customer.findOneAndDelete({ id: req.params.id });
    res.status(200).send(customer);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
