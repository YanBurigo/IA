function buscaGrafo(inicio, destino) {
  selecionado = inicio;
  var caminho = [];
  i=0;
  while(true){
    caminho[i] = selecionado.valor;
    if((selecionado.esquerda!="null")&&(selecionado.direita!="null")){
      if(destino==selecionado.esquerda){
        i++;
        caminho[i] = selecionado.esquerda;
        break;
      }
      else if(destino==selecionado.direita){
        i++;
        caminho[i] = selecionado.direita;
        break;
      }
      else{
        selecionado = chamar(selecionado.prox);
        i++
      }
    }
    else{
      if(selecionado.prox=="null"){
        break;
      }
      else{
        selecionado = chamar(selecionado.prox);
        i++
      }
    }
  }
  entregar(selecionado, caminho);
  console.log(caminho);
  alert(caminho);
}

function entregar(estado, caminho){

  while(true){
    if(estado.fim=="x"){
      i++;
      caminho[i]=estado.valor;
      i++;
      caminho[i]=estado.fim;
      break;
    }
    else{
      i++
      caminho[i]=estado.valor;
      estado = chamar(estado.fim);
    }
  }
}

function chamar(prox){
  if(prox=="p1"){
    return p1;
  }
  else if(prox=="p2"){
    return p2;
  }
  else if(prox=="p3"){
    return p3;
  }
  else if(prox=="p4"){
    return p4;
  }
  else if(prox=="p5"){
    return p5;
  }
  else if(prox=="p6"){
    return p6;
  }
  else if(prox=="p7"){
    return p7;
  }
  else if(prox=="p8"){
    return p8;
  }
  else if(prox=="p9"){
    return p9;
  }
  else if(prox=="p10"){
    return p10;
  }
  else if(prox=="p11"){
    return p11;
  }
  else if(prox=="p12"){
    return p12;
  }
  else if(prox=="p13"){
    return p13;
  }
  else if(prox=="p14"){
    return p14;
  }
  else if(prox=="p15"){
    return p15;
  }
  else if(prox=="p16"){
    return p16;
  }
  else if(prox=="p17"){
    return p17;
  }
  else if(prox=="p18"){
    return p18;
  }
  else if(prox=="p19"){
    return p19;
  }
  else if(prox=="p20"){
    return p20;
  }
  else if(prox=="p21"){
    return p21;
  }
  else if(prox=="p22"){
    return p22;
  }
  else if(prox=="p23"){
    return p23;
  }
  else if(prox=="p24"){
    return p24;
  }
  else if(prox=="p25"){
    return p25;
  }
  else if(prox=="p26"){
    return p26;
  }
  else if(prox=="p27"){
    return p27;
  }
  else if(prox=="p28"){
    return p28;
  }
  else if(prox=="p29"){
    return p29;
  }
  else if(prox=="p30"){
    return p30;
  }
  else if(prox=="p31"){
    return p31;
  }
  else if(prox=="p32"){
    return p32;
  }
  else if(prox=="p33"){
    return p33;
  }
  else if(prox=="p34"){
    return p34;
  }
  else if(prox=="p35"){
    return p35;
  }
  else if(prox=="p36"){
    return p36;
  }
  else if(prox=="p37"){
    return p37;
  }
  else if(prox=="p38"){
    return p38;
  }
  else if(prox=="p39"){
    return p39;
  }
  else if(prox=="p40"){
    return p40;
  }
  else if(prox=="p41"){
    return p41;
  }
  else if(prox=="p42"){
    return p42;
  }
  else if(prox=="p43"){
    return p43;
  }
  else if(prox=="p44"){
    return p44;
  }
  else if(prox=="p45"){
    return p45;
  }
  else if(prox=="p46"){
    return p46;
  }
  else if(prox=="p47"){
    return p47;
  }
  else if(prox=="p48"){
    return p48;
  }
  else if(prox=="p49"){
    return p49;
  }
  else if(prox=="p50"){
    return p50;
  }
  else if(prox=="p51"){
    return p51;
  }
  else if(prox=="p52"){
    return p52;
  }
  else if(prox=="p53"){
    return p53;
  }
  else if(prox=="p54"){
    return p54;
  }
  else if(prox=="p55"){
    return p55;
  }
  else if(prox=="p56"){
    return p56;
  }
  else if(prox=="p57"){
    return p57;
  }
  else if(prox=="p58"){
    return p58;
  }
  else if(prox=="p59"){
    return p59;
  }
  else if(prox=="p60"){
    return p60;
  }
  else if(prox=="p61"){
    return p61;
  }
  else if(prox=="p62"){
    return p62;
  }
  else if(prox=="p63"){
    return p63;
  }
  else if(prox=="p64"){
    return p64;
  }
  else if(prox=="p65"){
    return p65;
  }
  else if(prox=="p66"){
    return p66;
  }
  else if(prox=="p67"){
    return p67;
  }
  else if(prox=="p68"){
    return p68;
  }
  else if(prox=="p69"){
    return p69;
  }
  else if(prox=="p70"){
    return p70;
  }
  else if(prox=="p71"){
    return p71;
  }
  else if(prox=="p72"){
    return p72;
  }
}

