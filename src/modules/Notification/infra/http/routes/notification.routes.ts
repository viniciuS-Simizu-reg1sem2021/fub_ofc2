import { Router } from 'express'
import { celebrate, Segments } from 'celebrate'
import createNotificationSchema from '@modules/Notification/schemas/createNotification.schema'
import NotificationController from '@modules/Notification/infra/http/controllers/NotificationController'
import updateNotificationSchema from '@modules/Notification/schemas/updateNotification.schema'

const notificationRouter = Router()
const notificationController = new NotificationController()

notificationRouter.post(
  '',
  [celebrate({ [Segments.BODY]: createNotificationSchema })],
  notificationController.create
)

notificationRouter.get('', notificationController.list)

notificationRouter.get('/:id', notificationController.find)

notificationRouter.put(
  '/:id',
  [celebrate({ [Segments.BODY]: updateNotificationSchema })],
  notificationController.update
)

notificationRouter.delete('/:id', notificationController.delete)

export default notificationRouter
