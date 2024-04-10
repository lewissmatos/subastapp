export type AuctionItemStatus = "Nuevo" | "Usado" | "Reacondicionado";

export interface IAuction {
	id: number;
	name: string;
	description: string;
	status: AuctionItemStatus;
	price: number;
	limitDate: Date;
	categories: string[];
}

export interface IBid {
	id: number;
	bidderName: string;
	amount: number;
	date: Date;
}
