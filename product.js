const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
.then(() => {
  console.log("conecction open!")
})
.catch(err => {
  console.log("OH NO ERROR")
  console.log(err)
})

const productSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number
  }
});

const Product = mongoose.model('product', productSchema);
const bike = new Product({ name: "Mountain Bike", price: 99, color: "red"})
bike.save()
.then(data => {
  console.log("IT WORKED!")
  console.log(data);
})
.catch(err => {
  console.log("OH NO ERROR!")
  console.log(err.errors.name.properties.message)
})