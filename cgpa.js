function cgpa()
{
    var g1=parseFloat(document.getElementById('g1').value);
    var g2=parseFloat(document.getElementById('g2').value);
    var g3=parseFloat(document.getElementById('g3').value);
    var g4=parseFloat(document.getElementById('g4').value);
    var g5=parseFloat(document.getElementById('g5').value);
    var g6=parseFloat(document.getElementById('g6').value);
    var g7=parseFloat(document.getElementById('g7').value);
    var g8=parseFloat(document.getElementById('g8').value);
    var g9=parseFloat(document.getElementById('g9').value);
    var g10=parseFloat(document.getElementById('g10').value);

    var c1=parseFloat(document.getElementById('c1').value);
    var c2=parseFloat(document.getElementById('c2').value);
    var c3=parseFloat(document.getElementById('c3').value);
    var c4=parseFloat(document.getElementById('c4').value);
    var c5=parseFloat(document.getElementById('c5').value);
    var c6=parseFloat(document.getElementById('c6').value);
    var c7=parseFloat(document.getElementById('c7').value);
    var c8=parseFloat(document.getElementById('c8').value);
    var c9=parseFloat(document.getElementById('c9').value);
    var c10=parseFloat(document.getElementById('c10').value);

    var gpa=(g1*c1)+(g2*c2)+(g3*c3)+(g4*c4)+(g5*c5)+(g6*c6)+(g7*c7)+(g8*c8)+(g9*c9)+(g10*c10);
    var credit=c1+c2+c3+c4+c5+c6+c7+c8+c9+c10;
    var result=document.getElementById('result').value=gpa/credit;
}
