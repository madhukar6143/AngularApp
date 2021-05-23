import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseusersComponent } from './databaseusers.component';

describe('DatabaseusersComponent', () => {
  let component: DatabaseusersComponent;
  let fixture: ComponentFixture<DatabaseusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabaseusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
