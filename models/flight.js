import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

	
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
  default:'01/12/2025'
}
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}