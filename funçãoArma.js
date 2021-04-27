let municaoNoMagazine = 0;
let mensagem = 'POW';
let mensagem2 = 'Sem munição.';
let capacidadeDoMagazine = 10;

function recarregar(n) {

    if(municaoNoMagazine === capacidadeDoMagazine)
       return 'Seu magazine esta cheio.';

   if(capacidadeDoMagazine < municaoNoMagazine + n) {
      return 'Seu magazine não possui espaço suficiente.';
      }

    if(n > capacidadeDoMagazine) {
       return 'Seu magazine não possui espaço suficiente.';
    }
    if(n === 1) {
       municaoNoMagazine = municaoNoMagazine + n;
      return 'Sua arma foi recarregada com ' + n + ' munição.';
    } 
    
    if(n > 1) {
       municaoNoMagazine = municaoNoMagazine + n;
       return 'Sua arma foi recarregada com ' + n + ' munições.';
    }

    if(capacidadeDoMagazine < municaoNoMagazine + n) {
       return 'Seu magazine não possui espaço suficiente.';
    }
}

function atirar() {
   if(municaoNoMagazine > 0) {
      municaoNoMagazine = municaoNoMagazine - 1;
      return mensagem;
   } else{
      return mensagem2;
   }
   
}




