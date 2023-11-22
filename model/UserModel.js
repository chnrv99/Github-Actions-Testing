const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    fullname: { type: String },
    username: { type: String },
    githubId: { type: String, unique: true },
    location: { type: String },
    phone: { type: String },
    email: { type: String, lowercase: true },
    profilePhoto: { type: String, default: '' },
    points: { type: Number, default: 0 },
    mergedPRs: [
      {
        // u can update the pr details here... for now this should work ig
        prNumber: { type: Number },
        timestamp: { type: Date },
        points_receieved: { type: Number },
      }
    ]
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
