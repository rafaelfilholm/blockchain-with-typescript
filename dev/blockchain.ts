export default class Blockchain {
	
	private chain: Array<any>;
	private pendingTransactions: Array<any>;
	
	constructor(){
		this.chain = [];
		this.pendingTransactions = [];
	}

	createNewBlock(nonce: any, previousBlockHash: string, hash: string): any{
		const newBlock = {
			index: this.chain.length + 1,
			timestamp: Date.now(),
			transactions: this.pendingTransactions,
			nonce: nonce,
			hash: hash,
			previousBlockHash: previousBlockHash,
		};

		/* Clear new transactions */
		this.pendingTransactions = [];

		/* Insert new block on chain */
		this.chain.push(newBlock);

		return newBlock;
	}

	getLastBlock(): any {
		return this.chain[this.chain.length - 1];
	}

	createNewTransaction(amount: number, sender: string, recipient: string){
		const newTransaction = {
			amount: amount, 
			sender: sender,
			recipient: recipient
		};

		/* Insert the new transaction */
		this.pendingTransactions.push(newTransaction);

		return this.getLastBlock()['index'] + 1;
	}
}