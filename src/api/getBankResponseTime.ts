import { bankAName, bankAResponseTimes, bankBName, bankBResponseTimes, bankCName, bankCResponseTimes } from "./../constants";
import { getRandomIndex } from "./../utils";

export const getBankResponseTime = (bankName: string): number => {
    switch (bankName) {
        case bankAName: {
            return bankAResponseTimes[getRandomIndex(bankAResponseTimes.length)];
        }
        case bankBName: {
            return bankBResponseTimes[getRandomIndex(bankBResponseTimes.length)];
        }
        case bankCName: {
            return bankCResponseTimes[getRandomIndex(bankCResponseTimes.length)];
        }
        default: {
            console.log('Inside default section.');
            return 50;
        }
    }
}