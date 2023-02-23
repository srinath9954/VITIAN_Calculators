function cal()
{
    var n1=parseFloat(document.getElementById('n1').value);
    var n2=parseFloat(document.getElementById('n2').value);
    var n=document.getElementById('n').value=n1+n2;

    var m1=parseFloat(document.getElementById('m1').value);
    var m2=parseFloat(document.getElementById('m2').value);
    var m=document.getElementById('m').value=((m1*n1)/n)+((m2*n2)/n);

    var a1=parseFloat(document.getElementById('a1').value);
    var a2=parseFloat(document.getElementById('a2').value);
    var a=document.getElementById('a').value=((a1*n1)/n)+((a2*n2)/n);

    var ss=20+a;
    var sa=7+a;
    var sb=a-7;
    var sc=a-13;
    var sd=a-20;
    var se=a-27;

    if(n2!=0)
    {
        if(m2 <50 || m<se)
        {
            var result=document.getElementById('result').value="F or N GRADE";
        }
        else if(m>=se && m<sd)
        {
            var result=document.getElementById('result').value="E GRADE";
        }
        else if(m>=sd && m<sc)
        {
            var result=document.getElementById('result').value="D GRADE";
        }
        else if(m>=sc && m<sb)
        {
            var result=document.getElementById('result').value="C GRADE";
        }
        else if(m>=sb && m<sa)
        {
            var result=document.getElementById('result').value="B GRADE";
        }
        else if(m>sa && m<ss)
        {
            var result=document.getElementById('result').value="A GRADE";
        }
        else if(m>=ss && m>=80)
        {
            var result=document.getElementById('result').value="S GRADE";
        }
        else if(m>=ss && m<80)
        {
            var result=document.getElementById('result').value="A GRADE";
        }
    }
    else
    {
        if(m<se)
        {
            var result=document.getElementById('result').value="F or N GRADE";
        }
        else if(m>=se && m<sd)
        {
            var result=document.getElementById('result').value="E GRADE";
        }
        else if(m>=sd && m<sc)
        {
            var result=document.getElementById('result').value="D GRADE";
        }
        else if(m>=sc && m<sb)
        {
            var result=document.getElementById('result').value="C GRADE";
        }
        else if(m>=sb && m<sa)
        {
            var result=document.getElementById('result').value="B GRADE";
        }
        else if(m>sa && m<ss)
        {
            var result=document.getElementById('result').value="A GRADE";
        }
        else if(m>=ss && m>=80)
        {
            var result=document.getElementById('result').value="S GRADE";
        }
        else if(m>=ss && m<80)
        {
            var result=document.getElementById('result').value="A GRADE";
        }
    }


}
