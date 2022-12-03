// Soit le tableau suivant : 
const input = [1, -2, 3, 4, -5]

// Utiliser  la  méthode  filter  pour  créer  un  tableau  contenant  les  éléments  positifs  de nums 
console.log(input.filter(n=>n > 0))

// Utiliser la méthode reduce pour calculer la somme des éléments de nums  
console.log(input.reduce(n=(t,n)=>t+n , 0)) // 1

// Utiliser la méthode  filter  et  reduce  pour  calculer  la  somme des  éléments  positifs  de nums 
console.log(input.filter(n=>n > 0).reduce(n=(t,n)=>t+n, 0))

