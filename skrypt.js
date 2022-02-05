function gen()
{





  
const text=document.getElementById("edit").value; 

const year=text.slice(0,4)*1;

const month=text.slice(5,7)*1;

const data = new Date();
let rok=data.getFullYear();
const m=month+((year-rok)*12);
rok=year;

let miesiac = (data.setMonth(m-1));
const dzen=data.setDate(1);

 miesiac=data.getMonth();
 let nummie=miesiac+1;
 if(nummie<10){
     nummie='0'+nummie;
 }
const day=data.getDay();
 const sobota=7-day;
 const niedziela=1-day;

switch(miesiac){
    case 0 : miesiac="styczeń";
 break;
 
    case 1 : miesiac="luty";
 break;
 
 case 2 : miesiac="marzec";
 break;
 
 case 3 : miesiac="kwiecień";
 break;
 
 case 4 : miesiac="maj";
 break;
 
 case 5 : miesiac="czerwiec";
 break;
 
 case 6 : miesiac="lipiec";
 break;
 
 case 7 : miesiac="sierpień";
 break;
 
 case 8 : miesiac="wrzesień";
 break;
 
 case 9 : miesiac="październik";
 break;
 
 case 10 : miesiac="listopad";
 break;
 
 default : miesiac="grudzień";


 };
 
 


document .getElementById ("wybor").innerHTML ="";
document.getElementById("nag").innerHTML+="<p class='f1'>"+rok+"    "+miesiac+"</p>"+"<p id='but'><button id='zap' onclick=zapisz()>👌 Zapisz</></p>";
if(miesiac=="luty"&&rok%400==0){
    l=29
}

else if(miesiac=="luty"&&rok%100==0){
    l=28
}

else if(miesiac=="luty"&&rok%4==0){
    l=29
}
else if(miesiac=="luty"&&rok%4!=0){
    l=28
}
 
 else if(miesiac =="styczeń"||miesiac=="marzec"||miesiac=="maj"||miesiac=="lipiec"||miesiac=="sierpień"||miesiac=="październik"||miesiac=="grudzień"){
    l=31
}
 else{
     l=30
 }

for(i=1; i<=l; i++){
 
       if(i==niedziela||i==niedziela+7||i==niedziela+14||i==niedziela+21||i==niedziela+28||i==niedziela+35||i==1&&(miesiac=="styczeń"||miesiac=="maj"||miesiac=="listopad")||i==6&&miesiac=="styczeń"||i==3&&miesiac=="maj"||i==15&&miesiac=="sierpień"||i==11&&miesiac=="listopad"||i==25&&miesiac=="grudzień"||i==26&&miesiac=="grudzień") {
        document.getElementById("tabela").innerHTML +="<tr class='suncolor'><td >"+i+"."+"</td><td >"+i+"."+nummie+"."+rok+`</td><td id=tdod${i}><input id=od${i} type='time' value='07:00'/></td><td id=tddo${i}><input id=do${i} type='time' value='15:00'/></td><td id=s${i}></td><td > </td><td > </td></tr>`
    }    
    
       
  else if(i==sobota||i==sobota+7||i==sobota+14||i==sobota+21||i==sobota+28){
        document.getElementById("tabela").innerHTML +="<tr class='satcolor'><td style='width:5%'>"+i+"."+"</td><td >"+i+"."+nummie+"."+rok+`</td><td id=tdod${i}><input id=od${i} type='time' value='07:00'/></td><td id=tddo${i}><input id=do${i} type='time' value='15:00'/></td><td id=s${i}></td><td > </td><td > </td></tr>`
    }                                                                                                    
    
    else{
        document.getElementById("tabela").innerHTML +="<tr><td>"+i+"."+"</td><td>"+i+"."+nummie+"."+rok+`</td><td id=tdod${i}><input id=od${i} type="time" value='07:00'/></td><td id=tddo${i}><input id=do${i} type="time" value='15:00'/></td><td id=s${i}></td><td > </td><td > </td></tr>`
        }
    
     }
     document.getElementById("tabela").innerHTML +="<tr><td class='noborder'></td><td class='noborder'></td><td class='noborder'></td><td class='noborder'>"+"RAZEM"+"</td><td ></td><td class='noborder'></td><td class='noborder'></td></tr>"
  }   

  
  function zapisz(){
const pracownik=document.getElementById('pracownik').value;
const stanowisko=document.getElementById('stanowisko').value;
document.getElementById('but').innerHTML='<button id="druk" onclick=window.print()>🖨️ Drukuj</button>'
document.getElementById('prac').innerHTML=`PRACOWNIK: ${pracownik}`;
document.getElementById('stan').innerHTML=`STANOWISKO: ${stanowisko}`;
let k;
for(k=1; k<=l; k++){
   // document.getElementById(`s${k}`).innerHTML=document.getElementById(`do${k}`).value-document.getElementById(`od${k}`).value;
    document.getElementById(`tdod${k}`).innerHTML=document.getElementById(`od${k}`).value;
    document.getElementById(`tddo${k}`).innerHTML=document.getElementById(`do${k}`).value;
    
}
  }