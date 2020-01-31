import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookerPage } from './booker.page';

describe('BookerPage', () => {
  let component: BookerPage;
  let fixture: ComponentFixture<BookerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
