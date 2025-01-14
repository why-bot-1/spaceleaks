
function numberChange(){
    let numbers =[100, 300,-100,900, 150, -250, 400, 50, -10, 30, 40,-400, 500, 200,-30, 300, 20, 400, 700, -1000, -2000,900, 150, -250, 400, 50, -10, 30, 40,-400, 500, 200,-30, 300, 20];
    
    let randomNumber= Math.floor(Math.random()*numbers.length);
    const statistic = numbers[randomNumber]


    document.getElementById("people").innerHTML=   `${598900+statistic}+`;
    document.getElementById("peoplee").innerHTML=`$${5496+statistic}M+`;



}
setInterval(numberChange, 400);

document.getElementById("burger-menu").onclick = function(){
    
    document.getElementById("burger-menu").style.display="none";
    document.getElementById("close-menu").style.display="inline-block";
    document.getElementById("list-1-bar").style.display="inline-block";
}
document.getElementById("close-menu").onclick = function(){
document.getElementById("burger-menu").style.display="inline-block"
document.getElementById("close-menu").style.display="none";
document.getElementById("list-1-bar").style.display="none"


}