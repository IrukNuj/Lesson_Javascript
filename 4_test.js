window.alert('こんにちは、Javascript!\r\n頑張っていきましょう!');

var ary =['Javascript','Ajax','ASP.NET'];
document.writeln(ary[1]);

var ary =['Javascript',['jQuery','Ajax'],'ASP.NET'];
document.writeln(ary[1][0]);//配列の入れ子に配列をもたせることも可能！

var obj ={x:1,y:2,z:3};
document.writeln(obj.x);//ドット演算子
document.writeln(obj['x']);//プラケット構文

/*　obj.123　は識別子の命名規則に則っていないので使えないが、
    プラケット構文でobj['123']とかけば文字列とみなして指定されるのでok!*/

var x;
var obj = {a:123};
document.writeln(x);
document.writeln(obj.b);
