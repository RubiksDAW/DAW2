let arr = [0,1,2,3,4,5,6,7,8,9,10,11,12];

for (let i = 0; i < arr.length; i++) {
    
    if(arr[i] % 2 == 0){
        console.log(arr[i])
    }
    
}

let sumatorio = 0;
for (let i = 0; i < arr.length; i++) {
    sumatorio += arr[i]
    
}

console.log(`La suma total del array es ${sumatorio}`)