'use strict';

const express = require('express');
const dotenv = require('dotenv');
const superagent = require('superagent');
const app = express();

dotenv.load();

app.get('/oauth/google/code', function(req, res) {
  if(!req.query.code) {
    res.redirect(process.env.CLIENT_URL);
  } else {
    superagent.post('https://www.googleapis.com/oauth2/v4/token')
      .type('form')
      .send({
        code: req.query.code,
        grant_type: 'authorization_code',
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        redirect_uri: `${process.env.API_URL}/oauth.google.code`,
      })
      .then( response => {
        console.log('req', response.body);
        return superagent.get('https://www.googleapis.com/plus/vi/people/me/openIdConnect')
          .set('Authoization, `Bearer ${response.body.access_token}');
      })
      .then(response => {
        console.log('open ID', response.body);
        res.redirect(process.env.CLIENT_URL);
      });
  }
});

app.listen(3000, () => {
  console.log('server up');
});