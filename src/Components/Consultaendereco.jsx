import "/src/Components/CSS/cep.css";
function Consultaendereco() {

function BuscaCep() {
    let cepdigitado = document.getElementById("input-cep").value;
    let log = document.getElementById("status-cep");
    let resultado = document.getElementById("resultado-cep");

    // limpar resultados anteriores e dar retorno
    log.innerText = "Consultando correios...";
    resultado.innerHTML = "";

    let url = "https://viacep.com.br/ws/" + cepdigitado + "/json/";

    fetch(url)
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(dados){
        if(dados.erro){
            log.innerText = "Ops! CEP não encontrado.";
        } else {
            log.innerText = "CEP encontrado com sucesso!";
            resultado.innerHTML = 
                "<strong>Cidade:</strong> " + dados.localidade + "<br>" +
                "<strong>Estado:</strong> " + dados.uf + "<br>" +
                "<strong>Bairro:</strong> " + dados.bairro;
        }
    })
    .catch(function(erro){
        log.innerText = "Erro na consulta. Tente novamente.";
        console.error("Erro no fetch:", erro);
    });
}

return (
    <div className="consulta-cep-container">
        <h2>Consulta de Endereço por CEP</h2>
        <input type="text" id="input-cep" placeholder="Digite o CEP" className="input-cep"/>
        <button onClick={BuscaCep} className="btn-consulta">Consultar</button>
        <p id="status-cep" className="status-cep">Aguardando consulta...</p>
        <div id="resultado-cep" className="resultado-cep"></div>
    </div>
);
}

export default Consultaendereco;
