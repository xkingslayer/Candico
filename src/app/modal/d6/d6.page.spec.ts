import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D6Page } from './d6.page';

describe('D6Page', () => {
  let component: D6Page;
  let fixture: ComponentFixture<D6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
