import { simulateBankAPI } from "./../utils/simulateBankAPI";
import { bankParam } from "./bank.type";

export const bankC = async ({ phoneNumber, amount }: bankParam) => {
    return await simulateBankAPI({ bankName: 'bankC', responseTime: 35, phoneNumber, amount });
}