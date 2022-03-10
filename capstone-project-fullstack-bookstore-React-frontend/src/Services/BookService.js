import axios from "axios";
const BOOK_API_URL = "http://localhost:8091";
export const USER_NAME_SESSION_ATTRIBUTE_NAME = "authenticatedUser";
const INSTRUCTOR = "in28minutes";
const PASSWORD = "dummy";
// const COURSE_API_URL = 'http://localhost:8080'
const INSTRUCTOR_API_URL = `${BOOK_API_URL}/reader`;
class BookService {
  retrieveAllCourses(name) {
    console.log("executed service");
    return axios.get(
      `${INSTRUCTOR_API_URL}/user`
      // { headers: { authorization: 'Basic ' + window.btoa(INSTRUCTOR + ":" + PASSWORD) } }
    );
  }

  executeBasicAuthenticationService(username, password) {
    return axios.get(`${BOOK_API_URL}/basicauth`, {
      headers: { authorization: this.createBasicAuthToken(username, password) },
    });
  }

  createBasicAuthToken(username, password) {
    return "Basic" + window.btoa(username + ":" + password);
  }

  registerSuccesfullLogin(username, password) {
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
  }

  setupAxiosInterceptors(token) {
    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = token;
      }
      return config;
    });
  }

  logout() {
    sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) return false;
    return true;
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) return "";
    return user;
  }

  getBooks() {
    return axios.get(BOOK_API_URL + "/allbooks");
  }

  createBook(book) {
    return axios.post(BOOK_API_URL + "/addbook", book);
  }
  upLoad(book) {
    return axios.post(BOOK_API_URL + "/newadd", book);
  }

  updateBook(book, id) {
    return axios.put(BOOK_API_URL + "/updatebook/" + id, book);
  }

  getBookById(id) {
    return axios.get(BOOK_API_URL + "/book/" + id);
  }

  deleteBook(id) {
    return axios.delete(BOOK_API_URL + "/deletebook/" + id);
  }

  getBookByAuthor(author) {
    return axios.get(BOOK_API_URL + "/bookbyauthor/" + author);
  }

  getBookByTitle(title) {
    return axios.get(BOOK_API_URL + "/bookbytitle/" + title);
  }

  getBookByGenre(genre) {
    return axios.get(BOOK_API_URL + "/bookbygenre/" + genre);
  }

  getGoogleBook() {
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=+inauthor&maxResults=20&orderBy=newest&key=AIzaSyArjbD475YhVXqcK1JnZYTYaoLhNEwcw9Y"
    );
  }

  getAllUsers() {
    return axios.post(BOOK_API_URL + "/user/");
  }
}
export default new BookService();
