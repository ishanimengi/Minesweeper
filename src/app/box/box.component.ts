import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../game/game.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input() x: number;
	@Input() y: number;

	@Input() checked: boolean;
	@Input() hasBomb: boolean;
	@Input() neighbors: number;
  constructor(public game: GameService) { }

  ngOnInit() {
  }

}
