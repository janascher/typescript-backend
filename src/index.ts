import dotenv from 'dotenv';
import { App } from './app';
import { PORT } from './configs/port';

dotenv.config();

new App().app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});