const switchThemeBtn = document.querySelector('.switch-theme-btn');
const pageWrapper = document.querySelector('.wrapper');
const darkThemeBtn = `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path d="M11 1C11 0.447715 11.4477 0 12 0C12.5523 0 13 0.447715 13 1V3C13 3.55228 12.5523 4 12 4C11.4477 4 11 3.55228 11 3V1Z" />\n<path fill-rule="evenodd" clip-rule="evenodd" d="M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12ZM8.06167 12C8.06167 14.1751 9.82492 15.9383 12 15.9383C14.1751 15.9383 15.9383 14.1751 15.9383 12C15.9383 9.82492 14.1751 8.06167 12 8.06167C9.82492 8.06167 8.06167 9.82492 8.06167 12Z"/>\n<path d="M20.4853 3.51472C20.0947 3.12419 19.4616 3.12419 19.0711 3.51472L17.6568 4.92893C17.2663 5.31946 17.2663 5.95262 17.6568 6.34315C18.0474 6.73367 18.6805 6.73367 19.0711 6.34315L20.4853 4.92893C20.8758 4.53841 20.8758 3.90524 20.4853 3.51472Z"/>\n<path d="M1 13C0.447715 13 0 12.5523 0 12C0 11.4477 0.447715 11 1 11H3C3.55228 11 4 11.4477 4 12C4 12.5523 3.55228 13 3 13H1Z" />\n<path d="M3.51472 3.51472C3.1242 3.90524 3.1242 4.53841 3.51472 4.92893L4.92894 6.34315C5.31946 6.73367 5.95263 6.73367 6.34315 6.34315C6.73368 5.95262 6.73368 5.31946 6.34315 4.92893L4.92894 3.51472C4.53841 3.12419 3.90525 3.12419 3.51472 3.51472Z"/>\n<path d="M11 21C11 20.4477 11.4477 20 12 20C12.5523 20 13 20.4477 13 21V23C13 23.5523 12.5523 24 12 24C11.4477 24 11 23.5523 11 23V21Z" />\n<path d="M6.34315 17.6569C5.95263 17.2663 5.31946 17.2663 4.92894 17.6569L3.51473 19.0711C3.1242 19.4616 3.1242 20.0948 3.51473 20.4853C3.90525 20.8758 4.53842 20.8758 4.92894 20.4853L6.34315 19.0711C6.73368 18.6805 6.73368 18.0474 6.34315 17.6569Z"/>\n<path d="M21 13C20.4477 13 20 12.5523 20 12C20 11.4477 20.4477 11 21 11H23C23.5523 11 24 11.4477 24 12C24 12.5523 23.5523 13 23 13H21Z"/>\n<path d="M17.6568 17.6569C17.2663 18.0474 17.2663 18.6805 17.6568 19.0711L19.0711 20.4853C19.4616 20.8758 20.0947 20.8758 20.4853 20.4853C20.8758 20.0948 20.8758 19.4616 20.4853 19.0711L19.0711 17.6569C18.6805 17.2663 18.0474 17.2663 17.6568 17.6569Z"/>\n</svg>`;
const lightThemeBtn = `<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.39703 11.6315C2.39703 16.602 6.42647 20.6315 11.397 20.6315C14.6858 20.6315 17.5656 18.8664 19.1358 16.23C15.7285 17.3289 11.6922 16.7548 8.98282 14.0455C6.25201 11.3146 5.72603 7.28415 6.86703 3.89293C4.20697 5.47927 2.39703 8.38932 2.39703 11.6315ZM20.187 13.5851C21.0125 13.1021 22.255 13.6488 22 14.5706C20.7144 19.2187 16.4543 22.6315 11.397 22.6315C5.3219 22.6315 0.397034 17.7066 0.397034 11.6315C0.397034 6.58874 3.93533 2.25845 8.61528 0.999986C9.53934 0.751502 10.0645 1.99378 9.56405 2.80935C7.70026 5.84656 7.83194 10.0661 10.397 12.6312C12.9319 15.1662 17.1365 15.3702 20.187 13.5851Z" fill="#0F0F0F"/>
</svg>`;

switchThemeBtn.addEventListener('click', switchTheme);

