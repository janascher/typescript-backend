import dotenv from 'dotenv';
import { App } from './app';
import { PORT } from './configs/port';
console.log('oi');
dotenv.config();
new App().server.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
