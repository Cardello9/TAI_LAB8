import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogItemTextTitleComponent } from './blog-item-text-title.component';

describe('BlogItemTextTitleComponent', () => {
  let component: BlogItemTextTitleComponent;
  let fixture: ComponentFixture<BlogItemTextTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogItemTextTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogItemTextTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
