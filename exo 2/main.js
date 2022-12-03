class Book {
    constructor(title, author, description, pages, currentPage, read) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.pages = pages;
        this.currentPage = currentPage;
        this.read = read;
    }

    readBook(page){
        if (page < 1 || page > this.pages){
            console.log(0)
        }

        else if(page >= 1 && page < this.pages){
            this.currentPage = page;
            console.log(1)
            console.log("En cours de lecture")
        }

        else if(page == this.pages){
            this.currentPage = page;
            this.read = true;
            console.log(1);
            console.log("lu")
        }
    }
    
}


b1 = new Book();
b1.title = "title B3";
b1.author = "author B3";
b1.description = "description B3";
b1.pages = 250
b1.currentPage = 25
b1.read = false;


b2 = new Book();
b2.title = "title B2";
b2.author = "author B2";
b2.description = "description B2";
b2.pages = 250
b2.currentPage = 25
b2.read = false;

b3 = new Book();
b3.title = "title B3";
b3.author = "author B3";
b3.description = "description B3";
b3.pages = 250
b3.currentPage = 25
b3.read = false;

b1.readBook(0)



