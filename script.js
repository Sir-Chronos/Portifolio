var descriptions = [
  '<div><p>Um CLP (Controlador Lógico Programável) é um dispositivo eletrônico utilizado para automatizar processos industriais. Ele é composto por uma unidade de processamento central, memória, interfaces de entrada e saída e uma interface de comunicação.</p> <br><p>A interface de comunicação permite que o CLP se conecte a outros dispositivos ou sistemas, como supervisórios, redes industriais, computadores, entre outros. Isso permite a troca de informações e o monitoramento do processo em tempo real.</p></div>',

  '<div><p>O SCADA (Supervisory Control and Data Acquisition) é um sistema utilizado para monitorar e controlar processos industriais de forma centralizada. Ele é composto por software e hardware que permitem a coleta, visualização e análise de dados em tempo real, provenientes de sensores, dispositivos e CLPs.</p> <br> <p>O sistema SCADA permite o controle remoto de dispositivos, a geração de alarmes, a geração de relatórios e gráficos, e a implementação de estratégias de controle. Ele fornece uma visão abrangente do processo industrial, facilitando a tomada de decisões e melhorando a eficiência operacional.</p></div>',

  '<div><p>Uma IHM (Interface Homem-Máquina), também conhecida como HMI (Human-Machine Interface), é um dispositivo ou sistema que permite a interação entre seres humanos e máquinas.</p><br><p>A IHM é projetada para fornecer uma representação visual das informações do sistema, como status de equipamentos, dados de sensores, alarmes e outras informações relevantes. Ela permite que os operadores realizem ajustes, configurações e acionem comandos diretamente, tornando as operações mais eficientes e facilitando a identificação de problemas.</p></div>',

  '<div><p>Sistemas de Controle Distribuído (DCS - Distributed Control Systems) são sistemas de automação e controle utilizados em processos industriais, onde a lógica de controle e aquisição de dados são distribuídas em diversos controladores interconectados.</p><br><p>Os DCS geralmente possuem uma arquitetura em rede, com controladores interligados a interfaces de operação e supervisão, possibilitando o controle de equipamentos e processos em tempo real, além da coleta e análise de dados para otimização e tomada de decisões.</p></div>',

  '<div><p>Controladores de processo são dispositivos eletrônicos utilizados para monitorar e regular variáveis de um processo industrial, com o objetivo de manter as condições desejadas ou otimizadas.</p><br><p>Esses controladores recebem informações dos sensores que medem as variáveis do processo, como temperatura, pressão, nível, vazão, entre outras, e com base em um algoritmo de controle pré-programado, realizam ajustes nos atuadores, como válvulas ou motores, para manter as variáveis dentro de faixas de operação específicas.</p></div>',

  '<div><p>Redes industriais são sistemas de comunicação utilizados para interligar dispositivos e equipamentos em ambientes industriais, permitindo a troca de informações e o controle de processos.</p><br><p>Essas redes são projetadas para suportar as necessidades específicas da indústria, como alta confiabilidade, determinismo, segurança e integração com sistemas de automação. Existem diferentes tipos de redes industriais, como Profibus, Modbus, Ethernet Industrial (por exemplo, Ethernet/IP, Profinet), Foundation Fieldbus, entre outras. Cada uma dessas redes possui características e protocolos específicos adequados para diferentes aplicações e requisitos de desempenho.</p></div>',

  '<div><p>Os registradores de dados, também conhecidos como dataloggers, desempenham a função de coletar, armazenar e registrar informações de forma contínua ao longo do tempo. Esses dispositivos eletrônicos são capazes de capturar dados de sensores ou de outros dispositivos de medição e registrar essas informações em sua memória interna.</p><br><p>Os registradores de dados, fornecem insights valiosos para análise e tomada de decisões. Eles são utilizados em diversas aplicações, permitindo monitorar tendências e variações, além de possuírem recursos adicionais, como conexão sem fio e interfaces de comunicação.</p></div>',

  '<div><p>Os sensores têm a função de capturar e monitorar informações do ambiente físico, convertendo-as em sinais elétricos ou digitais que podem ser processados e interpretados por outros dispositivos. Esses dados são essenciais para o controle e automação de processos industriais, permitindo ajustes precisos, tomada de decisões e melhoria da eficiência operacional.</p></div>'
]

var images = [
  'images/auto_imgs/clp.png',
  'images/auto_imgs/scada.png',
  'images/auto_imgs/ihm.png',
  'images/auto_imgs/dcs.jpg',
  'images/auto_imgs/cps.png',
  'images/auto_imgs/redes_industriais.png',
  'images/auto_imgs/registradores.png',
  'images/auto_imgs/sensores.png'

]


function showTooltip(event, num) {
  const tooltip = document.getElementById('tela_aux');
  tooltip.innerHTML = `
    <img src="${images[num]}">
    <p>${descriptions[num]}</p>
  `;

  // Posiciona a tela flutuante ao lado do item
  tooltip.style.top = (event.pageY - 100) +'px';
  tooltip.style.left = (event.pageX + 100) +'px';

  tooltip.style.display = 'flex';
}

document.addEventListener('mouseout', function(event) {
  const tooltip = document.getElementById('tooltip');
  tooltip.style.display = 'none';
});

function hideTooltip() {
  const tooltip = document.getElementById('tela_aux');
  tooltip.style.display = 'none';
}