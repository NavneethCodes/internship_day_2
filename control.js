console.log("Control statements");
let a = 1000;
let b = 10;
if(b > a){
    console.log(`${b} greater than ${a}`); 
}
else{
    console.log(`${a} greater than ${b}`);
}

for(let i = 1; i < 11; i++){
    console.log(i);
}

let i = 1;
while(i < 11){
    console.log(i);
    i++;
}

let j = 1;
do{
    console.log(j);
    j++;
}while(j < 11);