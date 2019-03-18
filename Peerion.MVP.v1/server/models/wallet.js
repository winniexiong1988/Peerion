const mongoose = require('mongoose');

const { Schema } = mongoose;

// Wallet Schema
const WalletSchema = new Schema(
  {
    userId: { type: Number },
    address: { type: String },
    privateKey: { type: String },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Wallet', WalletSchema);
