const mongoose = require("mongoose");
const vendorSchema = mongoose.Schema({
  vendorName: {
    type: String,
    required: [true, " Please enter vendor name"],
  },
  accountNumber: {
    type: String,
    required: [true, "Please enter Bank account number"],
  },
  bankName: {
    type: String,
    required: [true, "Please enter bank name"],
  },
  addressOne: {
    type: String,
    required: [true, "please enter address 1"],
  },
  addressTwo: {
    type: String,
    required: [true, "Please enter address 2"],
  },
  city: {
    type: String,
    required: [true, "plese enter your city"],
  },
  country: {
    type: String,
    required: [true, "please enter your country"],
  },
  zipcode: {
    type: String,
    required: [true, "please enter your pincode"],
  },
});
module.exports =
  mongoose.models.vendor || mongoose.model("vendor", vendorSchema);