class nodo {}

const p1 = new nodo();
p1.valor = "p1";
p1.prox = "p2";
p1.esquerda = "null";
p1.direita = "null";

const p2 = new nodo();
p2.valor = "p2";
p2.prox = "p3";
p2.esquerda = "null";
p2.direita = "null";
p2.fim = "p69";

const p3 = new nodo();
p3.valor = "p3";
p3.prox = "p4";
p3.esquerda = "10";
p3.direita = "20";
p3.fim = "p2";

const p4 = new nodo();
p4.valor = "p4";
p4.prox = "p5";
p4.esquerda = "9";
p4.direita = "19";
p4.fim = "p3";

const p5 = new nodo();
p5.valor = "p5";
p5.prox = "p6";
p5.esquerda = "8";
p5.direita = "18";
p5.fim = "p4";

const p6 = new nodo();
p6.valor = "p6";
p6.prox = "p7";
p6.esquerda = "7";
p6.direita = "17";
p6.fim = "p5";

const p7 = new nodo();
p7.valor = "p7";
p7.prox = "p8";
p7.esquerda = "6";
p7.direita = "16";
p7.fim = "p6";

const p8 = new nodo();
p8.valor = "p8";
p8.prox = "p9";
p8.esquerda = "5";
p8.direita = "15";
p8.fim = "p7";

const p9 = new nodo();
p9.valor = "p9";
p9.prox = "p10";
p9.esquerda = "4";
p9.direita = "14";
p9.fim = "p8";

const p10 = new nodo();
p10.valor = "p10";
p10.prox = "p11";
p10.esquerda = "3";
p10.direita = "13";
p10.fim = "p9";

const p11 = new nodo();
p11.valor = "p11";
p11.prox = "p12";
p11.esquerda = "2";
p11.direita = "12";
p11.fim = "p10";

const p12 = new nodo();
p12.valor = "p12";
p12.prox = "p13";
p12.esquerda = "1";
p12.direita = "11";
p12.fim = "p11";

const p13 = new nodo();
p13.valor = "p13";
p13.prox = "p14";
p13.esquerda = "null";
p13.direita = "null";

const p14 = new nodo();
p14.valor = "p14";
p14.prox = "p15";
p14.esquerda = "null";
p14.direita = "null";

const p15 = new nodo();
p15.valor = "p15";
p15.prox = "p16";
p15.esquerda = "null";
p15.direita = "null";

const p16 = new nodo();
p16.valor = "p16";
p16.prox = "p17";
p16.esquerda = "null";
p16.direita = "null";

const p17 = new nodo();
p17.valor = "p17";
p17.prox = "p18";
p17.esquerda = "31";
p17.direita = "41";
p17.fim = "p18";

const p18 = new nodo();
p18.valor = "p18";
p18.prox = "p19";
p18.esquerda = "32";
p18.direita = "42";
p18.fim = "p19";

const p19 = new nodo();
p19.valor = "p19";
p19.prox = "p20";
p19.esquerda = "33";
p19.direita = "43";
p19.fim = "p20";

const p20 = new nodo();
p20.valor = "p20";
p20.prox = "p21";
p20.esquerda = "34";
p20.direita = "44";
p20.fim = "p21";

