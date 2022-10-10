function prc()
{
   /* var q=document.getElementById('quantity');
    var c=document.getElementById('cost');
var p;
document.getElementById('price').innerHTML=q*c;*/

var c=Number(document.f.cost.value);
var q=Number(document.f.quantity.value);
var p=c*q;
document.getElementById('price').innerHTML=p;
}
function key()
{
    var c1=Number(document.f.cost1.value);
    var q1=Number(document.f.quantity1.value);
    var p1=c1*q1;
    document.getElementById('price1').innerHTML=p1;
}
function ok()
{
var f=document.getElementById('skip').remove();
}
function del()
{
var f=document.getElementById('sleep').remove();
}
function del2()
{
    var f=document.getElementById('sleep2').remove();
}
function gn()
{
    var g =document.getElementById('cn').value;
    var n=g;
    document.getElementById('cnn').innerHTML= n;
}
function result(){
    var a =  document.getElementById("price").value;
    var b =  document.getElementById("price1").value;
    var total = parseInt(a) + parseInt(b); 

    document.getElementById("total").innerHTML= total;
}