import { bankAName, bankBName, bankCName } from "../constants";

let bankResponseTimes: BankResponseTimes = null;

// Singleton to dynamically calculate the bank response time.
export class BankResponseTimes {

    // Since we know that we have only 3 banks, we can use array to store the bank nodes,
    // in ascending order as per the response time.
    // We can use a priority queue for the same purpose, if the number of banks are increased significantly.
    private bankPriority: BankNode[];
    private downNodes: BankNode[];

    private constructor() {
        this.downNodes = [];
        this.bankPriority = [];
        this.bankPriority.push(new BankNode(bankAName, 0));
        this.bankPriority.push(new BankNode(bankBName, 0));
        this.bankPriority.push(new BankNode(bankCName, 0));
    }


    public static getInstance(): BankResponseTimes {
        if (bankResponseTimes === null) {
            bankResponseTimes = new BankResponseTimes();
        }
        return bankResponseTimes;
    }


    public updateResponseTime(responseTime: number, bankNode: BankNode) {
        //Updates the average response time for the requested bank.
        //avg response time = (response time till now)/(total requests  made to the bank).

        const reqBank = this.bankPriority.find(bank => bank == bankNode);
        reqBank.numberOfRequests += 1;
        reqBank.responseTime = (reqBank.numberOfRequests + responseTime) / reqBank.numberOfRequests;

        this.removeDownNode(bankNode);
        console.log(JSON.stringify(this.bankPriority));
    }


    public setDownNode(node: BankNode) {
        //Adds the node to downNodes.
        if (!this.downNodes.includes(node)) {
            node.lastDownTimestamp = Date.now();
            this.downNodes.push(node);
        }
    }

    public removeDownNode(node: BankNode) {
        //REmoves node from downNodes.
        this.downNodes = this.downNodes.filter(bank => bank !== node);
    }

    private updateDownNodes() {
        //If the downNodes length is three, that is all the banks are down, then the down nodes are reset.
        if (this.downNodes.length === 3) {
            this.downNodes = [];
            return;
        }

        //If any bank node lies in downNodes for more than 5mins, it is evicted from the list.
        this.downNodes = this.downNodes.filter(node => node.lastDownTimestamp < node.lastDownTimestamp + 300000);
    }

    public getMinResponseTimeBank() {
        //Returns the Bank with the minimum wait time.
        //If the bank node is in downNodes, then it won't be considered.
        this.updateDownNodes();

        const tempBankArr = this.bankPriority.filter((bank: BankNode) =>
            !this.downNodes.includes(bank)
        );
        tempBankArr.sort(this.compareResponseTime);

        return tempBankArr[0];
    }

    private compareResponseTime(b1: BankNode, b2: BankNode) {
        //Helper function that compares the response time of two bank nodes.
        if (b1.responseTime <= b2.responseTime) {
            return -1;
        }
        return 1;
    }
}


export class BankNode {
    bankName: string;
    responseTime: number;
    numberOfRequests: number;
    lastDownTimestamp: number;

    constructor(bankName: string, responseTime: number) {
        this.bankName = bankName;
        this.responseTime = responseTime;
        this.numberOfRequests = 0;
        this.lastDownTimestamp = 0;
    }
}