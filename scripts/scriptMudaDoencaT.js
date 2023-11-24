// Quadro de exemplos

var currentImgIndex=1;
var ImgSrcArray = [
'../assets/covid1.webp',
'../assets/poliomielite1.jpg',
'../assets/sifilis1.jpg'
];

var currentHIndex=1;
var HArray = [
    'A COVID-19 é uma doença respiratória causada pelo vírus SARS-CoV-2. Caracteriza-se por sintomas como febre, tosse e dificuldade respiratória, tendo impactado globalmente a saúde pública desde seu surgimento em 2019.',
    'A poliomielite é uma doença infectocontagiosa aguda, causada por um vírus de gravidade extremamente variável: o Poliovírus. Essa doença pode afetar tanto adultos quanto crianças, mas por ser mais contraída na infância, ficou conhecida como “paralisia infantil”.',
    'A sífilis é uma Infecção Sexualmente Transmissível (IST) curável e exclusiva do ser humano, causada pela bactéria Treponema pallidum. Pode apresentar várias manifestações clínicas e diferentes estágios (sífilis primária, secundária, latente e terciária).'    
];

var currentTitIndex=1;
var TitArray = [
'Coronavírus (Covid-19)',
'Poliomielite',
'Sífilis (IST)'
];   

// Quadro sintomas 1
var currentTS1Index=1;
var TS1Array = [
'Febre',
'Febre',
'Sífilis Primária'
];

var currentPS1Index=1;
var TP1Array = [
'Na COVID-19, a febre é um sintoma comum que reflete a resposta do corpo ao vírus, aumentando a temperatura para combater a infecção e estimular o sistema imunológico.',
'Quando infecta o indivíduo, muitas das vezes os sintomas demoram para surgir e quando surgem são similares ao de outras doenças, como a gripe.',
'Ferida, geralmente única, no local de entrada da bactéria, que aparece entre 10 e 90 dias após o contágio. Essa lesão é rica em bactérias e é chamada de “cancro duro”'
];

function trocaS1(){
    if(currentTS1Index == TS1Array.length) 
    {
        currentTS1Index=0;
    }
    document.getElementById("tSint1").innerHTML=TS1Array[currentTS1Index]; 
    currentTS1Index++;

    if(currentPS1Index == TP1Array.length) 
    {
        currentPS1Index=0;
    }
    document.getElementById("pSint1").innerHTML=TP1Array[currentPS1Index]; 
    currentPS1Index++
}

// Quadro sintomas 2
var currentTS2Index=1;
var TS2Array = [
'Dor de garganta',
'Dor nas costas',
'Sífilis Secundária'
];

var currentPS2Index=1;
var TP2Array = [
'A dor de garganta na COVID-19 pode ocorrer como sintoma inicial, manifestando-se como desconforto, irritação ou dor ao engolir, sendo um dos indícios iniciais da infecção viral.',
'Sensação de rigidez muscular, muitas vezes é possível sentir especificamente na região da nuca.',
'Entre 6 semanas e 6 meses, podem surgir manchas no corpo, que geralmente não coçam, incluindo palmas das mãos e plantas dos pés. Essas lesões são ricas em bactérias.'
];

function trocaS2(){
    if(currentTS2Index == TS2Array.length) 
    {
        currentTS2Index=0;
    }
    document.getElementById("tSint2").innerHTML=TS2Array[currentTS2Index]; 
    currentTS2Index++;

    if(currentPS2Index == TP2Array.length) 
    {
        currentPS2Index=0;
    }
    document.getElementById("pSint2").innerHTML=TP2Array[currentPS2Index]; 
    currentPS2Index++
}

// Quadro sintomas 3
var currentTS3Index=1;
var TS3Array = [
'Tosse',
'Garganta inflamada',
'Fase Assintomática'
];

var currentPS3Index=1;
var TP3Array = [
'A tosse é um sintoma comum da COVID-19, podendo variar de leve a grave. Pode ser seca ou produtiva, contribuindo para a disseminação do vírus, sendo essencial monitorar e procurar orientação médica quando necessário.',
'Dores musculares graves ou fraqueza, podem ser possíveis sintomas de poliomielite paralítica, outro tipo de poliomelite mais grave.',
'Não aparecem sinais ou sintomas. A duração dessa fase é variável, podendo ser interrompida pelo surgimento de sinais e sintomas da forma secundária ou terciária.'
];

function trocaS3(){
    if(currentTS3Index == TS3Array.length) 
    {
        currentTS3Index=0;
    }
    document.getElementById("tSint3").innerHTML=TS3Array[currentTS3Index]; 
    currentTS3Index++;

    if(currentPS3Index == TP3Array.length) 
    {
        currentPS3Index=0;
    }
    document.getElementById("pSint3").innerHTML=TP3Array[currentPS3Index]; 
    currentPS3Index++
}

// Quadro sintomas 4
var currentTS4Index=1;
var TS4Array = [
'Perde de olfato e paladar',
'Assintomática',
'Sífilis Terciária'
];

