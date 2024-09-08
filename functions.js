function amamam(from, text) {
    alert(from + ': ' + text);
}


function sayHi() {
    alert( "Привет" );
  }
  
// alert( sayHi ); 

let ask = function(question, yes, no) {
    answer = prompt(question);
    if (answer == "yes") {
        yes();
    } else if (answer == "no"){
        no();
    } else {
        alert("Incorrect answer, try again!");
        ask(question, yes, no);

    }
};

let no = function(){
    alert("😭")
};

let yes = function(){
    alert("😋")
};

question = "Ты сегодня покушал?\n" +
        "yes or no?"

// ask(question, yes, no);


let ask2 = function(question, yes, no) {
    if (confirm((question))) yes();
    else no()
};

ask2(question, yes, no);