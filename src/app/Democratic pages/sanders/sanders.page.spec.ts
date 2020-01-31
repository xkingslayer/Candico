import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SandersPage } from './sanders.page';

describe('SandersPage', () => {
  let component: SandersPage;
  let fixture: ComponentFixture<SandersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SandersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
