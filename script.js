let score=0;
document.onkeydown = function(e)
{
    console.log("key code is", e.keyCode)
    if(e.keyCode==38){
        boy =document.querySelector('.boy');
        boy.classList.add('animateboy');
        setTimeout(() =>{
            boy.classList.remove('animateboy')
        },1210);
    }
    if(e.keyCode==39){
        boy =document.querySelector('.boy');
        boy.style.transform='rotateY(360deg)';
        boyx= parseInt(window.getComputedStyle(boy,null).getPropertyValue('left'));
        boy.style.left=boyx+50+"px";
        
    }
    if(e.keyCode==37){
        
        boy =document.querySelector('.boy');
        boy.style.transform='rotateY(180deg)';
        boyx= parseInt(window.getComputedStyle(boy,null).getPropertyValue('left'));
        boy.style.left=(boyx-50)+"px";
      
    }
}
setInterval(() => {
    boy= document.querySelector('.boy');
    gameover= document.querySelector('.gameover');
    dog = document.querySelector('.dog');

    let bx = parseInt(window.getComputedStyle(boy,null).getPropertyValue('left'));
    let by = parseInt(window.getComputedStyle(boy,null).getPropertyValue('bottom'));
    let dx = parseInt(window.getComputedStyle(dog,null).getPropertyValue('left'));
    let dy = parseInt(window.getComputedStyle(dog,null).getPropertyValue('bottom'));
    let x=Math.abs(bx-dx);
    let y= Math.abs(by-dy);
    let inc=0;
    if(x<150 && y<70){
        gameover.style.visibility='visible';
        dog.classList.remove('dogy');
        // dog.style.animationplaystate="paused";
        inc = 1;
    }
    else if(x<150&&y>70&&c==0 && inc==0)
    {
        c=1;
        score+=1;
        update ( score);
        let curdur=parseFloat(window.getComputedStyle(dog,null).getPropertyValue('animation-duration'));
        console.log(curdur);
        dur=curdur-1;
        console.log(dur);
        dog.style.animationduration = dur + "s";
        // console.log("hello" + score)
    }
    if(x>150){
        c=0;
    }
    
},100);
function update (score){
    sc.innerHTML = " score:" + score;
}