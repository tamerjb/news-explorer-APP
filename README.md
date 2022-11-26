# News Explorer

**Full stack APP for exploring news .**

**[Live app](https://newsexplorer-tamir.students.nomoredomainssbs.ru)**

### Routes & Features :

- `/signup` POST request for creating a user.
- `/signin` POST request for receiving a Json-Web-Token.
- `/users/me` GET request for receiving the current user using Json-Web-Token.
- `/articles` GET request for getting all the current user saved articles.
- `/articles` POST request for saving a new article to the current user.
- `/articles/:id` DELETE request for deleting an article by id.

### LINKS :

- ## [API](https://api.newsexplorer-tamir.students.nomoredomainssbs.ru)

- ## [APP](https://newsexplorer-tamir.students.nomoredomainssbs.ru)

### ⚒ Technology stack ⚒

## Front-End :

- ReactJS
- JavaScript
- CSS3
- React Router Dom
- Responsive Layout
- JWT server Auth
- newsapi.org - articles
- Deployed to **GCP** (Google Cloud Platform) Ubuntu 18.04 LTS VM

## Back-End :

| Packges                              |                                                                                                                                                                                                       Aspects of Use |
| :----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| bcryptjs                             |                                                                                                                                                                                                  Password Encryption |
| body-parser                          |                                                                                                                              Returns middlewares that handle incoming requests before they reach a target controller |
| celebrate                            |                                                                                                                                            It's an express middleware function that wraps the joi validation library |
| cors (Cross-Origin Resource Sharing) | It is a mechanism to allow or restrict requested resources on a web server depend on where the HTTP request was initiated. This policy is used to secure a certain web server from access by other website or domain |
| dotenv                               |                                                                                                                              automatically loads environment variables from a .env file into the process .env object |
| express-winston                      |                                                                                                                                    Provides middlewares for request and error logging of your express.js application |
| winston                              |                                                                                                                                                       Universal logging library with support for multiple transports |
| validator                            |                                                                                                                                                                        A library of string validators and sanitizers |
| jsonwebtoken                         |                                                                                                                                   An open standard for securely transferring data within parties using a JSON object |
| express-rate-limit                   |                                                                                                                                Use to limit repeated requests to public APIs and/or endpoints such as password reset |
| helmet                               |                                                                                                                                                   Helps you secure your Express apps by setting various HTTP headers |

- NGINX - An open source software for web serving, reverse proxying, caching, load balancing, media streaming, and more.

### Implementations :

- OOP.
- Semantic HTML & BEM methodology.
- Responsive user interface.
- Global state management - Context API.

### How to Get Started :

### **Clone**

#[Git Clone](https://github.com/tamerjb/news-explorer-frontend.git)

- ### **Install**

$ cd news-explorer-frontend
$ npm install

- ### **Launch**

npm run start
