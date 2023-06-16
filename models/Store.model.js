const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;

const storeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a store name"],
      trim: true,
      maxLength: 100,
      unique: true,
      // lowercase: true,
      enum: {
        values: ["Dhaka", "Chattogram", "Rajshahi", "Comilla"],
        message: "{VALUE} is not valid name",
      },
    },
    description: String,
    status: {
      type: String,
      default: "Active",
    },
    manager: {
      name: String,
      phone: String,
      id: ObjectId,
      // ref: "User",
    },
  },
  { timestamps: true }
);

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;
