import axios from 'axios';
import { key } from '../config';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      const res = await axios.get(
        `https://www.food2fork.com/api/search/?key=${key}&q=${this.query}`
      );
      this.result = res.data.recipes;
    } catch (error) {
      debugger;
      console.log(error);
    }
  }
}

// https://www.food2fork.com/api/get
// https://www.food2fork.com/api/search
// 36262a25a883b234caef28d994c2c8d3
