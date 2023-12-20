const number = document.querySelector('.number')

var counter = 0



window.addEventListener('click', function(e){


    if(e.target.getAttribute('id') == 'increse'){
        counter += 1
        number.innerHTML = counter
    }else if(e.target.getAttribute('id') == 'decrese'){
        counter -= 1
        number.innerHTML = counter
    }else if(e.target.getAttribute('id') == 'reset'){
        counter = 0
        number.innerHTML = counter

    }


}) 

