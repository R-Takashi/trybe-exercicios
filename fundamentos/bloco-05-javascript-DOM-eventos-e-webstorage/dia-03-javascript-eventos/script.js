function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

 function addDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let ulContainer = document.querySelector('#days');

    for(let index in dezDaysList){
        let days = dezDaysList[index];
        let dayListItem = document.createElement('li');

        if(days === 24 || days === 31){
            dayListItem.className = 'day holiday';
            dayListItem.innerHTML = days;
            ulContainer.appendChild(dayListItem);
        }else if(days === 4 ||days === 11 ||days === 18 ||days === 25 ){
            dayListItem.className = 'day holiday friday';
            dayListItem.innerHTML = days;
            ulContainer.appendChild(dayListItem);
        }else{
            dayListItem.className = 'day';
            dayListItem.innerHTML = days;
            ulContainer.appendChild(dayListItem);
        }
    }
 }
 addDaysOfTheMonth();

 function addButtonHoliday (name){
     let buttonContainer = document.querySelector('.buttons-container');
     let newButton = document.createElement('button');
    
     newButton.innerHTML = name;
     newButton.id = 'btn-holiday';
     buttonContainer.appendChild(newButton);
 }
addButtonHoliday('Feriados');

function showHolidays(){
    let buttonHoliday = document.querySelector('#btn-holiday');
    let holidays  = document.querySelectorAll('.holiday');
    let newColorBg = 'white';
    let colorDefault = 'rgb(238,238,238)';

    buttonHoliday.addEventListener('click', function() {
        for(let index in holidays){
            if(holidays[index].style.backgroundColor === newColorBg){
                holidays[index].style.backgroundColor = colorDefault;
            }else{
                holidays[index].style.backgroundColor = newColorBg;
            }
        }
    })
}
showHolidays();

function addButtonfriday (name){
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
   
    newButton.innerHTML = name;
    newButton.id = 'btn-friday';
    buttonContainer.appendChild(newButton);
}
addButtonfriday('Sexta-feira');

function showFridays(){
    let buttonFriday = document.querySelector('#btn-friday');
    let fridays  = document.querySelectorAll('.friday');
    let newColorBg = 'red';
    let colorDefault = 'rgb(238,238,238)';

    buttonFriday.addEventListener('click', function() {
        for(let index in fridays){
            if(fridays[index].style.backgroundColor === newColorBg){
                fridays[index].style.backgroundColor = colorDefault;
            }else{
                fridays[index].style.backgroundColor = newColorBg;
            }
        }
    })
}
showFridays();

function zoomDays(){
    let days = document.querySelector('#days');

    days.addEventListener('mouseover', function(event){
        event.target.style.fontSize = '30px';
    })
}

function zoomOutDays(){
    let days = document.querySelector('#days');

    days.addEventListener('mouseout', function(event){
        event.target.style.fontSize = '20px';
    })
}
zoomDays();
zoomOutDays();

function myTasks(task){
    let taskContainer = document.querySelector('.my-tasks');
    let createTask = document.createElement('span');

    createTask.innerHTML = task;
    taskContainer.appendChild(createTask);
}
myTasks('Projetin');

function colorBgTask(color){
    let taskContainer = document.querySelector('.my-tasks');
    let createBgTask = document.createElement('div');
    createBgTask.className = 'task';
    createBgTask.style.backgroundColor = color;

    taskContainer.appendChild(createBgTask);
}
colorBgTask('green');

function taskSelect(){
    let getSelectedTask = document.getElementsByClassName('task selected');
    let getTask = document.querySelector('.task');

    getTask.addEventListener('click', function(event){
        if (getSelectedTask.length === 0){
            event.target.className = 'task selected';
    
        }else{
            event.target.className = 'task';
        }
    })
}
taskSelect();


function taskDay(){
    let getSelectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let getTask = document.querySelector('.task');
    let taskBgColor = getTask.style.backgroundColor;

    days.addEventListener('click', function(event){
        let taskColorDay = event.target.style.color;
        if(getSelectedTask.length > 0 && taskColorDay !== taskBgColor){
            let color = getSelectedTask[0].style.backgroundColor;
            event.target.style.color = color;
        }else if (taskColorDay === taskBgColor && getSelectedTask.length !== 0) {
            event.target.style.color = 'rgb(119,119,119)';
          }
    })
}
taskDay();