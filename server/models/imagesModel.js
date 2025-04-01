const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    clerkUserId: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    prompt: {
      type: String,
      required: true,
    },
    generatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { strict: "throw" }
);

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
