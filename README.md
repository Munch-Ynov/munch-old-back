<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Api_netflix_wish" />

  &#xa0;
</div>

<h1 align="center">Api_netWish</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/MrBartou/api_netwish?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/MrBartou/api_netflix_wish?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/MrBartou/api_netflix_wish?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/MrBartou/api_netflix_wish?color=56BEB8">

</p>

 <h4 align="center">
	🚧  Api_netWish 🚀 V2  🚧
</h4><hr>

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0;
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/{{YOUR_GITHUB_USERNAME}}" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

API de recomendation de films et de séries, basé sur les sorties en Salle et sur les meilleurs notes sur TMDB.

## :sparkles: Features ##

:heavy_check_mark: Possibilité de créer un compte;\
:heavy_check_mark: Listing de 10 films et 10 séries en rapport avec les dernières sorties;\
:heavy_check_mark: Recommendation des 30 meilleurs films et séries;\

## :robot: Technologies ##

The following tools were used in this project:

- [Node.JS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [OpenAPI](https://www.openapis.org/)
- [Redis](https://redis.io/)
- [Axios](https://axios-http.com/fr/docs/intro)
- [Jest](https://jestjs.io/fr/)
- [Super-Test](https://www.npmjs.com/package/supertest)
- [Sequelize](https://sequelize.org/)
- [JWT](https://jwt.io/)

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com), [Node](https://nodejs.org/en/)  and [Redis](https://redis.io/) installed.

## :notebook: Note for API ##

You can know all routes of the API with the documentation in the address : http://localhost:3000/api-docs/

Before you start the projet, you need to stop mysql and redis server on your computer. Because they bind the port 3306 and 6379.

You don't need to install the database, it's already in the docker-compose.yml file.

Before you use the API, you need to create a user with the route : http://localhost:3000/users/ and login with the route : http://localhost:3000/users/ login/
## :checkered_flag: Starting with docker ##

```bash
# Clone this project
$ git clone https://github.com/MrBartou/api_netflix_wish

# Access
$ cd api_netwish

# Launch the helper
$ ./launch.sh

# The server will initialize in the <http://localhost:3000>
```

## :pushpin: Options for launcher ##
For launch the production use the option 1

For launch the test use the option 2

For clean the project use the option 3

## :man_judge: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.

## :technologist: Author ##

Made with :heart: by <a href="" target="_blank">Philippe VILARINHO, Maceo BASSE, Anthony DENIN</a>

&#xa0;

<a href="#top">Back to top</a>
