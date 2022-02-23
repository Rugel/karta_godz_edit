const data =new Date();
let rok=data.getFullYear();
const miesiac=data.getMonth();
document.getElementById('edit').value=rok+'-'+(miesiac+1<10?'0'+(miesiac+1):miesiac+1);

function gen()
{   document.getElementById('pbu').innerHTML=document.getElementById('ibu').value;
    document.getElementById('prac').innerHTML+="<input id ='pracownik' type='text'/>";
    document.getElementById('stan').innerHTML+="<input id='stanowisko' type='text'/>";
const text=document.getElementById("edit").value; 
const year=text.slice(0,4)*1;
const month=text.slice(5,7)*1;
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
document.getElementById("nag").innerHTML+="<p class='f1'>"+rok+"    "+miesiac+"</p>"+"</br>"+"<p id='but'><button id='zap' onclick=zapisz()>📝 Zapisz</></p>";
document.getElementById('nag').innerHTML+="<input id='cleaner' type='button' value='🚮 Oczyść' onclick='clean()'></input>";
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
        document.getElementById("tabela").innerHTML +="<tr class='suncolor'><td >"+i+"."+"</td><td >"+i+"."+nummie+"."+rok+`</td><td id=tdod${i}><input id=od${i} type='time' value=${localStorage.getItem(`sod${i}`)}></input></td><td id=tddo${i}><input id=do${i} type='time' value=${localStorage.getItem(`sdo${i}`)}></input></td><td id=s${i}></td><td > </td><td id=tduw${i}><input class='uwagi' id=uw${i} type='text' value=${localStorage.getItem(`suw${i}`)}></input></td></tr>`
    }    
    
       
  else if(i==sobota||i==sobota+7||i==sobota+14||i==sobota+21||i==sobota+28){
        document.getElementById("tabela").innerHTML +="<tr class='satcolor'><td style='width:5%'>"+i+"."+"</td><td >"+i+"."+nummie+"."+rok+`</td><td id=tdod${i}><input id=od${i} type='time' value=${localStorage.getItem(`sod${i}`)}></input></td><td id=tddo${i}><input id=do${i} type='time' value=${localStorage.getItem(`sdo${i}`)}></input></td><td id=s${i}></td><td > </td><td id=tduw${i}><input class='uwagi' id=uw${i} type='text' value=${localStorage.getItem(`suw${i}`)}></input></td></tr>`
    }                                                                                                    
    
    else{
        document.getElementById("tabela").innerHTML +=`<tr><td>${i}.</td><td>${i}.${nummie}.${rok}</td><td id=tdod${i}><input id=od${i} type='time' value=${localStorage.getItem(`sod${i}`)}></input></td><td id=tddo${i}><input id=do${i} type='time' value=${localStorage.getItem(`sdo${i}`)}></input></td><td id=s${i}></td><td > </td><td id=tduw${i}><input class='uwagi' id=uw${i} type='text' value=${localStorage.getItem(`suw${i}`)}></input></td></tr>`
        }
    
     }
     document.getElementById("tabela").innerHTML +="<tr><td class='noborder'></td><td class='noborder'></td><td class='noborder'></td><td class='noborder'>"+"RAZEM"+"</td><td id=suma ></td><td class='noborder'></td><td class='noborder'></td></tr>"
  }   

  
  function zapisz(){
const pracownik=document.getElementById('pracownik').value;
const stanowisko=document.getElementById('stanowisko').value;
document.getElementById('but').innerHTML='<button id="druk" onclick=window.print()>🖨️ Drukuj</button>'
document.getElementById('prac').innerHTML=`PRACOWNIK: <span id='empl'>${pracownik}</span>`;
document.getElementById('stan').innerHTML=`STANOWISKO: <span id='jobpos'>${stanowisko}</span>`;
document.title=`${pracownik} (godz_pracy)`;

//funkcja zamieniająca godzinę w formacie --:-- na liczbę
const change=function(x){
    const sign1=x.charAt(0);
    const sign2=x.charAt(1);
    const sign3=x.charAt(3);
    const sign4=x.charAt(4);
let num=Math.round(parseFloat(sign3+sign4)/60*100);
num=String(num);
if(num<10){num='0'+num};
const ctime=parseFloat(sign1+sign2+'.'+num);
return ctime;
}

//pętla zapisująca wprowadzone dane oraz wyliczająca liczę godzin z różnicy i ich sumowanie
let k;
let t1;
let t2;
let result;
let sum=0;
for(k=1; k<=l; k++){
    let odvalue=document.getElementById(`od${k}`).value;
    let dovalue=document.getElementById(`do${k}`).value;
    const uwvalue=document.getElementById(`uw${k}`).value;
    t1=change(odvalue);
    t2=change(dovalue);
    if(t2<=t1){t2=t2+24};
    if(isNaN(t1)||isNaN(t2)){t1=0; t2=0};
        result=Math.round((t2-t1)*100)/100;
        sum=sum+result;
    const res=document.getElementById(`s${k}`);
    if(result){res.innerHTML=result}else{res.innerHTML=''};
    document.getElementById(`tdod${k}`).innerHTML=odvalue;
    document.getElementById(`tddo${k}`).innerHTML=dovalue;
    document.getElementById(`tduw${k}`).innerHTML=document.getElementById(`uw${k}`).value.toUpperCase();

    //zapis do Storage
   localStorage.setItem(`sod${k}`, odvalue);
   localStorage.setItem(`sdo${k}`, dovalue);
   localStorage.setItem(`suw${k}`, uwvalue);
     }
// zapis sumy godzin do komórki tabeli
     document.getElementById('suma').innerHTML=Math.round(sum*100)/100;
    }
    
    
    function clean(){
    if(confirm("Czy na pewno chcesz usunąć zapamiętane DANE dla formularza?")){localStorage.clear();
    for(j=1; j<=l; j++){
        localStorage.setItem(`suw${j}`, '');
        localStorage.setItem(`sod${j}`, '');
        localStorage.setItem(`sdo${j}`, '');
    }}
                    };