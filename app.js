// sabina biblioteque w 7atinaha fi variable  w ba3d instance bech nista3mlo les methode elli fiha 
const express = require('express')
const app = express();
//na3mlo middlerware lil bady  bache ya3mal parse request body bache ynajam ya9rah
//nodemon ya3mil execution automatique 
app.use(express.json());
const posts = [
    { id: 1, title: 'Post One', content: 'This is the content of post one' },
    { id: 2, title: 'Post Two', content: 'This is the content of post two' },
    { id: 3, title: 'Post Three', content: 'This is the content of post three' },
];


app.get('/auth/login', (req, res)=>{
    res.send('<h1>welcome!</h1>');
})

app.get('/auth/register', (req, res) => {
    res.sendFile(__dirname + '/inde.html');
})

app.get('/post/all', (req, res) => {
    res.json(posts);
});

app.get('/post/:id', (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const post = posts.find(p => p.id === postId);

    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ error: 'Post not found' });
    }
});














app.get('/', (req, res)=>{
    res.send('<h1>welcome!</h1>');
})

app.listen(4000,()=>{
    console.log('server listen')
})