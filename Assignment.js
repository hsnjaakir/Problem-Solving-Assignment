//no.1
function feetToMile(feet){
    if(feet<0)
        console.log("Not a valid input");
    else{
        var conversion = feet*0.000189394; // 1 ft = 0.000189394 mile
        return conversion.toFixed(5);
    }
}
var mile = feetToMile(65);
console.log(mile);
//no.2
function woodCalculator(chair,table,bed){
    var woodSum = chair*1 + table*3 + bed*5;
    return woodSum;
}
var total = woodCalculator(8,4,2);
console.log("Number of wood is ",total);
//no.3
function brickCalculator(numOfFloar){
    var n = 1000;
    if(numOfFloar<=10)
        brickCount = numOfFloar*15*n;
    else if(numOfFloar>=11 && numOfFloar<=20)
        brickCount = 10*15*n + (numOfFloar-10)*12*n;
    else
        brickCount = 10*15*n + 10*12*n + (numOfFloar-20)*10*n;

    return brickCount;
}
var total = brickCalculator(5);
console.log("Number of brick is ",total);
//no.4
function tinyFriend(friend){
    var test = Infinity;
    var name = [];
    var count=0;
    for(var i=0;i<friend.length;i++){
        var string = friend[i];
        count = string.length;
        if(count < test){
            test = count;
        }
    }
    for(var i=0;i<friend.length;i++){
        var string = friend[i];
        var count1 = string.length;
        if(test == count1){
            name.push(string);
        }
    }
    return name;
}
var result = tinyFriend(["Jak","Samrat","Junayed Bugdadi","ovi","Imtiaz Ahmed","Mahodi Hasan","Asif Reza"]);
console.log(result);

