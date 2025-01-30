<h1>staticApiExample</h1>

Tehdään REST API sovellus, jossa ei käytetä tietokantaa, vaan data on staattisessa arrayssä, kuten aiemmissa esimerkeissä.

<ol>
<li>Luo kansio nimeltään staticExample</li>
<li>Kopio expressExamplen tiedostot package.json ja app.js kansioon staticExample ja avaa komentohekote kansioon </li>
<li>Anna komento npm install</li>
<li>Käynnistä sovellus komennolla nodemon app.js</li>
<li>Lisää sovellukseen kansiot routes ja models</li>
<li>Lisää routes kansioon tiedosto book.js ja siihen rivit
<pre>
const express = require('express');
const router = express.Router();

module.exports=router
</pre>
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
<li>Muokkaa app.js niin, että sovelluksesta löytyy endpoint http://localhost:3000/book</li>
<li>Testaa kaikki metodit Postmanilla</li>
<li>Lisää sitten models kansioon tiedosto book_model.js. Määritä tiedostossa  objekti book, jossa: 
    <ul>
    <li>bookArray</li>
    <li>metodit kullekin book-controllerin metodille</li>
    <li>esimerkiksi getAllBooks-metodi ottaa argumenttina funktion callback ja kutsuu tuota metodia argumenttina bookArray</li>
    <li>eksporttaa objekti book</li>
    </ul>
</li>
<li>Muuta sitten book-controlleria, niin että 
    <ul>
    <li>Määritä objekti book, joka saadaan modelista</li>
    <li>Muuta router.get kutsumaan modelin getAllBooks metodia argumenttina seuraava anonyymi funktio
    <pre>
    function(result){
        response.json(result);
    }
    </pre>
    </li>
    </ul>
</li>
    <li>Testaa sovelluksen toimintaa ja muuta muutkin metodit</li>
</ol>

<h2>Esimerkin tarkoitus</h2>

Esimerkissä ei käytetä tietokantaa, jotta huomio keskittyisi controller-model tomintaan ja callbackien toimintaan.

Sovelluksessa http-pyynnöt ottaa vastaan book-controller. Book-controller kutsuu book_modelin funktiota, jolle se antaa argumenttina seuraavaa:
<ul>
<li><b>Aina anonyymin funktion</b>, joka aikanaan lähettää responsena model-funktion luoman datan</li>
<li>Mahdollisesti uuden tai muokattavan kirjan tiedot (request.body)</li>
<li>Mahdollisesti kirjan id:n (request.params.id)</li>
</ul>

Book_modelin funktio tekee toimenpiteet (etsii, lisää, muokkaa, poistaa) ja asettaa sovitun datan callback-metodiin argumentiksi.

Nyt kuitenkaan modelissa ei oikeasti kutsuta asynkroonisia funktioita, joten tässä ei tarvitsisi käyttää callbackeja. Kuitenkin sitten, kun data on tietokannassa, funktiot ovat asynkronisia ja callbackit ovat välttämättömiä.

<hr>
We will create a REST API application without using a database. Instead, the data will be stored in a static array, similar to previous examples.

<ol> <li>Create a folder named <b>staticExample</b>.</li> <li>Copy the <b>package.json</b> and <b>app.js</b> files from the <i>expressExample</i> project into the <b>staticExample</b> folder and open a command prompt in the folder.</li> <li>Run the command: <pre>npm install</pre></li> <li>Start the application with: <pre>nodemon app.js</pre></li> <li>Add two new folders to the project: <b>routes</b> and <b>models</b>.</li> <li>Inside the <b>routes</b> folder, create a file named <b>book.js</b> and add the following lines: <pre> const express = require('express'); const router = express.Router();
module.exports = router; </pre>

</li> <li>Add the following methods to the file: <ul> <li><b>router.get('/') </b></li> <li><b>router.get('/:id')</b></li> <li><b>router.post('/')</b></li> <li><b>router.put('/:id')</b></li> <li><b>router.delete('/:id')</b></li> </ul> </li> <li>Add a response message in each method to return a simple text response.</li> <li>Modify <b>app.js</b> so that the application includes an endpoint at: <pre>http://localhost:3000/book</pre></li> <li>Test all the methods using Postman.</li> <li>Inside the <b>models</b> folder, create a file named <b>book_model.js</b>. In this file, define an object <b>book</b> containing: <ul> <li>A <b>bookArray</b> to store book data.</li> <li>Methods corresponding to each <b>book-controller</b> method.</li> <li>For example, the <b>getAllBooks</b> method should take a callback function as an argument and call that function with <b>bookArray</b> as its argument.</li> <li>Export the <b>book</b> object.</li> </ul> </li> <li>Modify the <b>book-controller</b> so that: <ul> <li>Define a <b>book</b> object that is imported from the model.</li> <li>Change <b>router.get</b> to call the model's <b>getAllBooks</b> method, passing in the following anonymous function: <pre> function(result){ response.json(result); } </pre> </li> </ul> </li> <li>Test the application and modify the remaining methods accordingly.</li> </ol> <h2>Purpose of the Example</h2>
This example does not use a database so that the focus remains on the controller-model structure and the use of callbacks.

In the application, HTTP requests are handled by the book-controller. The book-controller calls functions from book_model, passing in the following arguments:

<ul> <li><b>Always an anonymous function</b> that will eventually return the response containing the data from the model function.</li> <li>Possibly the details of a new or updated book (**request.body**).</li> <li>Possibly the book ID (**request.params.id**).</li> </ul>
The functions in book_model perform the necessary operations (searching, adding, updating, deleting) and pass the appropriate data to the callback function as an argument.

Although in this example, the model does not actually call asynchronous functions, callbacks are still used to demonstrate their necessity. Once data is stored in a database, the functions will be asynchronous, and callbacks (or promises/async-await) will be essential.