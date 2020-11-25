var div1 = document.createElement("div");
var att = document.createAttribute("id");
att.value = "dd";
div1.setAttributeNode(att);
var input = document.createElement("input");
var att1 = document.createAttribute("id");
att1.value = "solution";
input.setAttributeNode(att1);
var element = document.getElementsByTagName("body")[0];
var table1 = document.createElement("table");
table1.setAttribute('id', 'tables')

var tr1 = document.createElement("tr");
var tr2 = document.createElement("tr");
var tr3 = document.createElement("tr");
var tr4 = document.createElement("tr");
var tr5 = document.createElement("tr");

var td1 = document.createElement("td");
var button1 = document.createElement("button");
var text1 = document.createTextNode("C");

var td2 = document.createElement("td");
var button2 = document.createElement("button");
var text2 = document.createTextNode("(");

var td3 = document.createElement("td");
var button3 = document.createElement("button");
var text3 = document.createTextNode(")");

var td4 = document.createElement("td");
var button4 = document.createElement("button");
var text4 = document.createTextNode("/");

var td5 = document.createElement("td");
var button5 = document.createElement("button");
var text5 = document.createTextNode("7");

var td6 = document.createElement("td");
var button6 = document.createElement("button");
var text6 = document.createTextNode("8");

var td7 = document.createElement("td");
var button7 = document.createElement("button");
var text7 = document.createTextNode("9");

var td8 = document.createElement("td");
var button8 = document.createElement("button");
var text8 = document.createTextNode("*");

var td9 = document.createElement("td");
var button9 = document.createElement("button");
var text9 = document.createTextNode("4");

var td10 = document.createElement("td");
var button10 = document.createElement("button");
var text10 = document.createTextNode("5");

var td11 = document.createElement("td");
var button11 = document.createElement("button");
var text11 = document.createTextNode("6");

var td12 = document.createElement("td");
var button12 = document.createElement("button");
var text12 = document.createTextNode("-");

var td13 = document.createElement("td");
var button13 = document.createElement("button");
var text13 = document.createTextNode("1");

var td14 = document.createElement("td");
var button14 = document.createElement("button");
var text14 = document.createTextNode("2");

var td15 = document.createElement("td");
var button15 = document.createElement("button");
var text15 = document.createTextNode("3");

var td16 = document.createElement("td");
var button16 = document.createElement("button");
var text16 = document.createTextNode("+");

var td17 = document.createElement("td");
var button17 = document.createElement("button");
var text17 = document.createTextNode("0");

var td18 = document.createElement("td");
var button18 = document.createElement("button");
var text18 = document.createTextNode(".");

var td19 = document.createElement("td");
var button19 = document.createElement("button");
var text19 = document.createTextNode("%");

var td20 = document.createElement("td");
var button20 = document.createElement("button");
var text20 = document.createTextNode("=");






element.appendChild(div1);
div1.appendChild(input);
div1.appendChild(table1);

table1.appendChild(tr1);

tr1.appendChild(td1);
td1.appendChild(button1);
button1.appendChild(text1);
tr1.appendChild(td2);
td2.appendChild(button2);
button2.appendChild(text2);
tr1.appendChild(td3);
td3.appendChild(button3);
button3.appendChild(text3);
tr1.appendChild(td4);
td4.appendChild(button4);
button4.appendChild(text4);


table1.appendChild(tr2);

tr2.appendChild(td5);
td5.appendChild(button5);
button5.appendChild(text5);
tr2.appendChild(td6);
td6.appendChild(button6);
button6.appendChild(text6);
tr2.appendChild(td7);
td7.appendChild(button7);
button7.appendChild(text7);
tr2.appendChild(td8);
td8.appendChild(button8);
button8.appendChild(text8);


table1.appendChild(tr3);

tr3.appendChild(td9);
td9.appendChild(button9);
button9.appendChild(text9);
tr3.appendChild(td10);
td10.appendChild(button10);
button10.appendChild(text10);
tr3.appendChild(td11);
td11.appendChild(button11);
button11.appendChild(text11);
tr3.appendChild(td12);
td12.appendChild(button12);
button12.appendChild(text12);


table1.appendChild(tr4);

tr4.appendChild(td13);
td13.appendChild(button13);
button13.appendChild(text13);
tr4.appendChild(td14);
td14.appendChild(button14);
button14.appendChild(text14);
tr4.appendChild(td15);
td15.appendChild(button15);
button15.appendChild(text15);
tr4.appendChild(td16);
td16.appendChild(button16);
button16.appendChild(text16);


table1.appendChild(tr5);

tr5.appendChild(td17);
td17.appendChild(button17);
button17.appendChild(text17);
tr5.appendChild(td18);
td18.appendChild(button18);
button18.appendChild(text18);
tr5.appendChild(td19);
td19.appendChild(button19);
button19.appendChild(text19);
tr5.appendChild(td20);
td20.appendChild(button20);
button20.appendChild(text20);


document.getElementById('solution').readOnly = true;
var buttons = document.querySelectorAll('button');
var calc = document.getElementById('solution');
var calcSolution = '';
for (item of buttons) {
    item.addEventListener('click', (calcul) => {
        buttonInput = calcul.target.innerText;
        if (buttonInput == 'C') {
            calcSolution = "";
            calc.value = calcSolution;
        }
        else if (buttonInput == '=') {
            calc.value = eval(calcSolution);
        }
        else {
            calcSolution += buttonInput;
            calc.value = calcSolution;
        }

    })
}

document.addEventListener("keydown", function(event) {
    console.log(event.which);
    if(event.shiftKey==57){
        event.key = '(';
    }
    else if(event.shiftKey==48){
        event.key = ')';
    }
    else if(event.shiftKey==53){
        event.key = '%';
    }
    if(event.keyCode==88){
        calcSolution += '*';
        calc.value = calcSolution;
    }
    if(event.key<=9 || event.key=='+' || event.key=='-' || event.key=='*' || event.key=='.' || event.key=='/' || event.key=='%' || event.key=='(' || event.key==')'){
        calcSolution += event.key;
        calc.value = calcSolution;
    }
    if(event.keyCode == 13 || event.keyCode == 187)
    {
        calc.value = eval(calcSolution);
    }
    else if(event.keyCode == 46){
        calcSolution = "";
        calc.value = calcSolution;
        console.clear();
    }
    else if(event.keyCode == 8){
        calcSolution = calcSolution.slice(0, -1);
        calc.value = calcSolution;
    }
    else if(event.keyCode == 67){
        calcSolution = "";
        calc.value = calcSolution;
        calc.clear();
    }
    else if(event.keyCode == 82){
        location.reload();
    }
  })

  window.onerror = function(){
      alert("PLEASE INPUT VALID EXPRESSION");
      calcSolution = "";
      calc.value = calcSolution;
      console.clear();
  }