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
    },
    addBook(insertData, callback){
        //tässä on SQL-injektio
        //datan lisäämiseen on käytettävä
        //binded parameters menetelmää
        const sql="insert into book values("+insertData.id_book+","+insertData.name+")";
        callback(sql);
    }
}

module.exports=book;