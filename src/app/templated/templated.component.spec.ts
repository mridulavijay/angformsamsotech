import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedComponent } from './templated.component';

describe('TemplatedComponent', () => {
  let component: TemplatedComponent;
  let fixture: ComponentFixture<TemplatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplatedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
