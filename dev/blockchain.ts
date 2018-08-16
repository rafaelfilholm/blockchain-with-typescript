export default class Blockchain {
	
	private chain: Array<any>;
	private newTransactions: Array<any>;
	
	constructor(){
		this.chain = [];
		this.newTransactions = [];
	}

	createNewBlock(nonce: any, previousBlockHash: string, hash: string){
		const newBlock = {
			index: this.chain.length + 1,
			timestamp: Date.now(),
			transactions: this.newTransactions,
			nonce: nonce,
			hash: hash,
			previousBlockHash: previousBlockHash,
		};

		/* Clear new transactions */
		this.newTransactions = [];

		/* Insert new block on chain */
		this.chain.push(newBlock);

		return newBlock;
	}

	getLastBlock(): any {
		return this.chain[this.chain.length - 1];
	}
}