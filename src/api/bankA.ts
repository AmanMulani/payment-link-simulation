import { simulateBankAPI } from "./../utils/simulateBankAPI";
import { bankParam } from "./bank.type";

export const bankA = async ({ phoneNumber, amount }: bankParam) => {
    return await simulateBankAPI({ bankName: 'bankA', responseTime: 400, phoneNumber, amount });
}