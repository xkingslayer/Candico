import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D45Page } from './d45.page';

describe('D45Page', () => {
  let component: D45Page;
  let fixture: ComponentFixture<D45Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D45Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D45Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
