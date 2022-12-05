export type simulateBankAPIParam = {
    responseTime: number, //in milliseconds
    phoneNumber: number,
    amount: number,
    bankName: string
}

export const simulateBankAPI = async ({ responseTime, phoneNumber, amount, bankName }: simulateBankAPIParam): Promise<string> => {

    //Returns the link from the phoneNumber and amount after responseTime milliseconds.
    return new Promise(res =>
        setTimeout(
            () => res(`${bankName}/${phoneNumber}/${amount}`),
            responseTime
        )
    );
}