function switchTheme() {
    if(pageWrapper.classList.value == 'wrapper darken') {
        pageWrapper.classList.toggle('lighten');
        switchThemeBtn.innerHTML = lightThemeBtn;
    } else { 
        pageWrapper.classList.toggle('lighten'); 
        switchThemeBtn.innerHTML = darkThemeBtn;
    }
}

const taskList = document.querySelector('.task__list');
const taskItem = document.querySelectorAll('.task__list-item');
const addTaskBtn = document.querySelector('.main-section__btn');
const inputTextTask = document.querySelector('.main-section__input');
const checkImage = `<svg class="check-btn__svg" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22.7048 4.95406C22.3143 4.56353 21.6811 4.56353 21.2906 4.95406L8.72696 17.5177C8.33643 17.9082 7.70327 17.9082 7.31274 17.5177L2.714 12.919C2.32348 12.5284
 1.69031 12.5284 1.29979 12.919C0.909266 13.3095 0.909265 13.9427 1.29979 14.3332L5.90392 18.9289C7.07575 20.0986 8.97367 20.0978 10.1445 18.9271L22.7048 6.36827C23.0953 5.97775 23.0953 5.34458 22.7048 4.95406Z"/>
</svg>`;
addTaskBtn.addEventListener('click', addTask);

function addTask() {
    let textTask = inputTextTask.value;
    console.log(textTask)
    const taskItemHTML = `<li class="task__list-item"><button class="task__check-btn">${checkImage}</button><span class="task__text-task">${textTask}</span><button class="task__delete-btn">
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.53113 1C5.52364 1 3.19671 3.63591 3.56974 6.62017L5.28873 20.3721C5.47639 21.8734 6.7526 23 8.26557 23H15.7344C17.2474
    23 18.5236 21.8734 18.7113 20.3721L20.4303 6.62017C20.8033 3.63591 18.4764 1 15.4689 1H8.53113ZM5.70148 5C6.11066 3.8455 7.21175 3 8.53113 3H15.4689C16.7883 3 17.8893 3.8455
    18.2985 5H5.70148ZM5.63279 7L7.27329 20.124C7.33584 20.6245 7.76124 21 8.26557 21H15.7344C16.2388 21 16.6642 20.6245 16.7267 20.124L18.3672 7H5.63279Z"/>
    <path d="M15.002 10.998C14.6114 10.6075 13.9783 10.6075 13.5878 10.998L12 12.5858L10.4201 11.0058C10.0296 10.6153 9.3964 10.6153 9.00587 11.0058C8.61535 11.3964 8.61535 12.0295
    9.00587 12.4201L10.5858 14L9.00001 15.5858C8.60949 15.9763 8.60949 16.6095 9.00001 17C9.39054 17.3905 10.0237 17.3905 10.4142 17L12 15.4142L13.5878 17.0019C13.9783 17.3925 14.6114
    17.3925 15.002 17.0019C15.3925 16.6114 15.3925 15.9782 15.002 15.5877L13.4142 14L15.002 12.4123C15.3925 12.0217 15.3925 11.3886 15.002 10.998Z"/>
    </svg></button></li>`;
    taskList.insertAdjacentHTML("beforeend", taskItemHTML);
    cleanForm();
}

function cleanForm() {
    inputTextTask.value = '';
}
const checkTaskBtn = document.querySelectorAll('.task__check-btn');

taskList.addEventListener('click', deleteTask);

taskList.addEventListener('click', doneTask);

function deleteTask(event) {
    if(event.target.classList.value == 'task__delete-btn') {
        const listItem = event.target.closest('.task__list-item');
        listItem.remove();
    }
}

function doneTask(event) {
    if(event.target.classList.value == 'task__check-btn') {
        const doneCheckImg = event.target.querySelector('.check-btn__svg');
        console.log(doneCheckImg)
        doneCheckImg.classList.toggle('check-btn__svg--done');
        // console.log(event.target.closest('.task__list-item'))
        const listItem = event.target.closest('.task__list-item');
        const textTask = listItem.querySelector('.task__text-task');
        textTask.classList.toggle('task__text-task--done');
    }
}




