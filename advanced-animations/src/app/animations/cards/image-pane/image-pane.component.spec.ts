import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePaneComponent } from './image-pane.component';

describe('ImagePaneComponent', () => {
  let component: ImagePaneComponent;
  let fixture: ComponentFixture<ImagePaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagePaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagePaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
