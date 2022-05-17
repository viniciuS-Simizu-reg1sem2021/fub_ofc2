import { Router } from 'express';

import { ensureAuth } from '@shared/infra/middlewares/ensureAuth';
import { userRoutes } from '@modules/user/infra/http/routes/user.routes';
import { couponRoutes } from '@modules/coupon/infra/http/routes/coupon.routes';
import { contractRoutes } from '@modules/contract/infra/http/routes/contract.routes';
import { notificationRoutes } from '@modules/notification/infra/http/routes/notification.routes';
import { appErrors } from '@shared/infra/middlewares/appErrors';

const routes = Router();

routes.use('/user', userRoutes);

routes.use('/coupon', ensureAuth, couponRoutes);

routes.use('/contract', ensureAuth, contractRoutes);

routes.use('/notification', ensureAuth, notificationRoutes);

export { routes };
