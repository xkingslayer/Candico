import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MariPage } from './mari.page';

describe('MariPage', () => {
  let component: MariPage;
  let fixture: ComponentFixture<MariPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MariPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MariPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
