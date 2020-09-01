
<h1 align="center">Dailyctionary</h1>

<p  align="center">
  <a  href="https://www.linkedin.com/in/luan-souza-6b07b1171/">
    <img  alt="Luan Souza"  src="https://img.shields.io/badge/-Luan Souza-275DAD?style=for-the-badge&logo=Linkedin&logoColor=white"  />
  </a>

  <img  alt="Repository size"  src="https://img.shields.io/github/repo-size/LuanSilveiraSouza/dailyctionary?color=275DAD&style=for-the-badge">

  <a  href="https://github.com/LuanSilveiraSouza/node-simple-crud/commits/master">
    <img  alt="GitHub last commit"  src="https://img.shields.io/github/last-commit/LuanSilveiraSouza/dailyctionary?color=275DAD&style=for-the-badge">
  </a>

  <img  alt="License"  src="https://img.shields.io/badge/license-MIT-275DAD?&style=for-the-badge">
</p>

# :pushpin: Sumary

* [Introduction](#paperclip-introduction)
* [Technologies](#computer-technologies)
* [How to Run](#rocket-how-to-run)
* [Bugs and Issues](#bug-bugs-and-issues)
* [Contributing](#man_mechanic-contributing)
* [License](#books-license)

# :paperclip: Introduction

Dailyctionary is a bot to scrap random words from dictionaries and send their meanings by e-mail. 
I designed this project because I wanted to improve my Spanish vocabulary with a passive way and without deeply studying. 

# :computer: Technologies

* [Node.js](https://nodejs.org/en/)
* [Typescript](https://www.typescriptlang.org/)
* [ESLint](https://eslint.org/)
* [Jest](https://jestjs.io/)
* [Nodemailer](https://nodemailer.com/about/)
* [Puppeteer](https://pptr.dev/)

# :rocket: How to Run

```bash
# Clone Repository
$ git clone https://github.com/LuanSilveiraSouza/dailyctionary.git
```

### Run Bot

```bash
# Go to folder
$ cd dailyctionary

# Install Packages
$ npm install

# See .example.env and create a .env file with your credentials to nodemailer 
$ touch .env

# Run Application
$ npm start

# Run Tests
$ npm test
```

# :bug: Bugs and Issues

Feel free to open new issues and colaborate with others issues in [Dailyctionary Issues](https://github.com/LuanSilveiraSouza/dailyctionary/issues)

# :man_mechanic: Contributing

There are many forms to contribute with the project, first of all you can give this github repo a Star.

If you want do help with the code follow the steps bellow

```bash
# Fork this Repository https://github.com/LuanSilveiraSouza/dailyctionary.git

# Clone your fork
$ git clone {your-fork-url}
$ cd dailyctionary

# Create a branch with your feature
$ git checkout -b {branch-name}

# Make the commit with your changes
$ git commit -m 'Feat: {feature-name}'

# Send the code to your remote branch
$ git push origin {branch-name}
```
Then send a Pull Request that will be analyzed and approved if it helps with the project.

Currently the bot only have implemented it flow for Spanish Language, but I designed thinking to support for other languages in future additions. If you really want to contribute, consider that the primarly objective of this project!

# :books: License

Released in 2020 under [MIT License](https://opensource.org/licenses/MIT)

Made with :heart: by Luan Souza.