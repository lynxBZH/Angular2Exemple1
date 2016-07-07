import { Injectable } from '@angular/core';
import { ARTICLE } from './article.mock';
import { Article } from './article';

@Injectable()
export class ClientService {

    constructor() { }

    public getClients() {
        return (ARTICLE);
       // return Promise.resolve(CLIENTS);
    
    }

    public getArticle(id : number) {
        return Promise.resolve(ARTICLE.filter(article => article.id === id));
    }

    public setArticle(article : Article) : boolean {
        return false;
    }

    public addArticle(client : Article) : boolean {
        return false;
    }

    public suppArticle(client : Article) : boolean {
        return false;
    }
     public suppAllArticle() : boolean {
        return false;
    }

}