import { Request, Response, NextFunction } from "express";
import { simulateBankAPI } from "./../utils/simulateBankAPI";

export const paymentLink = async (req: Request, res: Response, next: NextFunction) => {
    const link: string = await simulateBankAPI({
        amount: 1000,
        phoneNumber: 8446460397,
        responseTime: 1500
    });
    res.status(200).send({
        'link': link
    });
}