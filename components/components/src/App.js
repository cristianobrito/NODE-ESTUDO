 import React from 'react';
//import Produto from './components/Produto'

const App = () => {

  // estado que recebr dados e mostrar na tela
  const [dados, setDados] = React.useState(null)


  async function handleClick({target}){
      // pegando o texto que está no botao
      let nomeProduto = target.innerText
      // puxando dados de uma APi externa
      const produtoResponse = await fetch(``)
      // trasformando objeto
      const produtoJson = await produtoResponse.json()

      // colocando o obbjeto dentro da constante 'dados'
      setDados(produtoJson)
  }


  return (
    <div>
        <button onClick={handleClick}>
              Smartphone
        </button>

        <button onClick={handleClick}>
              Notebook
        </button>


        {/* mesma coisa do de baixo, porem maior */}
        {/* {dados ? <Produto dados={dados}/> : null} */}

        {/* se existir dados, enviar para o componente 'Produto', se nao, não mostrar nada */}
      
    </div>
  )
}

export default App

