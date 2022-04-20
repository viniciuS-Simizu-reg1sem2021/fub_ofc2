import { Router } from 'express';

import { ensureAuth } from '@shared/infra/middlewares/ensureAuth';
import { userRoutes } from '@modules/User/infra/http/routes/user.routes';
import { couponRoutes } from '@modules/Coupon/infra/http/routes/coupon.routes';
import { contractRoutes } from '@modules/Contract/infra/http/routes/contract.routes';
import { notificationRoutes } from '@modules/Notification/infra/http/routes/notification.routes';

const routes = Router();

routes.use('/user', userRoutes);

routes.use('/coupon', ensureAuth, couponRoutes);

routes.use('/contract', ensureAuth, contractRoutes);

routes.use('/notification', ensureAuth, notificationRoutes);

export { routes };
