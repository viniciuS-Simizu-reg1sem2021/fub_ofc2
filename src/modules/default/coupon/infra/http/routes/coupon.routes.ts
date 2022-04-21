import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';

import { createCouponSchema } from '@modules/default/coupon/schemas/createCoupon.schema';
import { updateCouponSchema } from '@modules/default/coupon/schemas/updateCoupon.schema';
import { CouponController } from '@modules/default/coupon/infra/http/controllers/CouponController';

const couponRoutes = Router();
const couponController = new CouponController();

couponRoutes.post('', [
  celebrate({ [Segments.BODY]: createCouponSchema }, { abortEarly: false }),
  couponController.create,
]);

couponRoutes.get('', couponController.list);

couponRoutes.get('/:id', couponController.find);

couponRoutes.put(
  '/:id',
  [celebrate({ [Segments.BODY]: updateCouponSchema }, { abortEarly: false })],
  couponController.update
);

couponRoutes.delete('/:id', couponController.delete);

export { couponRoutes };
