import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameService } from './game/game.service';
import { BoxComponent } from './box/box.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [ FormsModule, ReactiveFormsModule ],
    declarations: [ AppComponent, BoxComponent ],
    providers: [ GameService ]
    })
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    });
  
  it('should be created', () => {
    expect(component).toBeTruthy();
  });  
});
