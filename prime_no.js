console.log("Prime No Problem");
var N = parseInt(prompt("Enter a number two check whether it is prime ornot"));
var f = 0;
for(var i = 2;i<N/2;i= i+1){
    if(N%i==0){
        alert("number is not prime");
        f = 1;
        break;
    }
}
if(f == 0){
    alert("Number is Prime Number");
}
