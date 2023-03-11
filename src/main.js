// Este es el punto de entrada de tu aplicacion
import { myFunction } from './lib/index.js';
import { home } from './components/home.js';
import { registerPage } from './components/register.js';
import { login } from './components/login';
import { timeline } from './components/timeline';

const rootDiv = document.getElementById('root');
myFunction();
// objeto de las rutas
const routes = {
  '/': home(),
  '/registerPage': registerPage(),
  '/login': login(),
  '/timeline': timeline(),
};

// permite navegar atraves de las ruta
export const onNavigate = (pathname, paramRoutes = routes) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  document.getElementById('root').replaceChildren(paramRoutes[pathname]);
};

// permite utilizar flechas del navegador
window.onpopstate = () => {
  rootDiv.replaceChildren(routes[window.location.pathname]);
};

window.addEventListener('load', () => {
  // console.log('rutas', window.location.pathname)
  onNavigate(window.location.pathname);
});