const p21 = new nodo();
p21.valor = "p21";
p21.prox = "p22";
p21.esquerda = "35";
p21.direita = "45";
p21.fim = "p22";

const p22 = new nodo();
p22.valor = "p22";
p22.prox = "p23";
p22.esquerda = "36";
p22.direita = "46";
p22.fim = "p23";

const p23 = new nodo();
p23.valor = "p23";
p23.prox = "p24";
p23.esquerda = "37";
p23.direita = "47";
p23.fim = "p24";

const p24 = new nodo();
p24.valor = "p24";
p24.prox = "p25";
p24.esquerda = "38";
p24.direita = "48";
p24.fim = "p25";

const p25 = new nodo();
p25.valor = "p25";
p25.prox = "p26";
p25.esquerda = "39";
p25.direita = "49";
p25.fim = "p26";

const p26 = new nodo();
p26.valor = "p26";
p26.prox = "p27";
p26.esquerda = "40";
p26.direita = "50";
p26.fim = "p27";

const p27 = new nodo();
p27.valor = "p27";
p27.prox = "p28";
p27.esquerda = "null";
p27.direita = "null";
p27.fim = "p28";

const p28 = new nodo();
p28.valor = "p28";
p28.prox = "p29";
p28.esquerda = "null";
p28.direita = "null";
p28.fim = "p29";

const p29 = new nodo();
p29.valor = "p29";
p29.prox = "p30";
p29.esquerda = "null";
p29.direita = "null";
p29.fim = "p30";

const p30 = new nodo();
p30.valor = "p30";
p30.prox = "p31";
p30.esquerda = "null";
p30.direita = "null";
p30.fim = "p71";

const p31 = new nodo();
p31.valor = "p31";
p31.prox = "p32";
p31.esquerda = "60";
p31.direita = "70";
p31.fim = "p30";

const p32 = new nodo();
p32.valor = "p32";
p32.prox = "p33";
p32.esquerda = "59";
p32.direita = "69";
p32.fim = "p31";

const p33 = new nodo();
p33.valor = "p33";
p33.prox = "p34";
p33.esquerda = "58";
p33.direita = "68";
p33.fim = "p32";

const p34 = new nodo();
p34.valor = "p34";
p34.prox = "p35";
p34.esquerda = "57";
p34.direita = "67";
p34.fim = "p33";

const p35 = new nodo();
p35.valor = "p35";
p35.prox = "p36";
p35.esquerda = "56";
p35.direita = "66";
p35.fim = "p34";

const p36 = new nodo();
p36.valor = "p36";
p36.prox = "p37";
p36.esquerda = "55";
p36.direita = "65";
p36.fim = "p35";

const p37 = new nodo();
p37.valor = "p37";
p37.prox = "p38";
p37.esquerda = "54";
p37.direita = "64";
p37.fim = "p36";

const p38 = new nodo();
p38.valor = "p38";
p38.prox = "p39";
p38.esquerda = "53";
p38.direita = "63";
p38.fim = "p37";

const p39 = new nodo();
p39.valor = "p39";
p39.prox = "p40";
p39.esquerda = "52";
p39.direita = "62";
p39.fim = "p38";

const p40 = new nodo();
p40.valor = "p40";
p40.prox = "p41";
p40.esquerda = "51";
p40.direita = "61";
p40.fim = "p39";

const p41 = new nodo();
p41.valor = "p41";
p41.prox = "p42";
p41.esquerda = "null";
p41.direita = "null";

const p42 = new nodo();
p42.valor = "p42";
p42.prox = "p43";
p42.esquerda = "null";
p42.direita = "null";

const p43 = new nodo();
p43.valor = "p43";
p43.prox = "p44";
p43.esquerda = "null";
p43.direita = "null";

const p44 = new nodo();
p44.valor = "p44";
p44.prox = "p45";
p44.esquerda = "null";
p44.direita = "null";

const p45 = new nodo();
p45.valor = "p45";
p45.prox = "p46";
p45.esquerda = "71";
p45.direita = "81";
p45.fim = "p46";

const p46 = new nodo();
p46.valor = "p46";
p46.prox = "p47";
p46.esquerda = "72";
p46.direita = "82";
p46.fim = "p47";

