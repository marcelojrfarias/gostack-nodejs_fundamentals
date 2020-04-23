<h1 align="center">
    <img alt="GoStack Bootcamp" src="https://res.cloudinary.com/marcelojrfarias/image/upload/v1587323057/gostack_gy3h7u.png" />
    <br>
    Challenge #4
    <br>
    Node.js Fundamentals
</h1>

<h4 align="center">
  An application to store incoming and outgoing financial transactions that allows the registration and listing of these transactions.
</h4>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/marcelojrfarias/gostack-nodejs_fundamentals.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/marcelojrfarias/gostack-nodejs_fundamentals.svg">

  <a href="https://www.codacy.com/manual/marcelojrfarias/gostack-nodejs_fundamentals?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=marcelojrfarias/gostack-nodejs_fundamentals&amp;utm_campaign=Badge_Grade">
    <img src="https://api.codacy.com/project/badge/Grade/d8f86cddcc4c4c1e82b77156e8323b58"/>
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/marcelojrfarias/gostack-nodejs_fundamentals.svg">
  <a href="https://github.com/marcelojrfarias/gostack-nodejs_fundamentals/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/marcelojrfarias/gostack-nodejs_fundamentals.svg">
  </a>

  <a href="https://github.com/marcelojrfarias/gostack-nodejs_fundamentals/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/marcelojrfarias/gostack-nodejs_fundamentals.svg">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/marcelojrfarias/gostack-nodejs_fundamentals.svg">
</p>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#link-routes">Routes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :rocket: Technologies

This project was developed at the [RocketSeat GoStack Bootcamp][gostack] with the following technologies:

- [NodeJS][nodejs]
- [Express][express]
- [Typescript][typescript]
- [Eslint][eslint]
- [Prettier][prettier]
- [Editor Config][editor-config]
- [Visual Studio Code][vscode]
- And some other packages...

## :gear: How To Use

To clone and run this application, you'll need [Git][git], [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/marcelojrfarias/gostack-nodejs_fundamentals

# Go into the repository
$ cd gostack-nodejs_fundamentals

# Install dependencies
$ yarn install

# Run the app
$ yarn dev:server
```

## :link: Routes
<p align="center">
  <a href="#list-the-appointments">List</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#create-a-appointment">Create</a>
</p>

<h1 align="center">
<a href="https://insomnia.rest/run/?label=NodejsConcepts&uri=https://raw.githubusercontent.com/marcelojrfarias/gostack-nodejs_fundamentals/master/insomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</h1>

### List the appointments
#### Request
- **Method:**
  ```
  GET
  ```
- **Endpoint:**
  ```
  /transactions
  ```
- **Route Parameters:**
  ```
  None.
  ```
- **Query Parameter:**
  ```
  None.
  ```
- **Headers:**
  ```
  None.
  ```
- **Body:**
  ```
  None.
  ```
#### Response
##### Success
- **Code:**
  ```
  200
  ```
- **Content:**
  ```json
  {
    "transactions": [
      {
        "id": "uuid",
        "title": "Salário",
        "value": 4000,
        "type": "income"
      },
      {
        "id": "uuid",
        "title": "Freela",
        "value": 2000,
        "type": "income"
      },
      {
        "id": "uuid",
        "title": "Pagamento da fatura",
        "value": 4000,
        "type": "outcome"
      },
      {
        "id": "uuid",
        "title": "Cadeira Gamer",
        "value": 1200,
        "type": "outcome"
      }
    ],
    "balance": {
      "income": 6000,
      "outcome": 5200,
      "total": 800
    }
  }
  ```

### Create a appointment
#### Request
- **Method:**
  ```
  POST
  ```
- **Endpoint:**
  ```
  /transactions
  ```
- **Route Parameters:**
  ```
  None.
  ```
- **Query Parameter:**
  ```
  None.
  ```
- **Headers:**
  ```
  None.
  ```
- **Body:**
  ```json
  {
    "id": "uuid",
    "title": "Salário",
    "value": 3000,
    "type": "income"
  }
  ```
#### Response
##### Success
- **Code:**
  ```
  200
  ```
- **Content:**
  ```json
  {
    "id": "73d72f83-8421-47d7-85a9-a34995b6b048",
    "provider": "Marcelo Farias",
    "date": "2020-04-22T23:00:00.000Z"
  }
  ```
##### Error
- **Code:**
  ```
  400
  ```
- **Content:**
  ```json
  {
    "error": "This appointment is already booked!"
  }
  ```

## :memo: License
This project is under the MIT license. See the [LICENSE](https://github.com/marcelojrfarias/gostack-nodejs_fundamentals/blob/master/LICENSE) for more information.

---

Made with 💗 by Marcelo Farias 👋 [Get in touch!](https://www.linkedin.com/in/marcelojrfarias/)

[nodejs]: https://nodejs.org/
[gostack]: https://rocketseat.com.br/bootcamp
[express]: https://expressjs.com/
[git]: https://git-scm.com
[yarn]: https://yarnpkg.com/
[vscode]: https://code.visualstudio.com/
[axios]: https://github.com/axios/axios
[reactjs]: https://reactjs.org/
[react-native]: https://reactnative.dev/
[editor-config]: https://editorconfig.org/
[typescript]: https://www.typescriptlang.org/
[eslint]: https://eslint.org/
[prettier]: https://prettier.io/
