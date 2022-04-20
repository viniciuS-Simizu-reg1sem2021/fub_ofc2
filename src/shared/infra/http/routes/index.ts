import { Router } from 'express';
import userRoutes from '../../../../modules/User/infra/http/routes/user.routes';
import couponRoutes from '../../../../modules/Coupon/infra/http/routes/coupon.routes';
import contractRoutes from '../../../../modules/Contract/infra/http/routes/contract.routes';
import notificationRoutes from '@modules/Notification/infra/http/routes/notification.routes';
import { ensureAuth } from '@shared/infra/middlewares/ensureAuth';

const routes = Router();

routes.use('/notification', ensureAuth, notificationRoutes);

routes.use('/contract', ensureAuth, contractRoutes);

routes.use('/coupon', ensureAuth, couponRoutes);

routes.use('/user', userRoutes);

export { routes };
