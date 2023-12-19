const button = document.querySelector('.button')
const cssColor = document.querySelector('.cssColor')
const body = document.querySelector('body')
const hex = document.querySelector('.hex')
const simple = document.querySelector('.simple')

const listaCores = ['#E0FFFF','#D8BFD8', '#FF6347','#f00ff0', '#C0C0C0', '#483D8B', '#4682B4', '#00FFFF', '#66CDAA', '#2F4F4F', '#008000','#6B8E23']

const listaRgb = ['rgb(189,83,107)','rgb(139,69,19)','rgb(244,164,96)','rgb(147,112,219)','rgb(186,85,211)','rgb(219,112,147)','rgb(220,20,60)']

const listaNome = ['seashell', 'whitesmoke', 'lemonchiffon', 'thistle', 'gold', 'darkorange', 'tomato', 'firebrick', 'crimson', 'pink', 'orchid']

 

var novaLista = listaCores.concat(listaRgb)
novaLista = novaLista.concat(listaNome)

hex.addEventListener('click', function(){
    hex.toggleAttribute('clicked')

})
simple.addEventListener('click', function(){

    if(hex.attributes.length == 2){
        hex.removeAttribute('clicked')
    }

})


function cores(lista){
    var random = Math.floor(Math.random() * lista.length);
  
    cssColor.textContent = lista[random]
    body.style.backgroundColor = lista[random]
    cssColor.style.color = lista[random]

}


button.addEventListener('click', function() {

    if(hex.attributes.length === 2){
        cores(listaCores)
    }else{
        cores(novaLista);

    }
});
