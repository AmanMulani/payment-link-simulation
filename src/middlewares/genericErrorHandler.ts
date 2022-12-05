import { Request, Response, NextFunction } from 'express';

export const genericMiddlewareHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(429).json({
        'message': 'Please try again later.'
    });
}