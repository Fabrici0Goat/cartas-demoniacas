function exibir(){
    const cartas= [
        {
            "nome": "Planície",
            "tipo": "Terreno",
            "poder": "-",
            "custo": "-",
            "quantidade": "16",
            "habilidade": "-"
        },
        {
            "nome": "Cavalaria Aeronaútica",
            "tipo": "Criatura - Humano Soldado",
            "poder": "3/4",
            "custo": "4/1 Planície",
            "quantidade": "2",
            "habilidade": "Voar Quando Cavalaria de Aeronautas entrar no campo de batalha, coloque um marcador +1/+1 em outro Soldado alvo que você controla."
        },
        {
            "nome": "Senhor Das Guerras",
            "tipo": "Criatura - Humano Soldado",
            "poder": "4/4",
            "custo": "2/1 planície",
            "quantidade": "2",
            "habilidade": "Como custo adicional para conjurar esta mágica, vire dois artefatos, criaturas e/ou terrenos desvirados que você controla."
        },
        {
            "nome": "Cachorro Salvador",
            "tipo": "Criatura - Soldado Cachorro",
            "poder": "3/3",
            "custo": "3/2 planície",
            "quantidade": "2",
            "habilidade": "clarão quando o rescue retriever entrar,coloque um marcador +1/+1 em cada outro soldado que voce controla.Previna todo o fano que seria causado a outros soldados atacantes que voce controla."
        },
        {
            "nome": "Oficial De Recrutamento",
            "tipo": "Criatura - Humano Soldado",
            "poder": "2/1",
            "custo": "1 planície",
            "quantidade": "2/1",
            "habilidade": "3/1 - Olhe os quatro cards do topo de seu grimório. Você pode revelar um card de criatura com valor de mana igual ou inferior a 3 dentre eles e colocá-lo em sua mão. Coloque o restante no fundo de seu grimório em ordem aleatória."
        },
        {
            "nome": "Capelã De Transporte Aéreo",
            "tipo": "Criatura - Humano Clerigo",
            "poder": "1/1",
            "custo": "2/1 planície",
            "quantidade": "2",
            "habilidade": "Voar Quando Capelã do Transporte Aéreo entrar no campo de batalha, triture três cards. Você pode colocar em sua mão um card de Planície ou um card de criatura com valor de mana igual ou inferior a 3 dentre os cards triturados dessa forma. Se não fizer isso, coloque um marcador +1/+1 em Capelã do Transporte Aéreo. (Para triturar um card, coloque o card do topo de seu grimório em seu cemitério.)"
        },
        {
            "nome": "Vanguarda Da Falange",
            "tipo": "Criatura - Humano Soldado",
            "poder": "2/2",
            "custo": "1/1 planície",
            "quantidade": "2",
            "habilidade": "*Vigilância* Toda vez que um artefato entra no campo de batalha sob seu controle, Vanguarda da Falange recebe +1/+0 até o final do turno."
        },
        {
            "nome": "Veterano Da Vítoria",
            "tipo": "Criatura - Humano Soldado",
            "poder": "2/2",
            "custo": "2/1 planície",
            "quantidade": "1    ",
            "habilidade": "No inicio do combate,no seu turno, coloque um marcador +1/+1 na criatura alvo que voce controla.toda vez que outro soldados qye não seja uma ficha voce controla morree,crie uma ficha de criatura artefato soldado incolor 1/1"
        },
        {
            "nome": "Powerblade Do Veterano",
            "tipo": "Artefato-Equipamento",
            "poder": "-",
            "custo": "3",
            "quantidade": "2",
            "habilidade": "A criatura equipada recebe +2/+0. 0/1 Equipar Soldado 2 Equipar (2: Anexe este equipamento à criatura alvo que você controla. Equipe somente como um feitiço.)"
        },
        {
            "nome": "Tropa Reconstruida",
            "tipo": "Artefato-Creatura",
            "poder": "-",
            "custo": "3",
            "quantidade": "2",
            "habilidade": "Desenterrar{2} ({2}: Retorne este card do seu cemitério para o campo de batalha. Ele ganha ímpeto. Exile-o no início da próxima etapa final ou se ele deixaria o campo de batalha. Desenterre apenas como um feitiço.)"
        },
        {
            "nome": "Comandante Kayla",
            "tipo": "Feitiço",
            "poder": "-",
            "custo": "1/2 planície",
            "quantidade": "1",
            "habilidade": "Escolha dois — • Crie uma ficha de criatura artefato Constructo incolor 2/2. • Coloque um marcador +1/+1 em uma criatura que você controla. Ela ganha golpe duplo até o final do turno. • Procure em seu grimório um card de Planície básica, revele-o, coloque-o em sua mão e depois embaralhe. • Você ganha 2 pontos de vida e usa vidência 2."
        },
        {
            "nome": "Rede Estática",
            "tipo": "Encantamento",
            "poder": "-",
            "custo": "3/1 planície",
            "quantidade": "2",
            "habilidade": "Quando Rede Estática entrar no campo de batalha, exile a permanente alvo não de terreno que um oponente controla até que Rede Estática deixe o campo de batalha. Quando Rede Estática entra no campo de batalha, você ganha 2 pontos de vida e cria uma ficha de Pedra de Energia virada."
        },
        {
            "nome": "Reentrar em Serviço",
            "tipo": "Feitiço",
            "poder": "-",
            "custo": "1/1 planície",
            "quantidade": "2",
            "habilidade": "Devolva o card de artefato ou criatura alvo com valor de mana igual ou inferior a 3 de seu cemitério para o campo de batalha. Se uma criatura entrar no campo de batalha dessa forma, ela entrará com um marcador +1/+1 adicional."
        },
        {
            "nome": "Armas Para baixo",
            "tipo": "Feitiço",
            "poder": "-",
            "custo": "1 planície",
            "quantidade": "2",
            "habilidade": "Exile a criatura alvo com valor de mana menor ou igual ao número de Planícies que você controla. Seu controlador ganha 3 pontos de vida."
        },
        
        

    ];
    console.clear();
    console.log("// exibe todas as cartas dentro da estrutura JSON");
    console.log(cartas);
    
    console.log("// exibe os dados da primeira carta");
    console.log(cartas[0]);
    
    console.log("// exibe os dados da segunda carta");
    console.log(cartas[1]);
    
    console.log("// exibe os dados da terceira carta");
    console.log(cartas[2]);
    
    console.log("// exibe os dados da quarta carta");
    console.log(cartas[3]);
    
    console.log("// exibe os dados da quinta carta");
    console.log(cartas[4]);
    
    console.log("// exibe os dados da sexta carta");
    console.log(cartas[5]);
    
    console.log("// exibe os dados da sétima carta");
    console.log(cartas[6]);
    
    console.log("// exibe os dados da oitava carta");
    console.log(cartas[7]);
    
    console.log("// exibe os dados da nona carta");
    console.log(cartas[8]);
    
    console.log("// exibe os dados da décima carta");
    console.log(cartas[9]);
    
    console.log("// exibe os dados da décima primeira carta");
    console.log(cartas[10]);
    
    console.log("// exibe os dados da décima segunda carta");
    console.log(cartas[11]);
    
    console.log("// exibe os dados da décima terceira carta");
    console.log(cartas[12]);
    
    console.log("// exibe os dados da décima quarta carta");
    console.log(cartas[13]);
    

}

