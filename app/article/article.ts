

/**
 * Article
 */
export class Article {
	id: number;
	description: string; 
	prixHt: number;
	tva: number;
	
	
	constructor(id: number, description: string, prixHt: number, tva?: number) {
	 	this.id = id;
	 	this.description = description;
        this.prixHt = prixHt;
        this.tva = null;
	}
}

