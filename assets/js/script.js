const sobre = document.querySelector("#about");

async function getApiGithub() {
  try {
    const dadosPerfil = await fetch(
      "https://api.github.com/users/conteudoGeneration"
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