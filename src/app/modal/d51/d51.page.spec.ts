import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D51Page } from './d51.page';

describe('D51Page', () => {
  let component: D51Page;
  let fixture: ComponentFixture<D51Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D51Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D51Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
