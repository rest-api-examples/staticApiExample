# staticApiExample

Tehdään REST API sovellus, jossa ei käytetä tietokantaa, vaan data on stattisessa arrayssä, kuten aiemmissa esimerkeissä.

<ol>
<li>Luo kansio nimeltään staticExample</li>
<li>Kopio expressExamplen tiedostot package.json ja app.js kansioon staticExample ja avaa komentohekote kansioon </li>
<li>Anna komento npm install</li>
<li>Käynnistä sovellus komennolla nodemon app.js</li>
<li>Lisää sovellukseen kansiot routes ja models</li>
<li>Lisää routes kansioon tiedosto book.js ja siihen rivit
const express = require('express');
const router = express.Router();

module.exports=router
</li>
<li>Lisää tiedostoon metodit 
    <ul>
    <li>router.get('/')</li>
    <li>router.get('/:id')</li>
    <li>router.post('/')</li>
    <li>router.put('/:id')</li>
    <li>router.delete('/:id')</li>
    </ul>
</li>
<li>Laita kuhunkin metodiin jokin teksti, jonka response palauttaa </li>
<li>Muokkaa app.js niin, että sovellusesta löytyy endpoint http://localhost:3000/book</li>
<li>Testaa kaikki metodit Postmanilla</li>
<li>Lisää sitten models kansioon tiedosto book_model.js. Määritä tiedostossa  objekti book, jossa: 
    <ul>
    <li>bookArray</li>
    <li>metodit kullekin book-controllerin metodille</li>
    <li>esimerkiksi getAllBooks-metodi ottaa argumenttina funktion callback ja kutsuu tuota metodia argumenttina bookArray</li>
    <li>eksporttaa objekti book</li>
    </ul>
</li>
<li>Muuta sitten book-contrtolleria, niin että 
    <ul>
    <li>Määritä objekti book, joka saadaan modelista</li>
    <li>Muuta router.get kutsumaan modelin getAllBooks metodia argumenttina seuraava anonyymi funktio
    <pre>
    function(result){
        response.send(result);
    }
    </pre>
    </li>
    <li>Testaa sovelluksen toimintaa ja muuta muutkin metodit</li>
    </ul>
</li>
</ol>