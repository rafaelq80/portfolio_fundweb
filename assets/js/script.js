let sobre = document.querySelector("#about");

const form = document.querySelector('#formulario');

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

async function getApiGithub() {
  try {
    const dadosPerfil = await fetch(
      "https:api.github.com/users/conteudoGeneration"
    );
    const perfil = await dadosPerfil.json();

    let conteudo = `
          <img src="${perfil.avatar_url}"
          alt="Foto do Perfil do Github - ${perfil.name}">
  
          <article id="sobre-texto"> <!-- Adicione aqui as CLASSES -->
          <h1>Quem sou eu?</h1>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam odit voluptates incidunt
              inventore rem error harum blanditiis accusamus vitae, minus fugit consequatur? Dolorum maiores magni
              deleniti modi sit laudantium totam!
          </p>
  
          <div id="sobre_github" class="sobre_github flex"> <!-- Adicione aqui as CLASSES -->
              <a class="botao" target="_blank" href="${perfil.html_url}">Github</a>
              <!-- Adicione aqui as CLASSES -->
              <p>${perfil.followers} Seguidores</p>
              <p>${perfil.public_repos} Repositórios</p>
          </div>
  
          </article>
      `;

    sobre.innerHTML += conteudo;
  } catch (error) {
    console.log(error);
  }
}

getApiGithub();

form.addEventListener('submit', function(event) {
  
  event.preventDefault();

  const campoNome = document.querySelector('#name');
  const txtNome = document.querySelector('#txtNome');

  if (campoNome.value.length < 3) {
    txtNome.innerHTML = 'O Nome deve ter no minimo 3 caracteres.';
    campoNome.focus();
    return;
  }else{
    txtNome.innerHTML = '';
  }

  const campoEmail = document.querySelector('#email');
  const txtEmail = document.querySelector('#txtEmail');

  if (campoEmail.value === '' && !email.value.match(regex)) {
    txtEmail.innerHTML = 'Digite um E-mail válido.';
    campoEmail.focus();
    return;
  }else{
    txtEmail.innerHTML = '';
  }

  const campoSubject = document.querySelector('#subject');
  const txtSubject = document.querySelector('#txtSubject');

  if (campoSubject.value.length < 5) {
    txtSubject.innerHTML = 'O Assunto deve ter no minimo 5 caracteres.';
    campoSubject.focus();
    return;
  }else{
    txtSubject.innerHTML = '';
  }

  form.submit();

});