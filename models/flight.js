import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

	
const ticketSchema = new Schema({
  seat: {type: String, match: /[A-F][1-9]\d?/},
  price: {type: Number, min: 0}
}, {
  timestamps: true
})

const flightSchema = new Schema({
  airline:{
    type:String,
    enum:['American','Southwest','United'],
  },
  airport: {
  type:String,
  enum:['AUS','DFW','DEN','LAX','SAM'],
  default:'DEN',
  },
  flightno: {
  type:Number,
  min:10,
  max:9999
},
  depart: {
  type:Date,
  default:function() {
    return new Date(new Date().setFullYear(new Date().getFullYear() + 1))

  }
}, 
  // reviews is an array of review subdocs!
  tickets: [ticketSchema],
  food: [{type: Schema.Types.ObjectId, ref: 'Meal'}]

}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}