import { Room } from "../models/index.js";
import { APIFeatures } from "../utils/index.js";

const createRoom = async (
  req,
  res,
  next
) => {
  try {
    const room = await Room.create(
      req.body
    );

    res.status(201).json({
      status: "success",
      data: { room },
    });
  } catch (err) {
    next(err);
  }
};

const getAllRooms = async (
  req,
  res,
  next
) => {
  try {
    const query = new APIFeatures(
      Room.find(),
      req.query
    )
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const rooms = await query.query;
    res.status(200).json({
      status: "success",
      results: rooms.length,
      data: {
        rooms,
      },
    });
  } catch (err) {
    next(err);
  }
};

export { createRoom, getAllRooms };
