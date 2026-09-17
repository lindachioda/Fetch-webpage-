//async function displayFantasy) {
//let httpFantasy = await fetch ("http://localhost: 3000/fantasy*)
//let textFantasy = await httpFantasy-json()
//console.log(document.getElementById('fantasy'))


//1) usa FETCH per prelevare dati da file json: CREO ARRAY
let bookList = fetch (`https://striveschool-api.herokuapp.com/books/`).then( 
    (risultato) => {
        console.log("la promise ha finito")
        console.log(risultato)
    }
)

//da array a json e viceversa
let result = JSON.stringify(bookList)
console.log(JSON.stringify(bookList))

let arrayBooks = JSON.parse(result)
console.log(JSON.parse(result))





//2) usa ASYNC FUNCTION
async function bookLista () {
    //http fetch
    let httpBooks = await fetch (`https://striveschool-api.herokuapp.com/books/`)
    //text 
    let textBooks = await httpBooks.json()
    console.log(textBooks) //questo lo riporta ARRAY in console 
    console.log(JSON.stringify(textBooks)) //questo lo riporta versione JSON in console

//voglio mostrarlo nel DOM!!!
    let row = document.getElementById("books-row")//svuoto il body
    let content = ""
//creo ciclo for per mostrare tutti i "title" di tutti i libri
    for(let singleBook of textBooks) {
         content += //per mostrare l'immagine e non il testo http:
         `<div class="col-md-3 mb-4">
            <div class="card h-100">
            <img src="${singleBook.img}" class="card-img-top" alt="${singleBook.title}">
                <div class="card-body">
                    <h5 class="card-title">${singleBook.title}</h5>
                    <p>${singleBook.price} $ - ${singleBook.category}</p>
                </div>
            </div>
        </div>
    `;
    }
    row.innerHTML = content;

}

//chiama la funzione ASYNC in console
window.onload = async() => {
    await bookLista() 
}