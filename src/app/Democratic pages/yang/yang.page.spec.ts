import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YangPage } from './yang.page';

describe('YangPage', () => {
  let component: YangPage;
  let fixture: ComponentFixture<YangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YangPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
