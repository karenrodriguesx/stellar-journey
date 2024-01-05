import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  conteudo: any[] = [];

  ngOnInit(): void {
    this.inicializarConteudo();
  }

  inicializarConteudo() {
    this.conteudo = [
      {
        title: 'A origem',
        content:
          'A teoria mais aceita para explicar a formação do sistema solar é a teoria da nebulosa solar primitiva, proposta pela primeira vez pelo filósofo alemão Immanuel Kant, em 1755, e posteriormente desenvolvida pelo matemático francês Pierre-Simon Laplace, em 1796. De acordo com essa teoria, a nebulosa solar, uma nuvem interestelar em rápida rotação, contraiu-se e entrou em colapso, resultando na formação do Sol devido à concentração de matéria. As partículas remanescentes mais externas originaram os planetas gasosos, enquanto as mais próximas ao centro deram origem aos planetas rochosos.',
          src: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Planets2013-unlabeled.jpg'
      },
      {
        title: 'Planetas Rochosos: As Fundações Sólidas do Sistema Solar',
        content:
          'Iniciemos nossa jornada pelo menu dos "Planetas Rochosos". Mercúrio, Vênus, Terra e Marte compõem esse grupo, caracterizado por superfícies sólidas e rochosas. Cada um desses mundos possui características únicas, desde a intensidade do calor em Vênus até os mistérios das calotas polares marcianas. Prepare-se para explorar terrenos intrigantes e desvendar os segredos desses planetas sólidos.',
          src: 'https://estudoemcasaapoia.dge.mec.pt/sites/default/files/2022-05/fq_-os-planetas-rochosos-imagem-ilustrativa.jpg'
      },
      {
        title: 'Planetas Gasosos: Nuvens de Mistério no Cosmos',
        content:
          'Adentre o menu dedicado aos "Planetas Gasosos" e mergulhe nas atmosferas profundas e imponentes de Júpiter, Saturno, Urano e Netuno. Compostos predominantemente por gases, esses gigantes gasosos desafiam a compreensão convencional de planetas, exibindo auroras magníficas, anéis deslumbrantes e tempestades impressionantes. Descubra a majestade envolta nesses mundos enigmáticos.',
          src: 'https://tm.ibxk.com.br/2022/01/31/31084041056041.jpg?ims=1200x675'
      },
      {
        title: 'Descobrindo as Luas: Satélites Naturais em Órbita',
        content:
          'Navegue até o menu exclusivo para "Luas" e desvende os segredos das companheiras celestiais que circundam os planetas. Da Lua da Terra, nosso próprio satélite natural, às numerosas luas de Júpiter e Saturno, esses corpos celestes oferecem uma visão única do espaço. Explore suas características distintas, desde crateras e mares lunares até geleiras em luas distantes, proporcionando um olhar mais íntimo sobre a vastidão do Sistema Solar.',
          src: 'https://t.ctcdn.com.br/5SFS-tcceVUJVM_XGYY8O2_BJDM=/261x100:2763x1509/2502x1407/smart/i384954.jpeg'
      },
      {
        title: 'Terra: Nosso Lar',
        content:
          `Por fim, retorne à nossa casa através do menu dedicado à "Terra". Explore as maravilhas naturais, os ecossistemas diversos e a complexa teia da vida que torna nosso planeta único. Descubra como a Terra interage com os outros corpos celestes, moldando e sendo moldada pelo vasto cosmos que a envolve. 
          Embarque nesta jornada celeste através do nosso Sistema Solar, onde cada planeta e lua conta uma história fascinante, expandindo nosso entendimento sobre o vasto e incrível universo que chamamos de lar.`,
          src: 'https://img.olhardigital.com.br/wp-content/uploads/2023/10/planeta-terra-visto-do-espaco.png'
      },
    ];
  }
}
