

//side nav
document.querySelector('.menu').addEventListener('click',function(){
    document.querySelector('.sidebar').style.display="flex"
});
document.querySelector('.close_btn').addEventListener('click',function(){
    document.querySelector('.sidebar').style.display="none"
});




// form click 

document.getElementById('button').addEventListener('click',function(){
    document.querySelector('.register_layer').style.display="flex"
});
document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.register_layer').style.display="none"
});
document.getElementById('button').addEventListener('click',function(){
    document.querySelector('.register').style.display="flex"
});
document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.register').style.display="none"
});
