import { bankApiErrorMessage } from "./../constants";

export type simulateBankAPIParam = {
    responseTime: number, //in milliseconds
    phoneNumber: number,
    amount: number,
    bankName: string
}

export const simulateBankAPI = async ({ responseTime, phoneNumber, amount, bankName }: simulateBankAPIParam): Promise<string> => {
    //Returns the link from the phoneNumber and amount after responseTime milliseconds.
    if (responseTime < 0) {
        //When we have responseTime less than 0, then throw an error, reporting the bank's system downtime.
        throw new Error(bankApiErrorMessage);
    }
    return new Promise(res =>
        setTimeout(
            () => res(`${bankName}/${phoneNumber}/${amount}-${responseTime}`),
            responseTime
        )
    );
}