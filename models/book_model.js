const book={
    bookArray:[
        {id_book:1, name:"Tietokannat", author:"Mikko Virtanen",isbn:"12345678" },
        {id_book:2, name:"C++", author:"Liisa Virtanen",isbn:"333333333" },
        {id_book:3, name:"JavaScript", author:"Matti Mainio",isbn:"888888888" }
    ],
    getAllBooks(callback){
        callback(this.bookArray);
    },
    getOneBook(id, callback){
        callback(this.bookArray[id]);
    }
}

module.exports=book;