import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

	@Input() digit: any = 'N/A';
	@Input() description: string = 'No Available Data';

	constructor() { }

	ngOnInit(): void {
	}

}
