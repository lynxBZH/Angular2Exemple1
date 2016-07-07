
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Article }    from './article';
import { ArticleService } from './article.service';

@Component({
    selector: 'article-form',
    templateUrl: 'app/article/article.component.html',
    providers: [ArticleService]

})

export class ArticleDetailComponent implements OnInit {
    private _listeArticle: Article[];
    private _articleService: ArticleService;
    private _indiceEnCours: number;
    private _router: Router;

    constructor(articleService: ArticleService, router: Router) {
        this._articleService = articleService;
        this._router = router;
    }


    @Input() enrArticle: Article;
    titre = 'Saisie article';

    submitted = false;

    ngOnInit() {
        console.log(this._articleService + "coucou");
        this._listeArticle = this._articleService.getArticles();

        this.setEncours(0);

    }

    onSubmit() {
        this.submitted = true;
        if (this.enrArticle.id < 0)
            this._articleService.addArticle(this.enrArticle);
        else
            this._articleService.setArticle(this.enrArticle);
        this._listeArticle[this._indiceEnCours] = this.enrArticle;
    }

    active = true;
    private ajouterArticle() {
        this.enrArticle = new Article(0, '', 0, 0);
        this.active = false;
        setTimeout(() => this.active = true, 0);
        this._indiceEnCours = this._listeArticle.push(this.enrArticle) - 1;
    }

    private setEncours(ind: number): void {
        this.enrArticle = this._listeArticle[ind];
        this._indiceEnCours = ind;
    }

    private setSuivant() {
        if (this._indiceEnCours < this._listeArticle.length - 1)
            this.setEncours(++this._indiceEnCours);
    }

    private setPrecedent() {
        if (this._indiceEnCours > 0)
            this.setEncours(--this._indiceEnCours);
    }
}