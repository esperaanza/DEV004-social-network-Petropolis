export const home = () => {
  //* Aqui estamos creando lo que va en HTML.
  const signInContainer = document.createElement('div');
  signInContainer.classList.add('container');

  const signInTemplate = `
        <picture>
          <img id="Logo" src="./img/LogoPetropolisSF.png" alt="logo">
        </picture>
        <div class="form-container-home"> 
        <form class="formContainer">     
           <a  href="/login" class="linkSign" >Inicia Sesión </a> 
            <div class="optionSignIn">
            <hr>
            <p>o</p>
            <hr>
            </div>
             
         <a href="/registerPage" class="linkSign"  > Registrate</a>
        </form>
         <br>
         <br>
         <p  >  AM <img src="./img/HUELLA-PhotoRoom.png" alt="h"> LOS ANIMALES </p> 
         </div>`;

  signInContainer.innerHTML = signInTemplate;

  return signInContainer;
};
