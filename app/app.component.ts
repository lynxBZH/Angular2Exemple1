import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ClientDetailComponent } from './client/client.component';
import { ArticleDetailComponent } from './article/article.component';
import { ClientService } from './client/client.service';
import { ArticleService } from './article/article.service';

@Component({
    selector: 'my-app',
    
    templateUrl: 'app/app.component.html',
 
    directives: [ROUTER_DIRECTIVES],
    providers: [ClientDetailComponent, ArticleDetailComponent]
})

export class AppComponent  {
  
}


//*ngIf="article.length > 0"