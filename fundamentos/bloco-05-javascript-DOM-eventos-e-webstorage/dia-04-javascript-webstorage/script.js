window.onload = function(){
    let bodyContainer = document.querySelector('body');
    let pContainer = document.querySelector('p');

    //troca cor fundo
    let selectBackground = document.querySelector('select[name = background]');
    selectBackground.addEventListener('change', function(){
        let selectedColor = selectBackground.selectedOptions[0];
        bodyContainer.style.backgroundColor = selectedColor.value;

        localStorage.setItem('bgColor', selectedColor.value);
    })

    let savedBgColor = localStorage.getItem('bgColor');
    bodyContainer.style.backgroundColor = savedBgColor;

    //troca cor texto
    let selectColorText = document.querySelector('select[name = colorText]');
    selectColorText.addEventListener('change', function(){
        let selectedColor = selectColorText.selectedOptions[0];
        pContainer.style.color = selectedColor.value;

        localStorage.setItem('textColor', selectedColor.value);
    })
    let savedTextColor = localStorage.getItem('textColor');
    pContainer.style.color = savedTextColor;

    //troca tamanho texto
    let btnSize = document.getElementById('btnFontSize');
    btnSize.addEventListener('click', function (){
        let size = document.querySelector('input[name = "fontSize"').value;
        pContainer.style.fontSize = size + 'px';

        localStorage.setItem('fontSize', size + 'px');
        })
    
    let savedFontSize = localStorage.getItem('fontSize');
    pContainer.style.fontSize = savedFontSize;
    
    //espaçamento das letras
    let btnSpace = document.getElementById('btnletterSpacing');
    btnSpace.addEventListener('click', function (){
        let space = document.querySelector('input[name = "letterSpacing"').value;
        pContainer.style.letterSpacing = space + 'px';

        localStorage.setItem('letterSpacing', space + 'px');
        })
    
    let savedLetterSpace = localStorage.getItem('letterSpacing');
    pContainer.style.letterSpacing = savedLetterSpace;
    
    let selectFont = document.querySelector('select[name = font]');
    selectFont.addEventListener('change', function(){
        let selectedFont = selectFont.selectedOptions[0];
        pContainer.style.fontFamily = selectedFont.value;

        localStorage.setItem('font', selectedFont.value);
    })        

    let savedFont = localStorage.getItem('font');
    pContainer.style.fontFamily = savedFont;
}
