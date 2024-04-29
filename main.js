// -------- Select the active paln--------------------

// Get the container plans
let allPlans = document.getElementsByClassName("plans")[0];

// Get all divs with class="paln-detail" inside the plans
var allDetails = allPlans.getElementsByClassName("plan-detail");

// Loop through the buttons and add the active class to the current/clicked button
for (const detail of allDetails) {
    detail.addEventListener("click", function(){
        let current = document.getElementsByClassName("active-plan");
        current[0].className = current[0].className.replace(" active-plan", "");
        console.log(this);
        this.className += " active-plan";

    });
}

// -------- /Select the active paln--------------------


//Toggle month - year
let switchKey = document.getElementsByClassName("form-check-input")[0];

let month = document.getElementsByClassName("monthly")[0];
let year = document.getElementsByClassName("yearly")[0];
let price1 = document.getElementById("price1");
let price2 = document.getElementById("price2");
let price3 = document.getElementById("price3");

switchKey.addEventListener("change", function(){
if(switchKey.checked == true){
    //month
    month.style.color = "#11325A";
    year.style.color = "#a09fa6";
    price1.innerText="$9/شهر ";
    price2.innerText="$12/شهر ";
    price3.innerText="$15/شهر ";

}
else{
    //year
    month.style.color = "#a09fa6";
    year.style.color = "#11325A";
    price1.innerText="$100/سنة";
    price2.innerText="$165/سنة";
    price3.innerText="$180/سنة";
}
});