const p47 = new nodo();
p47.valor = "p47";
p47.prox = "p48";
p47.esquerda = "73";
p47.direita = "83";
p47.fim = "p48";

const p48 = new nodo();
p48.valor = "p48";
p48.prox = "p49";
p48.esquerda = "74";
p48.direita = "84";
p48.fim = "p49";

const p49 = new nodo();
p49.valor = "p49";
p49.prox = "p50";
p49.esquerda = "75";
p49.direita = "85";
p49.fim = "p50";

const p50 = new nodo();
p50.valor = "p50";
p50.prox = "p51";
p50.esquerda = "76";
p50.direita = "86";
p50.fim = "p51";

const p51 = new nodo();
p51.valor = "p51";
p51.prox = "p52";
p51.esquerda = "77";
p51.direita = "87";
p51.fim = "p52";

const p52 = new nodo();
p52.valor = "p52";
p52.prox = "p53";
p52.esquerda = "78";
p52.direita = "88";
p52.fim = "p53";

const p53 = new nodo();
p53.valor = "p53";
p53.prox = "p54";
p53.esquerda = "79";
p53.direita = "89";
p53.fim = "p54";

const p54 = new nodo();
p54.valor = "p54";
p54.prox = "p55";
p54.esquerda = "80";
p54.direita = "90";
p54.fim = "p55";

const p55 = new nodo();
p55.valor = "p55";
p55.prox = "p56";
p55.esquerda = "null";
p55.direita = "null";
p55.fim = "p56";

const p56 = new nodo();
p56.valor = "p56";
p56.prox = "p57";
p56.esquerda = "null";
p56.direita = "null";
p56.fim = "p57";

const p57 = new nodo();
p57.valor = "p57";
p57.prox = "p58";
p57.esquerda = "null";
p57.direita = "null";
p57.fim = "p58";

const p58 = new nodo();
p58.valor = "p58";
p58.prox = "p59";
p58.esquerda = "null";
p58.direita = "null";
p58.fim = "x";

const p59 = new nodo();
p59.valor = "p59";
p59.prox = "p60";
p59.esquerda = "100";
p59.direita = "110";
p59.fim = "p58";

const p60 = new nodo();
p60.valor = "p60";
p60.prox = "p61";
p60.esquerda = "99";
p60.direita = "109";
p60.fim = "p59";

const p61 = new nodo();
p61.valor = "p61";
p61.prox = "p62";
p61.esquerda = "98";
p61.direita = "108";
p61.fim = "p60";

const p62 = new nodo();
p62.valor = "p62";
p62.prox = "p63";
p62.esquerda = "97";
p62.direita = "107";
p62.fim = "p61";

const p63 = new nodo();
p63.valor = "p63";
p63.prox = "p64";
p63.esquerda = "96";
p63.direita = "106";
p63.fim = "p62";

const p64 = new nodo();
p64.valor = "p64";
p64.prox = "p65";
p64.esquerda = "95";
p64.direita = "105";
p64.fim = "p63";

const p65 = new nodo();
p65.valor = "p65";
p65.prox = "p66";
p65.esquerda = "94";
p65.direita = "104";
p65.fim = "p64";

const p66 = new nodo();
p66.valor = "p66";
p66.prox = "p67";
p66.esquerda = "93";
p66.direita = "103";
p66.fim = "p65";

const p67 = new nodo();
p67.valor = "p67";
p67.prox = "p68";
p67.esquerda = "92";
p67.direita = "102";
p67.fim = "p66";

const p68 = new nodo();
p68.valor = "p68";
p68.prox = "null";
p68.esquerda = "91";
p68.direita = "101";
p68.fim = "p67";

const p69 = new nodo();
p69.valor = "p69";
p69.prox = "null";
p69.esquerda = "null";
p69.direita = "null";
p69.fim = "p70";

const p70 = new nodo();
p70.valor = "p70";
p70.prox = "null";
p70.esquerda = "null";
p70.direita = "null";
p70.fim = "p27";

const p71 = new nodo();
p71.valor = "p71";
p71.prox = "null";
p71.esquerda = "null";
p71.direita = "null";
p71.fim = "p72";

const p72 = new nodo();
p72.valor = "p72";
p72.prox = "null";
p72.esquerda = "null";
p72.direita = "null";
p72.fim = "p55";