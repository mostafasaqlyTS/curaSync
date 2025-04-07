import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutUsComponent } from './about-us.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

// Mock TranslateLoader
class MockTranslateLoader implements TranslateLoader {
  getTranslation = (lang: string) => of({});
}

// Mock ActivatedRoute
const mockActivatedRoute = {
  snapshot: {
    paramMap: {
      get: jasmine.createSpy('get').and.returnValue(null),
    },
  },
};

describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        AboutUsComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader },
        }),
      ],
      providers: [
        provideHttpClient(),
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize listOfContentAboutUs with content', () => {
    const content = component.listOfContentAboutUs();
    expect(content).toBeTruthy();
    expect(Array.isArray(content)).toBeTrue();
    expect(content.length).toBe(3);
  });

  it('should render translated heading', () => {
    const headingElement = fixture.debugElement.query(By.css('h2'));
    expect(headingElement.nativeElement.textContent.trim()).toBe('about us');
  });

  it('should display the correct number of content sections', () => {
    expect(fixture.debugElement.queryAll(By.css('.row')).length).toBe(3);
  });

  it('should apply correct ngStyle dynamically based on index', () => {
    const rows = fixture.debugElement.queryAll(By.css('.row'));
    expect(rows[0].nativeElement.style.flexDirection).toBe('row-reverse');
    expect(rows[1].nativeElement.style.flexDirection).toBe('row');
    expect(rows[2].nativeElement.style.flexDirection).toBe('row-reverse');
  });

});
