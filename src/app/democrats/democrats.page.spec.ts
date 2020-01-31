import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DemocratsPage } from './democrats.page';

describe('DemocratsPage', () => {
  let component: DemocratsPage;
  let fixture: ComponentFixture<DemocratsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemocratsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DemocratsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
