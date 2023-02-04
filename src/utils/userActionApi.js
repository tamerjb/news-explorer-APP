
class UserActions {
  constructor({ url, headers }) {
      this.url = url;
      this._headers = headers;
  }
  

  async _connect(url, headers) {
      const res = await fetch(url, headers);
      if (res.ok) {
          return res.json();
      } else {
          return await Promise.reject(`Error: ${res.status}`);
      }
  }

  signup(values) {
      return this._connect(`${this.url}/signup`, {
          method: "POST",
          headers: this._headers,
          body: JSON.stringify(values),
      });
  }

  signin(values) {
      return this._connect(`${this.url}/signin`, {
          method: "POST",
          headers: {
              Accept: "application/json",
              "Content-Type": "application/json",

          },
          body: JSON.stringify(values),
      });
  }

  checkToken(token) {
      return this._connect(`${this.url}/users/me`, {
          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
          },
      });
  }

  saveArticle(article,token) {
      return this._connect(`${this.url}/articles`, {
          method: "POST",
          headers: {
            ...this._headers,
            Authorization: `Bearer ${token}`,
          }
           ,body: JSON.stringify(article),
      });
  }

  getUserArticles(token) {
      return this._connect(`${this.url}/articles`, {
        method: 'GET',
          headers: {
            ...this._headers,
            Authorization: `Bearer ${token}`,
          }
        
      });
  }

  deleteArticleById(id,token) {
      return this._connect(`${this.url}/articles/${id}`, {
          method: "DELETE",
          headers: {
            ...this._headers,
            Authorization: `Bearer ${token}`,
          }
          
      });
  }
}


const userActionsApi = new UserActions({
  url: "https://news-explorer-api-tamerjb.vercel.app",
// url: 'http://localhost:3000',

  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default userActionsApi;
