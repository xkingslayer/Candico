import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GabbardPage } from './gabbard.page';

describe('GabbardPage', () => {
  let component: GabbardPage;
  let fixture: ComponentFixture<GabbardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GabbardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GabbardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
