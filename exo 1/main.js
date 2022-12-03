class Document {
    constructor(id, dateEdition) {
      this.id = id;
      this.dateEdition = dateEdition;
    }
  }



class Livre extends Document {
    constructor(id,dateEdition, titre, auteur) {
      super(id, dateEdition );
      this.titre = titre;
      this.auteur = auteur;
    }

    infoLivre() {
        return  `Livre: id:${this.id} titre:${this.titre} auteur:${this.auteur} dateEdition:${this.dateEdition}`;
    }
}

d1 = new Document(1, '01/11/2001');
d2 = new Document(2, '12/12/2012');

l1 = new Livre(1, '01/11/2001', 'Livre 1', 'Auteur 1');
l2 = new Livre(2, '02/12/2010', 'Livre 2', 'Auteur 2');
l3 = new Livre(3, '10/15/2021', 'Livre 3', 'Auteur 3');

// test
console.log(d1)
console.log(l2)
console.log(l3.infoLivre())
