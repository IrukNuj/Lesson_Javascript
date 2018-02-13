document.writeln(1+10);//そのまま
document.writeln("1+10");//文字列だから
var today = new Date();
document.writeln(1234+today);//型が違う

var x = 3;
var y = x++;
document.writeln(x);//4(y=3した後にx=x+1
document.writeln(y);

var x = 3;
var y = ++x;
document.writeln(x);
document.writeln(y);

