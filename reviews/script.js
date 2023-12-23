const review = document.querySelectorAll('.reviewContainer')


var count = 0
window.addEventListener('click', function(e){

    console.log(count)

    if(e.target.classList[1] == 'left'){

        review[count].removeAttribute('id')
        
        if(count < 4){
            count+=1
        }else{
            count = 0
        }
        review[count].setAttribute('id','activIn')
    
    }else if(e.target.classList[1] == 'right'){

        review[count].removeAttribute('id')
        
        if(count != 0 ){
            count -= 1
        }else{
            count = 4
        }

        review[count].setAttribute('id','activOut')
        
       
    }else if(e.target.innerHTML == 'Surprise Me'){

        var randon = Math.floor(Math.random() * review.length)
        
        review[count].removeAttribute('id')

        if(randon == count){
            var randon = Math.floor(Math.random() * review.length)
        }

        count = randon
        review[count].setAttribute('id','activSur')



    }



})
// review.addEventListener('click', function(e){


    
//     console.log(e.target)
// })


    