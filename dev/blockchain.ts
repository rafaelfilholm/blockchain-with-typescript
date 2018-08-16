class Blockchain {
	
	private chain: Array<any>
	private pedingTransactions: Array<any>
	private currentNodeUrl: string
	
	constructor(
		chain: Array<any>, 
		pedingTransactions: Array<any>,
		currentNodeUrl: string
	){
		this.chain = chain
		this.pedingTransactions = pedingTransactions
		this.currentNodeUrl = currentNodeUrl
	}

}