import mongoose from 'mongoose';
const todos = new mongoose.Schema(
  {
    content: {
      type: String,
      unique: true,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createBY: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.OjectId,
        ref: 'submodel',
      },
    ],
  },
  { timestamps: true }
);
export const todo = mongoose.model('todo', todos);
