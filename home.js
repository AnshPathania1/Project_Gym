// form click 

document.getElementById('button').addEventListener('click',function(){
    document.querySelector('.register').style.display="flex"
});
document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.register').style.display="none"
});
