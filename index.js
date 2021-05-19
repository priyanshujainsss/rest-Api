const express=require('express');
const app=express();
app.use(express.json());

const books=[
    {
        "title":"Javscript", id:1
    },
    {
        "title":"React js", id:2
    }
]
app.get("/",(req,resp)=>{
    resp.send("Welcom to Express js")
})

app.get("/books/api/",(req,resp)=>{
    resp.send(books)
    
})

app.get("/books/api/:id",(req,resp)=>{
    const book=books.find(v => v.id===parseInt(req.params.id))
    if(!book) resp.status(404).send("Invalid id")
    resp.send(book)
})

app.post("/books/addBook",(req,resp)=>{
    const book={
        title:req.body.title,
        id:books.length+1
}
books.push(book)
resp.send(book)
})

app.put("/books/api/:id",(req,resp)=>{
    const book=books.find(v => v.id === parseInt(req.params.id))
    if(!book) resp.status(404).send("Invalid id")

    book.title=req.body.title
    resp.send(book)
})
app.delete("/books/api/:id",(req,resp)=>{
    const book=books.find(v=>v.id === parseInt(req.params.id))
    if(!book) resp.status(404).send("Incorrect id")
    const index=books.indexOf(book)
    books.splice(index)
    resp.send(book)
})

app.listen(3000)