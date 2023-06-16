const mongoose = require("mongoose");
const validator = require("validator");

const { ObjectId } = mongoose.Schema.Types;

const brandSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a brand name"],
      trim: true,
      maxLength: 100,
      unique: true,
      lowercase: true,
    },
    description: true,
    email: {
      type: String,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    website: {
      type: String,
      validate: [validator.isURL, "Please provide a valid url"],
    },
    location: {
      required: [true, "Please provide a valide location"],
    },
    products: [
      {
        type: ObjectId,
        ref: "Product",
      },
    ],
    suplliers: [
      {
        name: String,
        phone: String,
        id: {
          type: ObjectId,
          ref: "Supplier",
        },
      },
    ],
    status: {
      type: String,
      default: "Active",
    },
  },
  { timestamps: true }
);

const Brand = mongoose.model("Brand", brandSchema);

exports = Brand;
