import { bankA } from "./../api/bankA";
import { bankB } from "./../api/bankB";
import { bankC } from "./../api/bankC";
import { Request, Response, NextFunction } from "express";

export const paymentLink = async (req: Request, res: Response, next: NextFunction) => {
    const link: string = await bankA({
        amount: 1000,
        phoneNumber: 8446460397,
    });

    res.status(200).send({
        'link': link
    });
}