class UserActions {
  constructor({ url, headers ,token}) {
    this.url = url;
    this.headers = headers;
    this.token = localStorage.getItem("token");

  }

  async _connect(url, headers) {
    const res = await fetch(url, headers);
    if (res.ok) {
      return res.json();
    } else {
      return await Promise.reject(`Error: ${res.status}`);
    }
  }

  signup(values,token) {
    return this._connect(`${this.url}/signup`, {
      method: "POST",
      headers: this.headers,Authorization: `Bearer ${token}`,
      body: JSON.stringify(values),
    });
  }

  signin(values,token) {
    return this._connect(`${this.url}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
         Authorization: `Bearer ${token}`,

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

  saveArticle(article, token) {
    return this._connect(`${this.url}/articles`, {
      method: "POST",
      headers: this.headers,
      Authorization: `Bearer ${token}`,
      body: JSON.stringify(article),
    });
  }

  getUserArticles(token) {
    return this._connect(`${this.url}/articles`, {
      headers:this.headers,Authorization: `Bearer ${token}`
    
    });
  }

  deleteArticleById(id, token) {
    return this._connect(`${this.url}/articles/${id}`, {
      method: "DELETE",
      Authorization: `Bearer ${token}`,
      headers: this.headers,
    });
  }
}

const userActionsApi = new UserActions({
  url: "https://api.newsexplorer-tamir.students.nomoredomainssbs.ru",
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${token}`,
  },
});

export default userActionsApi;
