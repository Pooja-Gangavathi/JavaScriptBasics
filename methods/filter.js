var array = [3,6,9,1,,11,50,55,7,77,45];
var result = array.filter(function(element){
    return element%2 == 0;
})
console.log(result);