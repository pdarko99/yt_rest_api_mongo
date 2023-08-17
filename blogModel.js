import mongoose from "mongoose";

const { Schema } = mongoose;

const blogs = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.model("blogModel", blogs);
