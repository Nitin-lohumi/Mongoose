import mongoose from 'mongoose';
const submodels = new mongoose.Schema(
  {
    submodel: {
      type: String,
      uinque: true,
    },
  },
  { timestamps: true }
);
export const submodel = mongoose.model('submodel', submodels);
