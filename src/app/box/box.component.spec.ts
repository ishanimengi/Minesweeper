import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxComponent } from './box.component';
import { GameService } from '../game/game.service';

describe('BoxComponent', () => {
  let component: BoxComponent;
  let fixture: ComponentFixture<BoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [  ],
    declarations: [ BoxComponent ],
    providers: [ GameService ]
    })
    fixture = TestBed.createComponent(BoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
