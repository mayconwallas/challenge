const items = document.querySelectorAll('li');
const checkbox = document.querySelector('#todo-list input[type="checkbox"]');
const lista = document.getElementById('lista-tarefas');
const limparBotao = document.getElementById('limpar-lista');

items.forEach(item => {
  item.addEventListener('click', () => item.classList.toggle('done'));
});

checkbox.addEventListener('change', () => {
  const checked = checkbox.checked;
  const title = `Tarefa ${checked ? 'concluída' : 'pendente'}`;
  const url = window.location.href;
  window.history.pushState({ checked }, title, url);
  checkbox.parentElement.classList.toggle('checked', checked);
});

limparBotao.addEventListener('click', () => {
  lista.innerHTML = '';
  window.history.replaceState(null, null, window.location.pathname);
});
