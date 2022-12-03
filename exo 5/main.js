let  livres=[
    {id :10,titre : 'POO',auteur :'RAMI',prix :300},
    {id :11,titre : 'JS ES6',auteur :'FAMI',prix :230}, 
    {id :12,titre : 'Algorithme',auteur :'KARIMI',prix :330}, 
    {id :13,titre : 'HTMH & CSS',auteur :'RAMI',prix :340}
] 

// Créer la liste titres contenant tous les titres à partir de Livres utiliser map
titres = []
titres.push(livres.map(title=>title.titre))
console.log(titres)

// Créer la liste titres contenant tous les livres de l’auteur ‘RAMI’ à partir de Livres filter
auteurRAMI = []
auteurRAMI.push(livres.filter(f=(lvr)=>lvr.auteur == 'RAMI'))
console.log(auteurRAMI)

// Chercher le livre dont le id égal à 12  utiliser find
console.log(livres.find(i=>i.id==12))

// Calculer le total des prix utiliser reduce
console.log((livres.reduce(f=(total,livre)=> total += livre.prix , 0 )))

// Créer un Array mesLivres copie de livres
mesLivres = []
mesLivres.copy = [...livres]
console.log(mesLivres)