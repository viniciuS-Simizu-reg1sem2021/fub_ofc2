import { Router } from 'express'
import userRoutes from '../../../../modules/User/infra/http/routes/user.routes'
import couponRoutes from '../../../../modules/Coupon/infra/http/routes/coupon.routes'
import contractRoutes from '../../../../modules/Contract/infra/http/routes/contract.routes'
import exampleRoutes from '../../../../modules/ExampleModule/infra/http/routes/example.routes'

const mainRouter = Router()

mainRouter.use('/contract', contractRoutes)

mainRouter.use('/example', exampleRoutes)

mainRouter.use('/coupon', couponRoutes)

mainRouter.use('/user', userRoutes)

export { mainRouter }
