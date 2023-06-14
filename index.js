const tela = document.querySelector('.pj');

function troca(){
    if(count < projetos.length-1){
        count++
        tela.innerHTML = `<video controls autoplay width="550px" src="videos/${projetos[count]}.mp4"></video>`
    }
    else{
        count = 0
        tela.innerHTML = `<video controls autoplay width="550px" src="videos/${projetos[count]}.mp4"></video>`
    }
}
var count = 0;

var projetos = [0, 1, 2, 3, 4]