import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenDormComponent } from './template-driven-dorm.component';

describe('TemplateDrivenDormComponent', () => {
  let component: TemplateDrivenDormComponent;
  let fixture: ComponentFixture<TemplateDrivenDormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TemplateDrivenDormComponent]
    });
    fixture = TestBed.createComponent(TemplateDrivenDormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
