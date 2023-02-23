function cal()
{
    var tc=parseFloat(document.getElementById('tc').value);
    var lc=parseFloat(document.getElementById('lc').value);
    var tt=parseFloat(document.getElementById('tt').value);
    var lt=parseFloat(document.getElementById('lt').value);
    var ta=parseFloat(document.getElementById('ta').value);
    var la=parseFloat(document.getElementById('la').value);
    var sa=parseFloat(document.getElementById('sa').value);
    var sc=parseFloat(document.getElementById('sc').value);
    var st=parseFloat(document.getElementById('st').value);

    if(lc>=0 && lt>=0 && la>=0)
    {
        var total1=lc*14;
        var tot1=total1*75/100;
        if(tot1%1==0)
        {
            var tot1=parseInt(total1*75/100);
        }
        else
        {
            var tot1=parseInt(total1*75/100)+1;
        }
        var y=lt-la;
        var ye=total1-tot1-y;
        var at=document.getElementById('at').value=(la/lt)*100;
        var r=document.getElementById('r').value=ye;
    }




    if(tc>0 && tt>0 && ta>0)
    {
        var total=tc*14;
        var tot=total*75/100;
        if(tot%1==0)
        {
            var tot=parseInt(total*75/100);
        }
        else
        {
            var tot=parseInt(total*75/100)+1;
        }
        var x=tt-ta;
        var xe=total-tot-x;
        var at=document.getElementById('at').value=(ta/tt)*100;
        var r=document.getElementById('r').value=xe;

    }

    if(sc>=0 && st>=0 && sa>=0)
    {
        var total=sc*42;
        var tot=total*75/100;
        if(tot%1==0)
        {
            var tot=parseInt(total*75/100);
        }
        else
        {
            var tot=parseInt(total*75/100)+1;
        }
        var x=st-sa;
        var xe=total-tot-x;
        var at=document.getElementById('at').value=(sa/st)*100;
        var r=document.getElementById('r').value=xe;

    }




}
