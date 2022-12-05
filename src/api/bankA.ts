import { simulateBankAPI } from "./../utils/simulateBankAPI";
import { bankParam } from "./bank.type";
import { bankAName, bankAResponseTimes } from "./../constants/constants";
import { getRandomIndex } from "./../utils/getRandomIndex";

export const bankA = async ({ phoneNumber, amount }: bankParam) => {
    const responseTime = bankAResponseTimes[getRandomIndex(bankAResponseTimes.length)];
    return await simulateBankAPI({ bankName: bankAName, responseTime, phoneNumber, amount });
}