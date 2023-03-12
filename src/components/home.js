export const home = () => {
  //* Aqui estamos creando lo que va en HTML.
  const signInContainer = document.createElement('div');
  signInContainer.classList.add('container');

  const signInTemplate = `
        <picture>
          <img id="Logo" src="./img/LogoPetropolisSF.png" alt="logo">
        </picture>
        <div class="form-container-home"> 
               
           <a  href="/login" class="linkSign" >Iniciar Sesión </a> 
            <div class="optionSignIn">
            <hr>
            <p>o</p>
            <hr>
            </div>
            
           
       
         <a id="h" href="/registerPage" class="linkSign" alt="h" > Registrate</a>
         <br>
         <br>
         <p  >  AM <img src="./img/HUELLA-PhotoRoom.png"> LOS ANIMALES </p> 
         </div>`;

  signInContainer.innerHTML = signInTemplate;

  return signInContainer;
};
