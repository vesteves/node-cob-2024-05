import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = jwt.verify(req.headers.authorization?.split(' ')[1]!, 'cob2024')
    res.locals.data = data;

    return next()
  } catch (error: any) {
    res.status(500).json({
      error: 'Não foi possível se autenticar'
    })
  }
}