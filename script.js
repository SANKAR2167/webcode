let div=document.createElement("div");
div.setAttribute("class", "main1");

let formgroup=document.createElement("div");
formgroup.setAttribute("class", "form-group");

let input=document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("class", "form-control");
input.setAttribute("id", "main");
input.setAttribute("placeholder", "Enter Name");
input.style.width="420px";

let button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.style.marginLeft="160px";
button.style.marginTop="20px";
button.addEventListener("click", foo);

let result=document.createElement("div");
result.classList.add("active", "res");

let br=document.createElement("br")

let top1=document.createElement("div");
top1.setAttribute("id","active");
let prob1=document.createElement("div");
prob1.setAttribute("id","active");
let top2=document.createElement("div");
top2.setAttribute("id","active");
let prob2=document.createElement("div");
prob1.setAttribute("id","active");

result.append(top1,prob1,br,top2,prob2)
formgroup.append(input,button,result);
div.append(formgroup);
document.body.append(div);

async function foo(){
    try {
    let name=document.getElementById("main").value;
    console.log(name);
    let res=await fetch(`https://api.nationalize.io/?name=${name}`);
    let res1= await res.json();
    var c1= res1.country[0];
    var c2= res1.country[1];
    console.log(res1.country);
    
    console.log(c1.country_id);
    console.log(c1.probability);
    console.log(c2.country_id);
    console.log(c2.probability);
    // console.log(res1[index].Deaths);

    
    top1.innerHTML=`Country by No 1 Position : ${c1.country_id}`;
    prob1.innerHTML=`Probability of ${c1.country_id} Country : ${c1.probability}`;
    top2.innerHTML=`Country by No 2 Position:${c2.country_id}`;
    prob2.innerHTML=`Probability of ${c2.country_id} Country :${c2.probability}`;
    death.innerHTML=`Total Death cases:${res1[index].Deaths}`;
    } catch (error) {
      console.log(error);
    }
    
    }