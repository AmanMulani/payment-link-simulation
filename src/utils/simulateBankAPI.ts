export type simulateBankAPIParam = {
    responseTime: number, //in milliseconds
    phoneNumber: number,
    amount: number
}

export const simulateBankAPI = async (params: simulateBankAPIParam): Promise<string> => {

    //Returns the link from the phoneNumber and amount after responseTime milliseconds.
    const { responseTime, phoneNumber, amount } = params;
    return new Promise(res =>
        setTimeout(
            () => res(`bank-${phoneNumber}/${amount}`), 
            responseTime
        )
    );
}