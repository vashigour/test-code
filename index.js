let ary = [20,25,30,53];
for(var a=0; a<4 ;a++){
document.write(ary[a] +"<br>");
}
function clicked(){
   var a =5;
   var b =10;
   document.write(a+b);
}
function hover(){
    document.write('you are hover here')
 }
container.addEventListener('click',function(){
     document.write("clicked");
})
function date(){
    date = new Date();
    document.write(date);
}
 let age = 24;
if (age>18){
    document.write('you can drive')
}else{
    document.write('you cannot drive')
}
