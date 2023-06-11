const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      unique: [true, "name must be unique"],
      minLenght: [3, "Name must be 3 characters"],
    },
    description: {
      type: String,
      required: [true, "Description  is require"],
    },
    price: {
      type: Number,
      min: [0, "provide a positive value"],
    },
    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "litter", "pecs"],
        message: "unit must be enum value",
      },
    },
    quantity: {
      type: Number,
      required: true,
      validator: (value) => {
        const isInteger = Number.isInteger(value);
        if (isInteger) {
          return true;
        } else {
          return false;
        }
      },
      message: "quantity must be integer",
    },
    status: {
      type: String,
      reuired: true,
      enum: {
        values: ["in-stock", "out-of-stock", "discontinue"],
        message:
          "value can't be {VALUE} provide like in-stock, out-of-stock,discontinue",
      },
    },

    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    // },
    // updatedAt: {
    //   type: Date,
    //   default: Date.now,
    // },
    // supplier: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Supplier",
    // },
  },
  { timestamps: true }
);

module.exports.Product = mongoose.model("Product", productSchema);
