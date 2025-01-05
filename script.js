let btn=document.querySelector(".list-button");
let dp=document.querySelector(".dropdwn");
let s1height=document.querySelector(".bodys1");

let count=true;
btn.addEventListener("click" ,()=>{
       
    if(count == false){
        console.log("successgfgf700");
        dp.style.display="none";
        s1height.style.height="700px";
        count=true;
    }else{
        console.log("successgfgf800");
        dp.style.display="block";
        s1height.style.height="800px";
        count=false;
    }

});

    