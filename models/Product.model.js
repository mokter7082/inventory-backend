const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      unique: [true, "name must be unique"],
      minLenght: [3, "Name must be 3 characters"],
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, "Description  is require"],
    },
    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "litre", "pecs", "bag"],
        message: "unit must be enum value",
      },
    },
    imageUrls: [
      {
        type: String,
        required: true,
        validate: {
          validator: (value) => {
            if (!Array.isArray) {
              return false;
            }
            let isValid = true;
            value.forEach((url) => {
              if (!validator.isUrl(url)) {
                isValid = false;
              }
            });
            return isValid;
          },
          message: "Please provide valid image url",
        },
      },
    ],
    category: {
      type: String,
      required: true,
    },
    brand: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: ObjectId,
        ref: "Brand",
        required: true,
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
  },
  { timestamps: true }
);

module.exports.Product = mongoose.model("Product", productSchema);
