const mongoose = require('mongoose');
const {Schema} = mongoose
const CatalogueSchema = new Schema({
  itemcode:{
    type: String,
    required:true,
    unique: true
  },
  imagelink:{
    type:String
  },
  itemname:{
    type:String
  },
  description :{
    type:String
  },
  details:{
    type:String
  },
  one_month_price:{
    type: Number
  },
  two_month_price:{
    type:Number
  },
  three_month_price:{
    type: Number
  },
  six_month_price:{
    type:Number
  },
  nine_month_price:{
    type:Number
  },
  twelve_month_price:{
    type:Number
  },
  status:{
    type:String
  }
})


const CatalogueCollection= mongoose.model('catalogues',CatalogueSchema)

CatalogueCollection.createCollection()

module.exports = CatalogueCollection

