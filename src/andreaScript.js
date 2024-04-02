/*function verificaRegione() {
  

  let mioInput = document.getElementById("mioInput");
  let citta = mioInput.value;

  if (citta == "roma") {
    alert("Roma e' il capoluogo del Lazio e la capitale d'Italia");
  } else if (citta == "milano") {
    alert("Milano e' il capoluogo della Lombardia");
  } else if (citta == "torino") {
    alert("Torino e' il capoluogo del Piemonte");
  } else if (citta == "napoli") {
    alert("Napoli e' il capoluogo della Campania");
  } else if (citta == "bari") {
    alert("Bari e' il capoluogo della Puglia")
  } else if (citta == "trieste") {
    alert("Trieste e' il capoluogo del Friuli-Venezia-Giulia")
  } else if (citta == "bologna") {
    alert("Bologna e' il capoluogo dell'Emilia-Romagna")
  } else if (citta == "aquila") {
    alert("Aquila e' il capoluogo del Abruzzo")
  } else if (citta == "matera") {
    alert("Matera e' il capoluogo della Basilicata")
  } else if (citta == "ancona") {
    alert("Ancona e' il capoluogo delle Marche")
  } else if (citta == "cagliari") {
    alert("Cagliari e' il capoluogo della Sardegna")
  } else if (citta == "firenze") {
    alert("Firenze e' il capoluogo della Toscana")
  } else if (citta == "palermo") {
    alert("Palermo e' il capoluogo della Sicilia")
  } else if (citta == "perugia") {
    alert("Perugia e' il capoluogo dell'Umbria")
  } else if (citta == "aosta") {
    alert("Aosta e' il capoluogo della Valle-d'Aosta")
  } else if (citta == "venezia") {
    alert("Venezia e' il capoluogo del Veneto")
  } else if (citta == "trento") {
    alert("Trento e' il capoluogo del Trentino-Alto-Adige")
  } else if (citta == "campobasso") {
    alert("Campobasso e' il capoluogo del Molise")
  } else if (citta == "reggio calabria") {
    alert("Reggio-Calabria e' il capoluogo del Calabria")
  } else if (citta == "genova") {
    alert("Genova e' il capoluogo del Liguria")
  } else {
    alert("Non e' un capoluogo di una regione Italiana")
  }console.log(citta);
}*/

function verificaRegione() {
  const cittaRegioni = {
    roma: "Lazio",
    milano: "Lombardia",
    torino: "Piemonte",
    napoli: "Campania",
    bari: "Puglia",
    trieste: "Friuli-Venezia Giulia",
    bologna: "Emilia-Romagna",
    aquila: "Abruzzo",
    matera: "Basilicata",
    ancona: "Marche",
    cagliari: "Sardegna",
    firenze: "Toscana",
    palermo: "Sicilia",
    perugia: "Umbria",
    aosta: "Valle d'Aosta",
    venezia: "Veneto",
    trento: "Trentino-Alto Adige",
    campobasso: "Molise",
    reggio_calabria: "Calabria",
    genova: "Liguria"
  };

  let mioInput = document.getElementById("mioInput");
  let citta = mioInput.value.toLowerCase();

  let regione = cittaRegioni[citta];

  if (regione) {
    alert(`${citta} e' il capoluogo della ${regione}`);
  } else {
    alert("Non è un capoluogo di una regione italiana");
  }

  console.log(citta);
}