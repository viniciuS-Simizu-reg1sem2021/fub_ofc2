import { verify } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

import auth from '@config/auth';
import { IPayloadDTO } from '@modules/user/dtos/IPayloadDTO';
import { AppError } from '@shared/errors/AppError';

export function ensureAuth(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const authToken = request.headers.authorization;
  const authConfig = auth();

  if (!authToken) {
    response.status(401).end();
    throw new AppError('You are not authenticated');
  }

  const [, token] = authToken.split(' ');

  try {
    request.token = verify(
      token,
      authConfig.JWT_SECRET
    ) as unknown as IPayloadDTO;

    next();
  } catch (err) {
    response.status(401).end();
    console.log(err);
  }
}
