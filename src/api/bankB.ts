import { getRandomIndex } from "./../utils/getRandomIndex";
import { bankBName, bankBResponseTimes } from "./../constants/constants";
import { simulateBankAPI } from "./../utils/simulateBankAPI";
import { bankParam } from "./bank.type";

export const bankB = async ({ phoneNumber, amount }: bankParam) => {
    const responseTime = bankBResponseTimes[getRandomIndex(bankBResponseTimes.length)];
    return await simulateBankAPI({ bankName: bankBName, responseTime, phoneNumber, amount });
}