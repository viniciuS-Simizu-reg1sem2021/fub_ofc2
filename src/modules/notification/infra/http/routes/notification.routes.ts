import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';

import { createNotificationSchema } from '@modules/notification/schemas/createNotification.schema';
import { updateNotificationSchema } from '@modules/notification/schemas/updateNotification.schema';
import { NotificationController } from '@modules/notification/infra/http/controllers/NotificationController';

const notificationRoutes = Router();
const notificationController = new NotificationController();

notificationRoutes.post(
  '',
  [celebrate({ [Segments.BODY]: createNotificationSchema })],
  notificationController.create
);

notificationRoutes.get('/user', notificationController.findByUser);

notificationRoutes.get('', notificationController.list);

notificationRoutes.get('/:id', notificationController.findById);

notificationRoutes.put(
  '/:id',
  [celebrate({ [Segments.BODY]: updateNotificationSchema })],
  notificationController.update
);

notificationRoutes.delete('/:id', notificationController.softDelete);

export { notificationRoutes };
