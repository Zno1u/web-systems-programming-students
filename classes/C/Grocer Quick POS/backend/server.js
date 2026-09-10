import express from 'express';

const app = express();

//para que funcione debe de estar ubicado en la carpeta backend
app.use(express.static('frontend'));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: 'frontend'});
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});