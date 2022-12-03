// Créer la classe Document contenant les attributs id et dateEdition
class Document {
    constructor(id, dateEdition) {
      this.id = id;
      this.dateEdition = dateEdition;
    }
  }


// Créer la classe Livre qui hérite de la classe Document contenant en plus les attributs titre et auteur
class Livre extends Document {
    constructor(id,dateEdition, titre, auteur) {
      super(id, dateEdition );
      this.titre = titre;
      this.auteur = auteur;
    }

    // Créer la méthode infoLivre qui retourne les informations du livre
    infoLivre() {
        return  `Livre: id:${this.id} titre:${this.titre} auteur:${this.auteur} dateEdition:${this.dateEdition}`;
    }
}

// Créer deux instances de Document
d1 = new Document(1, '01/11/2001');
d2 = new Document(2, '12/12/2012');

// Créer trois instances de Livre
l1 = new Livre(1, '01/11/2001', 'Livre 1', 'Auteur 1');
l2 = new Livre(2, '02/12/2010', 'Livre 2', 'Auteur 2');
l3 = new Livre(3, '10/15/2021', 'Livre 3', 'Auteur 3');

// test
console.log(d1)
console.log(l2)
console.log(l3.infoLivre())
