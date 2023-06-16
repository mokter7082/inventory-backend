const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const stockSchema = mongoose.Schema(
  {
    productId: {
      type: ObjectId,
      required: true,
      ref: "Product",
    },
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
    price: {
      type: Number,
      required: true,
      min: [0, "Product price can't be negative"],
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "Product quantity can't be negative"],
    },
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
    store: {
      name: {
        type: String,
        required: [true, "Please provide a store name"],
        trim: true,
        maxLength: 100,
        unique: true,
        lowercase: true,
        enum: {
          values: ["Dhaka", "Chattogram", "Rajshahi", "Comilla"],
          message: "{VALUE} is not valid name",
        },
      },
      id: {
        type: ObjectId,
        ref: "Store",
        required: true,
      },
    },
    suppliedBy: {
      name: {
        type: String,
        required: [true, "Please provide a store name"],
        trim: true,
      },
      id: {
        type: ObjectId,
        ref: "Supplier",
        required: true,
      },
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

exports.Stock = mongoose.model("Stock", stockSchema);
