
let kol=0;
if(localStorage.getItem("KEY")!=null){
    kol=localStorage.getItem("KEY");
}

document.getElementById("MF").addEventListener("submit",function(event){
    event.preventDefault();
    let stars="0";
    let text="Без текста :(";//если без текста
    let TIME=new Date();
    
    document.getElementsByName("REV").forEach(function(textarea){
        if(textarea.value){//если текст есть
            text=textarea.value;
        }
    });
    document.getElementsByName("rating").forEach(function(input){
        if(input.checked){
            stars=input.value;
        }
    });
 
    
  
    localStorage.setItem("TX"+kol,text);
    localStorage.setItem("ST"+kol,stars);
    localStorage.setItem("TM"+kol,TIME);
    kol++;
    localStorage.setItem("KEY",kol);
  
    Print(localStorage.getItem("KEY"));
    
});
    
    
let Print=function(n){
    if(kol<=4 && kol!=0){
        document.getElementsByTagName("textarea")[0].placeholder="Тут пара отзывов. Ещё Один?";//по Id и Name не работает
    }else{
        if(kol>4){
            document.getElementsByTagName("textarea")[0].placeholder="Много отзывов. Ешё Один?";
        }
    }
    let Fblock=document.getElementsByClassName("MR")[0];
    Fblock.innerHTML="";
    let g=1;
    for(let j=0;j<n;j++){
        if(g==1){
            g==0;
           
        }else{
            let Fblock=document.getElementsByClassName("w"+(j-1))[0];
            Fblock.innerHTML="";
        } 
    
    let Sblock=document.createElement("div");
    let Tblock=document.createElement("div");
    let Pblock=document.createElement("p");
    Pblock.innerText=localStorage.getItem("TX"+j);
    let STblock=document.createElement("div");
    let TIMEblock=document.createElement("div");
    TIMEblock.innerText=localStorage.getItem("TM"+j);
    TIMEblock.classList.add("TIME-R");



    let arr=[];
    for(let i=0;i<5;i++){
        arr[i]=document.createElement("div");
        
        if(i<localStorage.getItem("ST"+j)){
            arr[i].classList.add("STRG");
        }else{
            arr[i].classList.add("STR");
        }
        STblock.appendChild(arr[i]);
        STblock.style.height="29px";
        STblock.style.width="145px";
    }
    Tblock.appendChild(Pblock);
    Tblock.classList.add("TR");

    Sblock.appendChild(Tblock);
    Sblock.appendChild(STblock);
    Sblock.appendChild(TIMEblock);
    Sblock.classList.add("SR");
    Sblock.classList.add("w"+j);
    Fblock.appendChild(Sblock);
    
    }
}
Print(localStorage.getItem("KEY"));

if(document.documentElement.clientWidth>=375 && document.documentElement.clientWidth<=768){
    document.getElementsByTagName("textarea")[0].cols=""+Math.floor((document.documentElement.clientWidth/100)*10-5);
    console.log(Math.floor((document.documentElement.clientWidth/100)*10-5));
}else{
    if(document.documentElement.clientWidth>=768){
        document.getElementsByTagName("textarea")[0].cols="155";
    }else{
        if(document.documentElement.clientWidth<=375){
            document.getElementsByTagName("textarea")[0].cols=""+Math.floor((document.documentElement.clientWidth/100)*10-5);
            console.log(Math.floor((document.documentElement.clientWidth/100)*10-5));
        }
    }
}
