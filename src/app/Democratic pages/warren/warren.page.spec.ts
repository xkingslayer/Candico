import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WarrenPage } from './warren.page';

describe('WarrenPage', () => {
  let component: WarrenPage;
  let fixture: ComponentFixture<WarrenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarrenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WarrenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
