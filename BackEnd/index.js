const express = require('express')
const app = express()
const port = 3436
const bodyParser = require('body-parser')

//
// Requirement for set up the exercise
//
app.use(bodyParser.json()); // parse requests of content-type - application/json

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

//
// Let's start the exercise :
// 
// You have a restaurant and you want to manage the menu :
// You need to know which recipes you can sold and which ingredients you need to use,
// you also need to know what is the purchase price of a dish and what is the price you are selling it.
// ------------------------------

let books = [

    { id: 0, fullname: 'Jessa Mae', email: "jessamae@gmail.com", bookTitle: "Algebra", bookNumber: 123, bookItems: 1, dateBorrow: "1/20/2020", dateReturn: "1/330/20" },
    { id: 1, fullname: 'Jovelyn', email: "jessamae@gmail.com", bookTitle: "Algebra", bookNumber: 123, bookItems: 1, dateBorrow: "1/20/2020", dateReturn: "1/330/20" },

]

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/books', function (req, res) {
    res.json({ data: books })
})
app.post('/books', function (req, res) {
    res.send({ data: books.push(req.body) })
})
app.put('/books/:id', function (req, res) {
    books.forEach(element => {
        if (element.id == req.params.id) {
            element.fullname = req.body.fullname;
            element.email = req.body.email;
            element.bookTitle = req.body.bookTitle;
            element.bookNumber = req.body.bookNumber;
            element.bookItems = req.body.bookItems;
            element.dateBorrow = req.body.dateBorrow;
            element.dateReturn = req.body.dateReturn;
        }
    });
    res.json({ data: books })
})
app.delete('/books/:id', function (req, res) {
    const index = books.findIndex(books=>{
        return books.id == req.params.id
    });   
    res.send(books.splice(index,1))
})

