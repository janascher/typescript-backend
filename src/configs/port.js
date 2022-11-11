import dotenv from 'dotenv';
import { env } from 'process';

dotenv.config();

const PORT = env.PORT;
export { PORT };
