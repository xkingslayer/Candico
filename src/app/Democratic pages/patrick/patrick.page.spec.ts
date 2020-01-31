import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatrickPage } from './patrick.page';

describe('PatrickPage', () => {
  let component: PatrickPage;
  let fixture: ComponentFixture<PatrickPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatrickPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatrickPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
