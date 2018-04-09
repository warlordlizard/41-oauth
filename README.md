![cf](https://i.imgur.com/7v5ASc8.png) Lab 41: OAuth - Part 1
======

## Submission Instructions
* Work in a fork of this repository
* Work in a branch on your fork
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* Open a pull request to this repository
* Submit on canvas a question and observation, how long you spent, and a link to your pull request

## Feature Tasks
##### Minimum Requirements

### Configure the Backend
* create an "app" in the Google Developer console
  * configure OAuth credentials to support a client application that lives on `http://localhost`
  * configure OAuth credentials to support a server redirect URI to `http://localhost:3000/oauth/google/code`
* create a backend route for a **GET** request to `/oauth/google/code` for handling Google OAuth