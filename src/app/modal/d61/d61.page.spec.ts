import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D61Page } from './d61.page';

describe('D61Page', () => {
  let component: D61Page;
  let fixture: ComponentFixture<D61Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D61Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D61Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
