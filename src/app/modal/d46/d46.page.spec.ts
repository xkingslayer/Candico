import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D46Page } from './d46.page';

describe('D46Page', () => {
  let component: D46Page;
  let fixture: ComponentFixture<D46Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D46Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D46Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
