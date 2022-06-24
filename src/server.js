const express = require ('express')

const app = express();

app.get('/message/:id/:user', ( request, response) => {
    response.send(`
    mensagem ID: ${request.params.id}
    mensagem USER: ${request.params.user}
    `);
});

const PORT = 3000;

app.listen(PORT, () => console.log(`server online ${PORT}`) );