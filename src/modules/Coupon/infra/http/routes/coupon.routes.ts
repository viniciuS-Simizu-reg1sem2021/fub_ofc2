import { Router } from 'express'
import { celebrate, Segments } from 'celebrate'
import CouponController from '../controllers/CouponController'
import createCouponSchema from '../../../schemas/createCoupon.schema'
import updateCouponSchema from '../../../schemas/updateCoupon.schema'

const couponRouter = Router()
const couponController = new CouponController()

couponRouter.post('', [
  celebrate({ [Segments.BODY]: createCouponSchema }, { abortEarly: false }),
  couponController.create,
])

couponRouter.get('', couponController.list)

couponRouter.get('/:id', couponController.find)

couponRouter.put(
  '/:id',
  [celebrate({ [Segments.BODY]: updateCouponSchema }, { abortEarly: false })],
  couponController.update
)

couponRouter.delete('/:id', couponController.delete)

export default couponRouter
