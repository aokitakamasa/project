//document.getElementById("ekran");
let firstN = true;

function pressButton(valuePressButton)
{
    if(firstN)
    {
        document.getElementById("vvodFirst").value+=valuePressButton;
    }
    else
    {
        document.getElementById("vvodTwo").value+=valuePressButton;
    }
}
function pressButtonZnak(valuePressButton)
{
    document.getElementById("vvodZnak").value=valuePressButton;
}
function rezult()
{
    switch(document.getElementById("vvodZnak").value)
    {
        case '+':
            document.getElementById("ekran").value=Number.parseFloat(document.getElementById("vvodFirst").value)+Number.parseFloat(document.getElementById("vvodTwo").value);
            break;
        case '-':           
            document.getElementById("ekran").value=Number.parseFloat(document.getElementById("vvodFirst").value)-Number.parseFloat(document.getElementById("vvodTwo").value);
            break;
        case '*':
            document.getElementById("ekran").value=Number.parseFloat(document.getElementById("vvodFirst").value)*Number.parseFloat(document.getElementById("vvodTwo").value);
            break;
        case '/':
            document.getElementById("ekran").value=Number.parseFloat(document.getElementById("vvodFirst").value)/Number.parseFloat(document.getElementById("vvodTwo").value);
            break;
    }
    
}
function Clear()
{
    document.getElementById("ekran").value="";
    document.getElementById("vvodFirst").value=0;
    document.getElementById("vvodTwo").value=0;
}
function firstOrSecond(bol)
{
    if(bol)  {  firstN=true;  }
    else   {   firstN=false; }
}
