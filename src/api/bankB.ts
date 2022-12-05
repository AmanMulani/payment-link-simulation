import { simulateBankAPI } from "./../utils/simulateBankAPI";
import { bankParam } from "./bank.type";

export const bankB = async ({ phoneNumber, amount }: bankParam) => {
    return await simulateBankAPI({ bankName: 'bankB', responseTime: 40, phoneNumber, amount });
}