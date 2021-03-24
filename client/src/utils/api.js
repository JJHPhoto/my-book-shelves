import axios from "axios";

const api = {
  async getBooks() {
    return axios.get("/api/books");
  },

  async addBook(book) {
    console.log("added books", { book });
    return axios.post("/api/books", { ...book });
  },

  async deleteBook(bookId) {
    return axios.delete(`/api/books/${bookId}`);
  },
};

export default api;
