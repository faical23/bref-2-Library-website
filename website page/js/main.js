var btn_more_offers= document.querySelector("#button_more_offers");
var second_offers =  document.querySelector("#second_offers_on");

var its_more = true;
function show_more_offers()
{
    if(its_more)
    {
        second_offers.id ="second_offers_off";
        btn_more_offers.innerHTML="Less";
        its_more =false;
    }
    else{
        second_offers.id ="second_offers_on";
        btn_more_offers.innerHTML="More";
        its_more =true;
    }

}

btn_more_offers.onclick = show_more_offers;
