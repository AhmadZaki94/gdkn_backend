const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true },
    dob: { type: String, required: true },
    gender: { type: String, enum: ["male", "female"], default: "male" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
