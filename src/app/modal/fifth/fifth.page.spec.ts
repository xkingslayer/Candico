import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FifthPage } from './fifth.page';

describe('FifthPage', () => {
  let component: FifthPage;
  let fixture: ComponentFixture<FifthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FifthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