var currentPS4Index=1;
var TP4Array = [
'A perda do olfato e do paladar são sintomas distintivos da COVID-19. A anosmia (perda de olfato) e a ageusia (perda do paladar) podem ocorrer isoladamente ou em conjunto, sendo indicativos significativos da infecção pelo vírus.',
'Em alguns casos, a Poliomielite se apresenta de forma assintomática, ou seja, não demonstra nenhum sintoma.',
'Costuma apresentar sinais e sintomas, principalmente lesões cutâneas, ósseas, cardiovasculares e neurológicas, podendo levar à morte.'
];

function trocaS4(){
    if(currentTS4Index == TS4Array.length) 
    {
        currentTS4Index=0;
    }
    document.getElementById("tSint4").innerHTML=TS4Array[currentTS4Index]; 
    currentTS4Index++;

    if(currentPS4Index == TP4Array.length) 
    {
        currentPS4Index=0;
    }
    document.getElementById("pSint4").innerHTML=TP4Array[currentPS4Index]; 
    currentPS4Index++
};

// Quadro de prevenções

var currentPrvIndex=1;
var PrvArray = [
'<strong>Prevenção: </strong>A prevenção da COVID-19 envolve medidas como vacinação completa, higiene das mãos com água e sabão, uso de máscaras em locais públicos, distanciamento social de pelo menos 1 metro, limpeza regular de superfícies, evitar aglomerações, permanecer em casa quando doente e manter ambientes bem ventilados. Fique atualizado com as orientações locais de saúde',
'<strong>Prevenção: </strong> A vacinação é a única forma de prevenção da poliomielite. Todas as crianças menores de cinco anos de idade devem ser vacinadas conforme esquema de vacinação de rotina e na campanha nacional anual. O esquema vacinal contra a poliomielite é de três doses da vacina injetável – VIP (aos 2, 4 e 6 meses) e mais duas doses de reforço com a vacina oral bivalente – VOP (gotinha).',
'<strong>Prevenção: </strong> O uso correto e regular da camisinha feminina e/ou masculina é a medida mais importante de prevenção da sífilis, por se tratar de uma Infecção Sexualmente Transmissível. A testagem e acompanhamento das gestantes e parcerias sexuais durante o pré-natal contribui para o controle da sífilis congênita.'
];

function trocaPrv(){
    if(currentPrvIndex == PrvArray.length) 
    {
        currentPrvIndex=0;
    }
    document.getElementById("prevencao").innerHTML=PrvArray[currentPrvIndex]
    currentPrvIndex++

};

// Quadro de tratamento

var currentTrtIndex=1;
var TrtArray = [
'<strong>Tratamento: </strong> O tratamento da COVID-19 varia de acordo com a gravidade dos sintomas. Casos leves podem ser gerenciados com isolamento domiciliar, repouso e hidratação. Em situações mais graves, podem ser prescritos antivirais, corticosteroides, suporte respiratório e, em alguns casos, transfusão de plasma convalescente. A abordagem terapêutica é determinada por profissionais de saúde, adaptada às necessidades individuais de cada paciente. A prevenção, incluindo a vacinação, continua sendo fundamental.',
'<strong>Tratamento: </strong> Não existe tratamento específico, todas as vítimas de contágio devem ser hospitalizadas, recebendo tratamento dos sintomas, de acordo com o quadro clínico do paciente. As sequelas da poliomielite estão relacionadas com a infecção da medula e do cérebro pelo poliovírus, normalmente são motoras e não tem cura.',
'<strong>Tratamento: </strong> O tratamento de escolha é a penicilina benzatina (benzetacil), que poderá ser aplicada na unidade básica de saúde mais próxima de sua residência. Esta é, até o momento, a principal e mais eficaz forma de combater a bactéria causadora da doença. Quando a sífilis é detectada na gestante, o tratamento deve ser iniciado o mais rápido possível, com a penicilina benzatina. Este é o único medicamento capaz de prevenir a transmissão vertical, ou seja, de passar a doença para o bebê.'
];

function trocaTrt(){
    if(currentTrtIndex == TrtArray.length) 
    {
        currentTrtIndex=0;
    }
    document.getElementById("tratamento").innerHTML=TrtArray[currentTrtIndex]
    currentTrtIndex++

};


function trocar(){

    if(currentImgIndex == ImgSrcArray.length) 
    {
    currentImgIndex=0;
    };
    document.getElementById("imgx").src=ImgSrcArray[currentImgIndex]; 
    currentImgIndex++;

    if(currentHIndex == HArray.length) 
    {
        currentHIndex=0;
    };
    document.getElementById("paragrafo").innerHTML=HArray[currentHIndex]; 
    currentHIndex++;

    if(currentTitIndex == TitArray.length) 
    {
        currentTitIndex=0;
    };
    document.getElementById("titulo").innerHTML=TitArray[currentTitIndex]; 
    currentTitIndex++;

    trocaS1();
    trocaS2();
    trocaS3();
    trocaS4();
    trocaTrt();
    trocaPrv()

}