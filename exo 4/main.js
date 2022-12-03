// Soit le tableau suivant : 
const input = [1, -2, 3, 4, -5]

console.log(input.filter(n=>n > 0))


// Utiliser la méthode reduce pour calculer la somme des éléments de nums  
console.log(input.reduce(n=(t,n)=>t+n , 0)) // 1

console.log("Test")
// Utiliser  la  méthode  filter  et  reduce  pour  calculer  la  somme des  éléments  positifs  de nums 
t = []
t.push(input.filter(n=>n > 0))
console.log(t)
console.log(t.reduce(n=(t,n)=>t+n , 0))
