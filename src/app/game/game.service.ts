import { Injectable } from '@angular/core';
import { Box } from '../classes/box';

@Injectable()
export class GameService {

	public xCount: number;
	public yCount: number;
	public area: Box[][];
	public lost: boolean = false;

	constructor () {
		this.initialize();
	}

	public reveal (x: number, y: number) {
		if (this.area[y][x].hasBomb) {
			this.lost = true;
		}
		else {
			this.area[y][x].checked = true;
			this.automaticallyCheckNeighbors(x, y);
			if (this.leftToBeChecked === 0) { alert("You won!"); }
		}
	}

	private initialize () {
		this.lost = false;
		this.xCount = 10;
		this.yCount = 10;
		// initial
		this.area = [];
		for (let y = 0; y < this.yCount; y++) {
			this.area[y] = [];
			for (let x = 0; x < this.xCount; x++) {
				this.area[y][x] = new Box(this.randomBool());
				this.area[y][x].neighbors = 0;
			}
		}
		// add neighbors information
		for (let y = 0; y < this.yCount; y++) {
			for (let x = 0; x < this.xCount; x++) {
				this.area[y][x].neighbors = this.countNeighbors(x, y);
			}
		}
	}

	private randomBool (): boolean {
		return Math.random() > 0.9;
	}

	private countNeighbors (x: number, y: number): number {
		return this.getValidNeighbors(x, y)
			.map(arr => this.area[arr[1]][arr[0]])
			.filter(box => box.hasBomb)
			.length;
	}

	public getValidNeighbors (x: number, y: number): number[][] {
		const result: number[][] = [];
		if (this.area[y][x - 1]) { result.push([x - 1, y]); }
		if (this.area[y][x + 1]) { result.push([x + 1, y]); }

		if (this.area[y - 1]) {
			if (this.area[y - 1][x]) { result.push([x, y - 1]); }
			if (this.area[y - 1][x + 1]) { result.push([x + 1, y - 1]); }
			if (this.area[y - 1][x - 1]) { result.push([x - 1, y - 1]); }
		}

		if (this.area[y + 1]) {
			if (this.area[y + 1][x]) { result.push([x, y + 1]); }
			if (this.area[y + 1][x + 1]) { result.push([x + 1, y + 1]); }
			if (this.area[y + 1][x - 1]) { result.push([x - 1, y + 1]); }
		}
		return result;
	}

	public automaticallyCheckNeighbors (x: number, y: number): void {
		this.getValidNeighbors(x, y).filter(cords => !this.area[cords[1]][cords[0]].hasBomb)
		.forEach(cords => {
			this.area[cords[1]][cords[0]].checked = true;
		});
	}

	get checked (): number {
		return this.area.map(ySet => ySet.filter(box => box.checked).length).reduce((total, next) => total + next , 0);
	}

	get shouldBeChecked (): number {
		return this.area.map(ySet => ySet.filter(box => !box.hasBomb).length).reduce((total, next) => total + next , 0);
	}

	get leftToBeChecked (): number {
		return this.shouldBeChecked - this.checked;
	}

	get bombsCount (): number {
		return (this.yCount * this.xCount) - this.shouldBeChecked;
	}

}