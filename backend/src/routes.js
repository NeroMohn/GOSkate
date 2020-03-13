const {Router} = require('express');
// const axios = require('axios');
const Skater = require ('./models/Skater.js');

const routes = Router();

routes.post ('/skaters', async (request, response) => {
    const skater = request.body;
    console.log(skater);

    const tricksArray = skater.knownTricks.split(',').map(knownTricks => knownTricks.trim());

    const skaterReturn = await Skater.create({
        name : skater.name,
        userName:skater.userName,
        bio:skater.bio,
        avatarUrl:skater.avatarUrl,
        knownTricks : tricksArray 
    })
    
    return response.json (skaterReturn);
});

module.exports = routes;