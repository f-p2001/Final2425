import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassrecordComponent } from './classrecord.component';

describe('ClassrecordComponent', () => {
  let component: ClassrecordComponent;
  let fixture: ComponentFixture<ClassrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassrecordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
