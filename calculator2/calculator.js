var writing = '';
function last_operator() {
    var last = writing[writing.length - 1];
    console.log(last)
    if (last == '+'  || last == '-' || last == '*' || last == '/')  {
        writing = writing.slice(0, -1);
    } else {
        
    }
}

function calculator_display(){
    console.log(writing)
    if (writing == '') {
        document.getElementById("calculator_display").innerHTML = '0'
    }else {
        document.getElementById("calculator_display").innerHTML = writing;
    }
   
} 

function calculator(e) {
    e = e || window.event;
    e = e.target || e.srcElement;
    if (e.nodeName === 'BUTTON') {
        // alert(e.id);
        switch(e.id) {
            case 'b9':
                writing += '9';
                calculator_display();
                l_operator()
                break;
            case 'b8':
                writing += '8';
                calculator_display();
            break;
            case 'b7':
                writing += '7';
                calculator_display();
                break;
            case 'b6':
                writing += '6';
                calculator_display();
                break;
            case 'b5':
            writing += '5';
            calculator_display();
                break;
            case 'b4':
                writing += '4';
                calculator_display();
                break;
            case 'b3':
            writing += '3';
            calculator_display();
                break;
            case 'b2':
                writing += '2';
                calculator_display();
                break;
            case 'b1':
            writing += '1';
            calculator_display();
                break;
            case 'b0':
                writing += '0';
                calculator_display();
                break;   
            case 'decimal':
            writing += '.';
            calculator_display();
                break;   
            case 'add':
                last_operator()
                writing += '+';
                calculator_display();
                break;
            case 'subtract':
                last_operator()
                writing += '-';
                calculator_display();
                break;
            case 'multiply':
                last_operator()
                writing += '*';
                calculator_display();
                break;
            case 'divide':
                last_operator()
                writing += '/';
                calculator_display();
                break;
            case 'clear':
                writing = '';
                document.getElementById("calculator_display").innerHTML = '0'
                last_operator = false;
                break;
            case 'calculate':    
                document.getElementById("calculator_display").innerHTML = eval(writing);
                writing = '';
                break;
            case 'delete':
                writing = writing.slice(0, -1);
                calculator_display();
                break;      
            default:
              // code block
          } 


    // console.log(e.target)
    
}}
