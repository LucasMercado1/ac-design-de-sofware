var tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

function criarItem(texto) {
    var li = document.createElement('li');
    li.textContent = texto;

    li.onclick = function() { li.classList.toggle('concluido'); };

    var btn = document.createElement('button');
    btn.textContent = 'X';
    btn.onclick = function() {
        li.remove();
        tarefas.splice(tarefas.indexOf(texto), 1); 
        localStorage.setItem('tarefas', JSON.stringify(tarefas)); 
    };

    li.appendChild(btn);
    document.getElementById('lista').appendChild(li);
}

tarefas.forEach(criarItem);

// Botão Adicionar
document.getElementById('btn-adicionar').onclick = function() {
    var campo = document.getElementById('nova-tarefa');
    
    if (campo.value.trim() !== '') {
        tarefas.push(campo.value);
        localStorage.setItem('tarefas', JSON.stringify(tarefas)); 
        
        criarItem(campo.value);
        campo.value = ''; 
    }
};
