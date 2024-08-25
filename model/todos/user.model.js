import mongoose from 'mongoose';
const userScheema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      unique: true,
      required: [true, 'the password is required'],
    },
  },
  { timestamps: true }
);
export const User = mongoose.model('User', userScheema);
