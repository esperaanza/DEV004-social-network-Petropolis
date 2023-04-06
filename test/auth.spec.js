/**
 * @jest-environment jsdom
 */

// importamos la funcion que vamos a testear
import { signUp } from '../src/pages/Signup.js';
import { Login } from '../src/pages/Login.js';
import { login } from '../src/firebase/auth.js';
import { Welcome } from '../src/pages/Welcome.js';

jest.mock('../src/router.js');
jest.mock('../src/firebase/auth.js');
// jest.mock('../src/firebase/auth.js', () => ({
//   login: jest.fn(),
// }));

describe('Los test del signup', () => {
  it('debería ser una función', () => {
    expect(typeof signUp).toBe('function');
  });

  it('deberia mostrar el formulario de signup correctamente', () => {
    const root = document.createElement('div');
    root.id = 'root';

    root.append(signUp());
    const signupForm = root.querySelector('#signup-form');
    const username = root.querySelector('#singup-name');
    const lastname = root.querySelector('#singup-lastname');
    const email = root.querySelector('#singup-email');
    const password = root.querySelector('#singup-password');
    const submit = root.querySelector('.submit');

    expect(signupForm).not.toBe(null);
    expect(username).not.toBe(null);
    expect(lastname).not.toBe(null);
    expect(email).not.toBe(null);
    expect(password).not.toBe(null);
    expect(submit).not.toBe(null);

    document.body.append(root);
  });
});

describe('Login', () => {
  it('deberia mostrar el formulario de login correctamente', () => {
    const root = document.createElement('div');
    root.id = 'root';

    root.append(Login());

    const loginForm = root.querySelector('#login-form');
    const email = root.querySelector('#login-email');
    const password = root.querySelector('#login-password');
    const submit = root.querySelector('#log');

    expect(loginForm).not.toBe(null);
    expect(email).not.toBe(null);
    expect(password).not.toBe(null);
    expect(submit).not.toBe(null);

    document.body.append(root);
  });
});

describe('Los test del login', () => {
  test('Existe el boton de crear cuenta', () => {
    const elemento = Login();
    const boton = elemento.querySelector('#log');
    expect(boton).not.toBeNull();
  });

  test('Snapshot del LOGIN', () => {
    expect(login()).toMatchSnapshot();
  });
});

describe('welcome', () => {
  it('deberia mostrar welcome correctamente', () => {
    const root = document.createElement('div');
    root.id = 'root';

    root.append(Welcome());

    const welcome = root.querySelector('.welcome');
    expect(welcome).not.toBe(null);

    document.body.append(root);
  });
});
