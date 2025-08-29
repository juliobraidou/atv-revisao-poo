Como executar:

1 - Clonar o rep: 
(git clone https://github.com/juliobraidou/atv-revisao-poo.git
cd atv-revisao-poo)

2 - Instalar as dependecia do projeto:
npm install

3 - Compila o JS:
npx tsc

4- Roda o projeto:
node dist/main.js

Pilares de POO usado:

1 - Abstração na Interface
defini os metodos que todas classes devem possuir.

interface interVideo {
  play(): void;
  pause(): void;
  stop(): void;
  info(): void;
}


2 - Encapusalamento nos atributos
deixando privado e utilizando get para pega-los.

private title: string;
private durationS: number;
private idAtual: number;
private historico: interVideo[];


3 - Herança na classe Live 
recebe os atributos da classe mãe.

export class LiveStream extends Video { ... }


4 - Polimorfismo no metodo dentro da Livestream
se comporta de maneira diferente do que na classe Play.

public play(): void {
    console.log(`Transmissão ao vivo: ${this.getTitle()} (${this.viewers} espectadores)`);
  }





