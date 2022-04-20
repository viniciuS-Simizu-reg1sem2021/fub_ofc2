import { verify } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

import auth from '@config/auth';
import { IPayloadDTO } from '@modules/User/dtos/IPayloadDTO';

export function ensureAuth(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const authToken = request.headers.authorization;
  const authConfig = auth();

  if (!authToken) {
    response.status(401).end();
    throw new Error('You are not authenticated');
  }

  const [, token] = authToken.split(' ');

  try {
    const { sub } = verify(
      token,
      authConfig.JWT_SECRET
    ) as unknown as IPayloadDTO;

    request.token.sub = sub;

    return next();
  } catch (err) {
    response.status(401).end();
  }
}
