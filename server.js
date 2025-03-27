const express = require("express");
const cep = require("cep-promise");

const app = express();

app.get("/cep/:cep", async (req, res) => {
    const { cep: cepNumero } = req.params;
    const resultado = await cep(cepNumero);
    res.json(resultado);

});

app.listen(3200);
