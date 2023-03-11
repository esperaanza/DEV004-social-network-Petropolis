export const home = () => {
  //* Aqui estamos creando lo que va en HTML.
  const signInContainer = document.createElement('div');
  signInContainer.classList.add('container');

  const signInTemplate = `
        <picture>
          <img id="Logo" src="./img/LogoPetropolisSF.png" alt="logo">
        </picture>
        <div class="form-container-home"> 
               
          <button class="btnSignIn" id="btnSignIn" onclick="signInEmailPass()" >Iniciar Sesión</button>
            
            <div class="optionSignIn">
            <hr>
            <p>o</p>
            <hr>
            </div>
            
            <button class="btnGoogle" id="btnGoogle" type="submit" onclick="signInGoogle()"><img src="./img/BtnGoogle.png">Acceder con
   Google</button>
  
         <div >
         <p  >No tienes una cuenta?</p> 
         <button class="btnSignIn" id="btnSignIn" onclick="signInEmailPass()" >Iniciar Sesión</button> 
         <a href="/signUp" class="linkSign" > Registrate</a>
         </div>`;

  signInContainer.innerHTML = signInTemplate;

  return signInContainer;
};
