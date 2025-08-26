import mongoose from "mongoose";

const searchResultSchema = new mongoose.Schema({
  keyword: { type: String, required: true },
  results: { type: Array, default: [] },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("SearchResult", searchResultSchema);
