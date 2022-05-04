const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-comm");
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

const saveInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = new Product({
    name: "M16",
    price: 100,
    brand: "samsung",
    category: "Mobile",
  });
  let result = await data.save();
  console.log(result);
};
// saveInDB()

const updateInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.updateOne(
    { name: "iphone" },
    { $set: { brand: "apple", name: "iphone7"} }
  );
  console.log(data);
};
// updateInDB();

const deleteInDB = async () => {
  const Product = mongoose.model("products", productSchema);
    let data = await Product.deleteOne({ name: "iphone7" })
    console.log(data);
}
// deleteInDB()

const findInDB = async () => {
  const Product = mongoose.model("products", productSchema);
    let data = await Product.find({name: "mi note"})
    console.log(data);
}
// findInDB()

