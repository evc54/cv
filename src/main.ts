import App from './App.svelte';

const target = document.getElementById('app'); 
target.innerHTML = '';
const app = new App({ target });

export default app;
