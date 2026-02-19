import React from "react";
import "/src/Components/CSS/exec1.css";

function APIexec1() {
  function buscarGatinho() {
    var status = document.getElementById("status");
    var imagem = document.getElementById("foto-gato");

    status.innerText = "Buscando Gatinho na Nuvem...";

    fetch("https://api.thecatapi.com/v1/images/search")
      .then(function (resposta) {
        return resposta.json();
      })
      .then(function (dados) {
        var urlGato = dados[0].url;

        imagem.src = urlGato;
        imagem.style.display = "block";
        status.innerText = "Gatinho carregado com sucesso!";
      })
      .catch(function (erro) {
        status.innerText = "Ops! O mensageiro se perdeu.";
        console.error("Erro no fetch:", erro);
      });
  }

  return (
    <div className="api-container">
      <h2>API Externa: The Cat API</h2>

      <button onClick={buscarGatinho} className="btn-gato">
        Trazer Novo Gatinho
      </button>

      <p id="status" className="status">
        Aguardando comando...
      </p>

      <img id="foto-gato" src="" alt="Gato" className="imagem-gato" />
    </div>
  );
}

export default APIexec1;
