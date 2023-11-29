    var http = require("http");
    var data = require("./data/inventory");
    http.createServer(function(req, res) {
    if (req.url === "/") {
    res.writeHead(200, {"Content-Type": "text/json"});
    res.end(JSON.stringify(data));
    } 
    else if (req.url === "/instock") 
    {
    listInStock(res);
    }
     else if (req.url === "/onorder") {
    listOnBackOrder(res);
    } 
    else {
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.end("Whoops... Data not found");
    }
    }).listen(3000);
    console.log("Server listening on port 3000");
    // la fonction de filtrage sur le valeur de avail lorsqu'elle est instock
    function listInStock(res) {
    var inStock = data.filter(function(item) {
    return item.avail === "In stock";
    });
    res.end(JSON.stringify(inStock));}
    //  la fonction de filtrage sur le valeur de avail lorsqu'elle est on order
    function listOnBackOrder(res) {
    var onOrder = data.filter(function(item) {
    return item.avail === "On back order";
    });
    res.end(JSON.stringify(onOrder));
    }
    // l'url http://localhost:3000/onorder demontre les produits qui sont on order =>filtrage et selection des données selon le clé avail 
    //meme chose pour le instock lorsque la variable avail="inStock" il va afficher seulement les prodits qui sont instocks