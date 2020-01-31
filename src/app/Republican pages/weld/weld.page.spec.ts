import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeldPage } from './weld.page';

describe('WeldPage', () => {
  let component: WeldPage;
  let fixture: ComponentFixture<WeldPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeldPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
