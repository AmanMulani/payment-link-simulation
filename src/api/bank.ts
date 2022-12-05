import { bankApiErrorMessage } from "./../constants";
import { simulateBankAPI, BankResponseTimes } from "./../utils";
import { bankParam } from "./bank.type";
import { getBankResponseTime } from "./getBankResponseTime";

export const bank = async ({ phoneNumber, amount }: bankParam) => {

    const bankStore = BankResponseTimes.getInstance();
    const requestTimeStamp = Date.now();

    //If the timestamp at which we received the request is 100ms less than the current timestamp,
    //then keep requesting for the link [Window Based Approach], else through error.
    //Once the link is received return it.
    while (requestTimeStamp + 100 > Date.now()) {
        const bankNode = bankStore.getMinResponseTimeBank();
        try {
            const responseTime: number = getBankResponseTime(bankNode.bankName);
            const link: string = await simulateBankAPI({ phoneNumber, bankName: bankNode.bankName, responseTime, amount });
            bankStore.updateResponseTime(responseTime, bankNode);
            return link;
        } catch (e) {
            console.log(`${bankNode.bankName} downtime...`);
            bankStore.setDownNode(bankNode);
        }
    }

    throw new Error(bankApiErrorMessage);
}