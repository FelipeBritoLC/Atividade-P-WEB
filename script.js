const usuarios = [
    { nome: 'Ana', idade: 25, cpf: '123.456.789-00' },
    { nome: 'Carla', idade: 30, cpf: '987.654.321-00' },
    { nome: 'Trísia', idade: 28, cpf: '456.789.123-00' }
  ];
  
  const listaUsuariosElement = document.getElementById('listaUsuarios');
  
  for (let usuario of usuarios) {
      inserirUsuarioNaLista(usuario);
  }
  
  function inserirUsuario() {
      const nome = document.querySelector('#nome').value;
      const idade = document.querySelector('#idade').value;
      const cpf = document.querySelector('#cpf').value;
  
      if (nome && idade && cpf) {
          const novoUsuario = { nome, idade, cpf };
          inserirUsuarioNaLista(novoUsuario);
      } else {
          alert("Por favor, preencha todos os campos!");
      }
  }
  
  function inserirUsuarioNaLista(usuario) {
      const liElement = document.createElement('li');
  
      const nomeElement = document.createElement('p');
      nomeElement.textContent = `Nome: ${usuario.nome}`;
      
      const idadeElement = document.createElement('p');
      idadeElement.textContent = `Idade: ${usuario.idade}`;
      
      const cpfElement = document.createElement('p');
      cpfElement.textContent = `CPF: ${usuario.cpf}`;
  
      const botaoRemoverElement = document.createElement('button');
      botaoRemoverElement.textContent = 'Remover';
      botaoRemoverElement.addEventListener('click', () => {
          liElement.remove();
      });
  
      liElement.appendChild(nomeElement);
      liElement.appendChild(idadeElement);
      liElement.appendChild(cpfElement);
      liElement.appendChild(botaoRemoverElement);
  
      listaUsuariosElement.appendChild(liElement);
  }
  
