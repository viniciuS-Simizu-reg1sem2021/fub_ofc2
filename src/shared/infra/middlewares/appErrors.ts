import { NextFunction, Request, Response } from 'express';

import { AppError } from '@shared/errors/AppError';

export function appErrors(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
): void {
  if (err instanceof AppError) {
    response
      .status(400)
      .json({ status: 'Bad request error', message: err.message });
  }

  response
    .status(500)
    .json({ status: 'Internal server error', message: err.message });
}
