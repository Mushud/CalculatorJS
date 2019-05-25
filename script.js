var mathExpression=[];

function generateNumberPadandOperatorPad(){
    var board = document.getElementById('pad');
    var numberPad = document.createElement('div');
    numberPad.setAttribute('id', 'numberPad');
    var num = document.getElementById('number');
    
    
    for(var i=1; i<= 9; i++){
    
        var button  = document.createElement('button');
        button.setAttribute('id', 'numBtn');
        var number = document.createTextNode(i.toString());
        button.appendChild(number);
        numberPad.appendChild(button);
    
        if(i%3 == 0){
            var br = document.createElement('br');
            numberPad.appendChild(br); 
        }
        
    } 
    
    num.appendChild(numberPad)
    
    var operators = ['+','-', '='];
    var operatorDiv = document.getElementById("operators");
    
    for(var i=0; i<operators.length; i++){
            var btn = document.createElement('button');
            btn.setAttribute('id', 'operatorBtn');
    
            var title = document.createTextNode(operators[i]);
            btn.appendChild(title);
            operatorDiv.appendChild(btn)
    }
    
    
    
    board.appendChild(num);
    board.appendChild(operatorDiv);
}

(
    generateNumberPadandOperatorPad()
);

var CeButton = document.getElementById('ce');
var answerH1 = document.getElementById('answer');
var del = document.getElementById('del');
var eval = document.getElementById('eval');

CeButton.addEventListener('click', () => {
    mathExpression = [];
    answerH1.innerHTML="";
    eval.innerHTML = "";
})

del.addEventListener('click', deleteNumber);

var $ = function(selector){
    return document.querySelector(selector);
}

var buttons = $("#numberPad").getElementsByTagName('button');

function getNumber(){
    console.log(this.innerHTML);
    mathExpression.push(this.innerHTML);
    answerH1.innerHTML = answerH1.innerHTML + this.innerHTML;
    console.log(mathExpression);
}

function deleteNumber(){
    var previous = mathExpression.pop();
    answerH1.innerHTML = (answerH1.innerHTML).substring(0, answerH1.innerHTML.length-1);
    eval.innerHTML = "";
}

for(var i=0; i<buttons.length; i++){
   buttons[i].onclick = getNumber;
}

var operators = $('#operators').getElementsByTagName('button');

function getOperator(){
    if(mathExpression.length >0 && this.innerHTML != '='){
        mathExpression.push(this.innerHTML);
        answerH1.innerHTML = answerH1.innerHTML + this.innerHTML;
    }else if(this.innerHTML == '='){
        eval.innerHTML = answerH1.innerHTML + "="

        //TODO 
        // Simplify Expression
    }
    
}

for(var i =0; i<operators.length; i++){
    operators[i].onclick = getOperator;
}
