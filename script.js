const firebaseConfig = {
  apiKey: "AIzaSyCtR7I8S7mkxoN7NXWGzKBjvg4luwiqaDI",
  authDomain: "aquaclean-14.firebaseapp.com",
  projectId: "aquaclean-14",
  storageBucket: "aquaclean-14.appspot.com",
  messagingSenderId: "823179130573",
  appId: "1:823179130573:web:4c9055b55def59e2a65b84"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form-content');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('mail').value;
    const senha = document.getElementById('senha').value;

    const isCadastro = window.location.pathname.includes('cadastro.html');
    const isLogin = window.location.pathname.includes('login.html');

    try {
      if (isCadastro) {
        await auth.createUserWithEmailAndPassword(email, senha);
        alert('Usuário cadastrado com sucesso!');
        window.location.href = 'main.html';
      }

      if (isLogin) {
        await auth.signInWithEmailAndPassword(email, senha);
        alert('Login realizado com sucesso!');
        window.location.href = 'main.html';
      }
    } catch (error) {
      alert(`Erro: ${error.message}`);
    }
  });
});