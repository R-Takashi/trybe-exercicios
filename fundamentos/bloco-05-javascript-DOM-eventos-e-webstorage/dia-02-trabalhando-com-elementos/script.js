addH1Body();
addMainBody();
addSectionMain('center-content');
addSectionMain('left-content');
addSectionMain('right-content');
addPSection();
addPicture();
addUl();
addH3Main();
addTitleClass();
addH3Description();
removeSectionMain('left-content');
centerSectionMain ('right-content');
backgroundSection();
removeLastLi();
removeLastLi();

function addH1Body (){
    let bodyContainer = document.getElementsByTagName('body')[0];
    let createH1 = document.createElement('h1');
    createH1.innerHTML = 'Exercício 5.2 - JavaScript DOM';
    bodyContainer.appendChild(createH1);
}

function addMainBody (){
    let bodyContainer = document.getElementsByTagName('body')[0];
    let createMain = document.createElement('main');
    createMain.className = 'main-content';
    bodyContainer.appendChild(createMain);
}

function addSectionMain (classElement){
    let mainContainer = document.getElementsByTagName('main')[0];
    let createSection = document.createElement('section');
    createSection.className = classElement;
    mainContainer.appendChild(createSection);
}

function addPSection (){
    let sectionContainer = document.getElementsByTagName('section')[0];
    let createP = document.createElement('p');
    createP.innerHTML = 'JavaScript dia 2';
    sectionContainer.appendChild(createP);
}

function addPicture (){
    let pictureContainer = document.getElementsByClassName('left-content')[0];
    let createPicture = document.createElement('img');
    createPicture.src = 'https://picsum.photos/200';
    createPicture.style = 'small-image';
    pictureContainer.appendChild(createPicture);
}

function addUl (){
    let ulContainer = document.getElementsByClassName('right-content')[0];
    let createUl = document.createElement('ul');
    let numberString = ['um','dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
    for (let index in numberString){
        let createLi = document.createElement('li');
        createLi.innerHTML = numberString[index];
        createUl.appendChild(createLi);
    }
    ulContainer.appendChild(createUl);
}

function addH3Main (){
    let mainContainer = document.getElementsByTagName('main')[0];
    
    for(let index = 1 ; index <= 3 ; index += 1){
    let createH3 = document.createElement('h3');
    createH3.innerHTML = 'Subtitulo' + index;
    mainContainer.appendChild(createH3);
    }
}

function addTitleClass (){
    let titleClass = document.getElementsByTagName('h1')[0];
    titleClass.className = 'title';
}

function addH3Description (){
    let descriptionH3 = document.getElementsByTagName('h3');
    for(let index = 0 ; index <= 2 ; index += 1){
        descriptionH3[index].className = 'description';
        }
}

function removeSectionMain (classElement){
    let mainContainer = document.getElementsByTagName('main')[0];
    let removeSection = document.getElementsByClassName(classElement)[0];
    mainContainer.removeChild(removeSection);
}

function centerSectionMain (classElement){
    let centerSection = document.getElementsByClassName(classElement)[0];
    centerSection.style.marginRight = 'auto';
}


function backgroundSection (){
    let backgroundColorSection = document.getElementsByClassName('center-content')[0];
    backgroundColorSection.parentNode.style.background = 'green';
}

function removeLastLi (){
    let ulContainer = document.querySelector('ul');
    ulContainer.lastChild.remove();
}