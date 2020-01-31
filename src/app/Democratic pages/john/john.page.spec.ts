import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JohnPage } from './john.page';

describe('JohnPage', () => {
  let component: JohnPage;
  let fixture: ComponentFixture<JohnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JohnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JohnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
