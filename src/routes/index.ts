import { Router } from 'express';
import { homeController, getUser, createUser, updateUser} from './../controllers/index'

const router = Router();

router.get('/', homeController.home);
router.get('/accounts/', getUser);
router.post('/accounts/', createUser);
/* router.post('/accounts/login', login); */
router.patch('/accounts/:id', updateUser);

export default router;