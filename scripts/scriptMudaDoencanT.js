// Quadro de exemplos

var currentImgIndex=1;
var ImgSrcArray = [
'../assets/cancer1.webp',
'../assets/diabetes1.jpg',
'../assets/hipertensao1.jpg'
];

var currentHIndex=1;
var HArray = [
    'O câncer é uma doença caracterizada pelo crescimento descontrolado de células anormais no corpo, podendo se espalhar para outras partes. O diagnóstico precoce e avanços na pesquisa são fundamentais para melhorar as chances de tratamento e cura.',
    'Doença causada pela má absorção ou produção insuficiente da insulina, hormônio que regula a glicose no sangue e garante energia para o organismo, mais de 13 milhões de brasileiros convivem com o Diabetes Mellitus diariamente ― <strong>6,9% da população nacional</strong>.',
    'A doença crônica mais frequente no país e também a principal causa de morte entre brasileiros, a hipertensão arterial está no dia a dia de <strong>36 milhões</strong> de pessoas, equivalente a 32% da população. O principal fator de risco para outras doenças cardiovasculares e renais, a Hipertensão Arterial Sistêmica (HAS) também é conhecida apenas como “pressão alta” e, quando não controlada, pode levar a complicações como insuficiência cardíaca, insuficiência renal e acidente vascular cerebral.'    
];

var currentTitIndex=1;
var TitArray = [
'Câncer',
'Diabetes Mellitus',
'Hipertensão'
];   

// Quadro de tratamento 
var currentTS1Index=1;
var TS1Array = [
'O tratamento do câncer envolve diversas abordagens, como cirurgia, radioterapia, quimioterapia e imunoterapia. A escolha do método depende do tipo, estágio e localização do câncer, visando eliminar as células malignas e restaurar a saúde do paciente.',
'Uma dieta saudável, atividade física e evitar o uso de tabaco podem prevenir ou retardar o diabetes tipo 2. Além disso, a doença pode ser tratada e suas consequências evitadas ou retardadas com medicamentos, exames regulares e tratamento de complicações.',
'Mudança de hábitos e acompanhamento médico ajudam a manter a pressão arterial sob controle. O tratamento é feito por meio de cuidados individuais e do uso de diuréticos. Adotar uma dieta saudável com menos sal, praticar exercícios físicos regularmente e tomar medicamentos pode ajudar a baixar a pressão arterial.'
];

function trocaS1(){
    if(currentTS1Index == TS1Array.length) 
    {
        currentTS1Index=0;
    }
    document.getElementById("pSint1").innerHTML=TS1Array[currentTS1Index]; 
    currentTS1Index++
};


// Quadro de cuidados
var currentTS2Index=1;
var TS2Array = [
'Ao enfrentar o câncer, é crucial seguir as orientações do seu médico, adotar um estilo de vida saudável com dieta balanceada, exercícios físicos e controle do estresse. O apoio emocional, seja por meio de familiares, amigos ou grupos de apoio, desempenha um papel vital durante o tratamento.',
'O tratamento correto do diabetes significa manter uma vida saudável, evitando diversas complicações que surgem em consequência do mau controle da glicemia. Altas taxas de açúcar no sangue, por tempo prolongado, podem causar sérios danos à saúde: cegueira, insuficiência renal, ataque cardíaco, acidente vascular cerebral e amputação de membros inferiores.',
'Ao adotar uma dieta saudável com menor quantidade de sal, pacientes hipertensos devem consumir cerca 2 gramas de sal por dia, além de evitar alimentos processados e ultraprocessados, e praticar exercícios físicos regularmente. A recomendação é de 150 minutos de atividade física semanal. Também é importante gerenciar o estresse, abandonar o tabagismo e tomar medicamentos corretamente. Essas medidas são essenciais para baixar e controlar a pressão arterial.'
];

function trocaS2(){
    if(currentTS2Index == TS2Array.length) 
    {
        currentTS2Index=0;
    }
    document.getElementById("pSint2").innerHTML=TS2Array[currentTS2Index]; 
    currentTS2Index++
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

}