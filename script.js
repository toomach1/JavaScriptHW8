// Создать в html список состоящий из 3-х произвольных элементов li

const buttonAdd = document.createElement('button');
buttonAdd.textContent = 'добавить';

const buttonDelete = document.createElement('button');
buttonDelete.textContent = 'удалить';

const buttonToggle = document.createElement('button');
buttonToggle.textContent = 'добавить/удалить класс';

document.querySelector('body');
document.body.append(buttonAdd);
document.body.append(buttonDelete);
document.body.append(buttonToggle);

// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”

const addNewElement = () => {
    const li = document.createElement('li');
    li.textContent = 'новый элемент списка';
    document.querySelector('ul').appendChild(li);
}
buttonAdd.addEventListener('click', addNewElement);


// Создать кнопку, которая будет удалять первый элемент из созданного списка

const deleteEl = () => {
    if (document.querySelector('li')) {
        document.querySelector('li').remove();
    }
}
buttonDelete.addEventListener('click', deleteEl);

// Создать кнопку, при клике на которую ей добавляется-убирается класс “click”

buttonToggle.addEventListener('click', (e) => {
    e.target.classList.toggle('click');
})