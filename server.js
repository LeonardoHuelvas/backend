import express from 'express';
import cors from 'cors';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import certificates from './Data.js';
import 'dotenv/config';

const __dirname = dirname(fileURLToPath(
    import.meta.url));

const app = express();


app.use(cors({
    origin: 'https://leonardo-portafolio-web.netlify.app/'
}));



// Servir archivos estáticos desde la carpeta certificates
app.use('/certificates', express.static(path.join(__dirname, 'certificates')));


app.get('/api/certificates', (req, res) => {
    res.json(certificates);
});


// Catch-all para enviar index.html y dejar que React Router maneje la ruta
// app.get('*', (req, res) => {
//     const indexPath = path.resolve(__dirname, './index.html');
//     res.sendFile(indexPath);
// });

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
