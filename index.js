import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let items=[];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res) => {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today = new Date().toLocaleDateString("en-US", options);

    res.render("index.ejs", {dayToday : today, nItem : items});
});

app.post("/" , (req,res) =>{
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/")
})

app.listen(port , () => {
    console.log(`Server running on port ${port}`);
})