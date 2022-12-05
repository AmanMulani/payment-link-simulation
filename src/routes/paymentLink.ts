import { bank } from "./../api";
import { Request, Response, NextFunction } from "express";

export const paymentLink = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const link: string = await bank({
            amount: 1000,
            phoneNumber: 8446460397,
        });
        res.status(200).send({
            'link': link
        });
    } catch(e) {
        next(e);
    }
}