import { getRandomIndex } from "./../utils/getRandomIndex";
import { bankCName, bankCResponseTimes } from "./../constants/constants";
import { simulateBankAPI } from "./../utils/simulateBankAPI";
import { bankParam } from "./bank.type";

export const bankC = async ({ phoneNumber, amount }: bankParam) => {
    const responseTime = bankCResponseTimes[getRandomIndex(bankCResponseTimes.length)];
    return await simulateBankAPI({ bankName: bankCName, responseTime: 35, phoneNumber, amount });
}