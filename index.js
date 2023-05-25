const express = require('express')
const bodyParser = require('body-parser');
const { initStruct } = require('./init-struct');
const { insertPrevisione, listPrevisioni, getPrevisione, updatePrevisione, deletePrevisione  } = require("./previsione.dao");
const port = 3000;

const app = express();

app.use(bodyParser.json());

app.post('/Previsione', async (req,res) => {
    const forecast = {
        previsione : req.body.previsione,
        temperatura : req.body.temperatura,
        umidita : req.body.umidita,
        uv : req.body.uv,
        data : req.body.data,
        fascia_oraria : req.body.fascia_oraria,
        provincia : req.body.provincia
    }
    const newForecast = await insertPrevisione(forecast);
    res.end();
})

app.get('/Previsione/:provincia', async (req,res) => {
    const lista = await listPrevisioni({
        provincia : req.params.provincia
    })
    res.json(lista);
})

app.delete('/Previsione/del/:provincia', async (req,res) => {
    const deletee = await deletePrevisione({
        provincia : req.params.provincia
    })
    res.end();
})

app.put('/Previsione/modifica', async(req,res) => {

})

initStruct().then(
    () => app.listen(port)
  );