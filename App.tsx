import React from 'react';
import { Text, View } from 'react-native';
import LoginCliente from './src/login/LoginCliente';
import LoginAdm from './src/login/LoginAdm';
import LoginServico from './src/login/LoginProfissional';
import CadastroCliente from './src/cadastros/cadastroCliente';
import CadastroProfisisonais from './src/cadastros/cadastroProfissionais';
import CadastroServico from './src/cadastros/cadastroServico';
import CadastroAdm from './src/cadastros/cadastroAdm';
import CadastroAgenda from './src/cadastros/cadastroAgenda';
import CadastroPagamento from './src/cadastros/cadastroPagamento';


function App(): JSX.Element {

    return (
      
     // <LoginCliente />

     // <LoginAdm />

     // <LoginServico />

      // <CadastroCliente />
    
     <CadastroProfisisonais />

      // <CadastroServico />

     // <CadastroAdm />

    // <CadastroAgenda />

    // <CadastroPagamento />




      
    );
}

export default App;