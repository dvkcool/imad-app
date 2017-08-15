var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne={
    title: 'Article One | IMAD',
    heading: 'Article One',
    content: ` Hello Article 1  `
};
function createtemp(data){
    var title=data.title;
    var heading=data.heading;
    var content= data.content;
    var j=0;
    for(var i =0; i<=50; i++){
        if(i%10 ===0 && j%2 ===0){
            content = content + `<P>`;
            j++;
        }
        else if(i%10 ===0){
           content = content + `</P>`;
            j++;
        }
        
        else{
            content= content+ content;
        }
        
    }
    var htmltemp=`
                <html>
                 <head>
                   <title>
                    ${title}
                    </title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link href="/ui/style.css" rel="stylesheet" />
                 </head>
                  <body>
                    <div class="container">
                        <div><a href="/">Home</a>
                        </div>
                        <div>
                             <h1>${heading}</h1>   
                             <hr>
                        </div>
                        <div>
                             ${content}
                    </div>
                    
                 </body>
                </html>
                `;
                return htmltemp;
}




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-two', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/article-one', function (req, res) {
res.send(createtemp(articleOne));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
