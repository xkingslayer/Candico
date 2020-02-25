import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D42Page } from './d42.page';

describe('D42Page', () => {
  let component: D42Page;
  let fixture: ComponentFixture<D42Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D42Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D42Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
