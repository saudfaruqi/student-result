function calculate()
{

        var a =parseInt( document.getElementById('bkOne').value);
        var b =parseInt( document.getElementById('bkTwo').value);
        var c =parseInt( document.getElementById('bkThree').value);
        var d =parseInt( document.getElementById('bkFour').value);
        var e =parseInt( document.getElementById('bkFive').value);

    if(a>100 || b>100 || c>100 || d>100 || e>100)
    {
        alert("Please enter correct number");
    }
    else
    {
        var obtain=a+b+c+d+e;
        document.getElementById("obtain").innerHTML=obtain;

        var per=(obtain/500)*100;
        document.getElementById("per").innerHTML=per;

        if(a>50 && b>50 && c>50 && d>50 && e>50)
        {
            document.getElementById("remark").innerHTML="<span style='color:#292'>Pass</span>";
        }
        else
        {
            document.getElementById("remark").innerHTML="<span style='color:red'>Fail</span>";
        }


       
        if (per>80)
        {
         document.getElementById("grade").textContent="A";

        }
        else if (per>70)
        {
         document.getElementById("grade").textContent="B";
        }
        else if (per>60)
        {
         document.getElementById("grade").textContent="C";
        }
        else if (per>50)
        {
         document.getElementById("grade").textContent="D";
        }
        else if (per<50)
        {
         document.getElementById("grade").textContent="F";
        }
        


    }
   

} 