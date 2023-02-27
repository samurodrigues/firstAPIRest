import app from './src/App.js'
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Escutando em http://localhost:${port}`);
})