let main_img=document.getElementById('main_img');
let img1=document.getElementById('img1');
let img2=document.getElementById('img2');
let img3=document.getElementById('img3');
let img4=document.getElementById('img4');
let minus=document.getElementById('minus');
let plus=document.getElementById('plus');
let num=document.getElementById('num');
let mac=document.getElementsByClassName("mac");


main_img.src='shose1.jpg';
img1.style.border="3px solid orangered";

for(let i=0; i<mac.length; i++){
    mac[i].addEventListener('click',function(){
        for(let n=0 ; n<mac.length ;n++){
            mac[n].style.border="none";

        }
        main_img.src=mac[i].src;
        mac[i].style.border="3px solid orangered";
    })
}


let count=0;

plus.addEventListener('click',function(){
    count++;
    num.innerHTML=count;

})



minus.addEventListener('click',function(){
    if (count!=0){
        count--;
        num.innerHTML=count;

    }
    

})




