export const login = () => {
  const signInContainer = document.createElement('div');
  signInContainer.classList.add('container');

  const signInTemplate = `
      <picture>
        <img id="logo" src="./img/LogoPetropolisSF.png" alt="logo">
      </picture>
      <div class="form-container-signIn">
        <form class="formContainer">
          <input class="inputForm" type="email" placeholder="Email" id="inputEmail">
          <input class="inputForm" type="password" placeholder="Contraseña" id="inputPassword">
          </form>
          <div>
          <button class="btnSignIn" id="btnSignIn" onclick="signInEmailPass()" >Iniciar Sesión</button>
          
          <div class="optionSignIn">
          <hr>
          <p>o</p>
          <hr>
          </div>
          
          <button class="btnGoogle" id="btnGoogle" type="submit" onclick="signInGoogle()"><img src="./images/google.png">Acceder con
 Google</button>

       <div >
       
    <a href="/" class="linkSign" > Regresar</a>
  </div>`;

  signInContainer.innerHTML = signInTemplate;

  return signInContainer;
};
