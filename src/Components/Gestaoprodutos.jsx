import { listaProdutos } from "../assets/Dados/data";
import "/src/Components/CSS/gestao.css";
function GestaoProdutos() {

  const verificarDisponibilidade = (quantidade) => {
    let mensagem = "";

    if (quantidade === 0) {
      mensagem = "Item indisponível no momento";
    } else if (quantidade < 5) {
      mensagem = "Atenção: Poucas unidades restantes";
    } else {
      mensagem = "Produto em estoque";
    }

    return mensagem;
  };

  const formatarCategoria = (cat) => {
    let textoFormatado = "";

    if (cat === "Periféricos") {
      textoFormatado = "Setor de Hardware e Entrada";
    } else if (cat === "Vídeo") {
      textoFormatado = "Setor de Monitores e Telas";
    } else {
      textoFormatado = "Setor Geral";
    }

    return textoFormatado;
  };

  if (!listaProdutos || listaProdutos.length === 0) {
    return (
      <div className="gestao-container aviso-container">
        <h1 className="gestao-titulo">Aviso</h1>
        <p className="gestao-aviso-texto">
          Não existem produtos cadastrados.
        </p>
      </div>
    );
  }

  return (
    <div className="gestao-container">
      <h1 className="gestao-titulo">Painel de Inventário</h1>

      {listaProdutos.map((item) => (
        <div key={item.id} className="produto-card">
          <h3 className="produto-nome">
            Produto: {item.nome}
          </h3>

          <ul className="produto-lista">
            <li className="produto-item">
              <span className="label">Quantidade:</span> {item.estoque}
            </li>
            <li className="produto-item">
              <span className="label">Status:</span>{" "}
              {verificarDisponibilidade(item.estoque)}
            </li>
            <li className="produto-item">
              <span className="label">Localização:</span>{" "}
              {formatarCategoria(item.categoria)}
            </li>
          </ul>

          <hr className="produto-divisor" />
        </div>
      ))}
    </div>
  );
}

export default GestaoProdutos;