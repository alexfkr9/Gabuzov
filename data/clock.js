var tm=new Date();
var hs=tm.getHours();
var ms=tm.getMinutes();
var ss=tm.getSeconds();
function startTime(){var tm=new Date();
var h=tm.getHours();
var m=tm.getMinutes();
var s=tm.getSeconds();
m=checkTime(m);
s=checkTime(s);
ss=ss+1;
if(ss>59){ms=ms+1;ss=0;}if(ms>59){hs=hs+1;ms=0;}if(hs>23){hs=0;}mV=(ms<10)?'0'+ms:ms;sV=(ss<10)?'0'+ss:ss;
document.getElementById('clock').innerHTML=''+h+':'+m+':'+s+'<br>';
t=setTimeout('startTime()',1000);}
function checkTime(i){if (i<10){i='0'+i;}return i;}startTime()