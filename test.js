const { insertPrevisione, getPrevisione, updatePrevisione, listPrevisioni, deletePrevisione } = require("./dao/previsione.dao");

async function run() {
  const previsioneId = await insertPrevisione({
    previsione: 'nuvoloso',
    temperatura: 23.5,
    umidita: 23,
    uv: 44,
    data: '2023-04-23',
    fascia_oraria: '16-18',
    provincia: 'MC'
  });
  console.log(previsioneId);
  const previsione = await getPrevisione({ id: previsioneId });
  console.log(previsione);
  const aggiornati = await updatePrevisione({ temperatura: 24 }, { id: previsione.id });
  console.log(aggiornati);
  const previsioneAggiornata = await getPrevisione({ id: previsioneId });
  console.log(previsioneAggiornata);
  const previsioni = await listPrevisioni({ data: previsione.data });
  console.log(previsioni);
  const cancellate = await deletePrevisione({ id: previsione.id });
  console.log(cancellate)
}

run();

/*
  "previsione": "nuvoloso",
    "temperatura": 23.5,
    "umidita": 23,
    "uv": 44,
    "data": "2023-04-23",
    "fascia_oraria": "16-18",
    "provincia": "MC"
*/