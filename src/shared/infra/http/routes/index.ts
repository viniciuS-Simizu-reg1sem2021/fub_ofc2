import { Router } from 'express'
import userRoutes from '../../../../modules/User/infra/http/routes/user.routes'
import couponRoutes from '../../../../modules/Coupon/infra/http/routes/coupon.routes'
import contractRoutes from '../../../../modules/Contract/infra/http/routes/contract.routes'
import notificationRoutes from '@modules/Notification/infra/http/routes/notification.routes'

const mainRouter = Router()

mainRouter.use('/notification', notificationRoutes)

mainRouter.use('/contract', contractRoutes)

mainRouter.use('/coupon', couponRoutes)

mainRouter.use('/user', userRoutes)

export { mainRouter }
