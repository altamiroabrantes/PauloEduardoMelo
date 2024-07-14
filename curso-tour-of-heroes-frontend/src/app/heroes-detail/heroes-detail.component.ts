import { Component, Input } from '@angular/core';
import { Hero } from '../hero.model';

@Component({
    selector: 'app-heroes-details',
    templateUrl: './heroes-detail.component.html',
    styleUrls: ['./heroes-detail.component.scss'],
})

export class HeroesDetailComponent {
   @Input() hero?: Hero;
}

