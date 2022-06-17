const { Schema, model, Types: { ObjectId } } = require("mongoose");

const carSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, default: "" },
  imageUrl: { type: String, default: "noimage.jpg" },
  price: { type: Number, required: true, min: 0 },
  accessories: { type: [ObjectId], default: [], ref: "Accessory" },
  isDeleted: { type: Boolean, default: false },
  owner: {type: ObjectId, res: 'User'}
});

const Car = model("Car", carSchema);

module.exports = Car;
