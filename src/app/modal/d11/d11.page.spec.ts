import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D11Page } from './d11.page';

describe('D11Page', () => {
  let component: D11Page;
  let fixture: ComponentFixture<D11Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D11Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
