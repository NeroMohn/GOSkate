const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.send("Hello :3");
});

//Para controle no localhost
app.listen(3333);