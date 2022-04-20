import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';
import createNotificationSchema from '@modules/Notification/schemas/createNotification.schema';
import NotificationController from '@modules/Notification/infra/http/controllers/NotificationController';
import updateNotificationSchema from '@modules/Notification/schemas/updateNotification.schema';

const notificationRoutes = Router();
const notificationController = new NotificationController();

notificationRoutes.post(
  '',
  [celebrate({ [Segments.BODY]: createNotificationSchema })],
  notificationController.create
);

notificationRoutes.get('', notificationController.list);

notificationRoutes.get('/:id', notificationController.find);

notificationRoutes.put(
  '/:id',
  [celebrate({ [Segments.BODY]: updateNotificationSchema })],
  notificationController.update
);

notificationRoutes.delete('/:id', notificationController.delete);

export { notificationRoutes };
