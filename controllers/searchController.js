import axios from "axios";
import SearchResult from "../models/SearchResult.js";

export const searchGithub = async (req, res) => {
  try {
    const { keyword } = req.body;
    const userId = req.user.id;

    const response = await axios.get(`https://api.github.com/search/repositories?q=${keyword}&per_page=5`);

    const searchData = await SearchResult.create({
      keyword,
      results: response.data.items,
      userId
    });

    res.json(searchData);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching data" });
  }
};

export const getUserSearches = async (req, res) => {
  try {
    const userId = req.user.id;
    const searches = await SearchResult.find({ userId }).sort({ createdAt: -1 });
    res.json(searches);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching history" });
  }
};
