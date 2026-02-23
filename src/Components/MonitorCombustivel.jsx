import "/src/Components/CSS/transportadora.css";

function Transportadora() {

  function verificarTanque() {
    var nivel = Number(document.getElementById('input-litros').value);
    var painel = document.getElementById('visor');

    if (nivel < 20) {
      painel.innerText = "🔴 Alerta: Abasteça agora!";
    } else if (nivel <= 50) {
      painel.innerText = "🟡 Atenção: Nível médio.";
    } else {
      painel.innerText = "🟢 Tanque cheio. Boa viagem!";
    }
  }

  return (
    <div className="transportadora-container">
      <h2>Logística Transportadora - Nível de Combustível</h2>

      <div className="controle-combustivel">
        <input
          id="input-litros"
          type="number"
          placeholder="Litros no tanque"
          className="input-combustivel"
        />

        <button
          onClick={verificarTanque}
          className="btn-combustivel"
        >
          Verificar
        </button>
      </div>

      <h3 id="visor" className="status-combustivel">
        ---
      </h3>
    </div>
  );
}

export default Transportadora;