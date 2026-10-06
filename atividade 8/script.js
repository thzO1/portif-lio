function sorte(){
    let min = 1;
    let max = 100;
    let dif = max - min 
    let aleatorio = Math.random();
    let num = min + Math.trunc(dif * aleatorio)
    let sorte = 0;
    let azar =  0;


if(num > 50){
    let mostrar = document.getElementById('resultado');
    mostrar.innerHTML = `<img src="sorte.avif>  `;
} else{
let mostrar = document.getElementById('resultado');
    mostrar.innerHTML = `<p>Sorte: ${cont_sorte}</p>
                        <p>Azar: ${cont_azar}</p>
                         <img src="azar.png">  `;
             
}


}