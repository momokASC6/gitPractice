// function that multiplies all values in array by 2 and prints the new array
// someArray = [5,10,15,20];
// multiplyArrayNumbers(someArray);
// someArray = [10, 20, 30, 40]
// 10 20 30 40
function multiplyArrayNumbers(arr) {
    //create a loop 
    for(i = 0; i < arr.length; i++) {
        //that will go through each individual element of the array 
        //and multiply the value by 2
        arr[i] = arr[i]*2 //arr[i]*=2
    }
}
