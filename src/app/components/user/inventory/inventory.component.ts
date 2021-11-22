import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
	selector: 'app-inventory',
	templateUrl: './inventory.component.html',
	styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
	categoryArr: {"c_id": number, "c_name": string}[] = [];
	checkedCategory: {"c_id": number, "c_name": string}[] = [];

	pattern: string[] = ['Lehenga', 'Saree','Bridesmaid'];
	checkedPattern: string[] = [];

	color: string[] = ['Red', 'Yellow','Pink'];
	checkedColor: string[] = [];

	constructor(private inventoryService:InventoryService) { 

	}

	getItem(event: any, index: number) {
		console.log(event.target)
		if(event.target.checked) {
			this.checkedCategory.push(this.categoryArr[index]);

		} else {
			if (index > -1) {
				this.checkedCategory.splice(index, 1);
			}
		}
		console.log(this.checkedCategory)
	}

	getPattern(event: any){
		if(event.target.checked) {
			this.checkedPattern.push(event.target.value);
		} else {
			const index = this.checkedPattern.indexOf(event.target.value);
			if (index > -1) {
				this.checkedPattern.splice(index, 1);
			}
		}
		console.log(this.checkedPattern)	
	}

	getColor(event: any){
		if(event.target.checked) {
			this.checkedColor.push(event.target.value);
		} else {
			const index = this.checkedColor.indexOf(event.target.value);
			if (index > -1) {
				this.checkedColor.splice(index, 1);
			}
		}
	}

	getInventory(){
		this.inventoryService.getCategory().subscribe(
			resData => {
				this.categoryArr = resData;
			},
			errorMessage => {
				console.log(errorMessage);
			}
			);
	}

	ngOnInit(): void {
		this.getInventory();
	}

}