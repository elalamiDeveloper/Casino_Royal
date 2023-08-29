import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [
      true,
      "Room must have a name",
    ],
  },
  nbPlayer: {
    type: Number,
    default: 0,
  },
  maxPlayer: {
    type: Number,
    required: [
      true,
      "Room must have a max player",
    ],
  },
  type: {
    type: String,
    enum: ["poker", "roulette"],
    required: [
      true,
      "Room must have a type",
    ],
  },
  sBlind: {
    type: Number,
    default: 0.2,
  },
  bBlind: {
    type: Number,
    default: 0.4,
  },

  minAut: {
    type: Number,
    default: 20,
  },

  maxAut: {
    type: Number,
    default: 100,
  },
});

const Room = mongoose.model(
  "Room",
  roomSchema
);

export default Room;
