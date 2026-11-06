import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HeroComponent } from './features/hero/hero.component';
import { AboutComponent } from './features/about/about.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { EducationComponent } from './features/education/education.component';
import { ResumeComponent } from './features/resume/resume.component';
import { ContactComponent } from './features/contact/contact.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    ResumeComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cursorX = signal(0);
  cursorY = signal(0);
  isCursorVisible = signal(false);

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    // Only track cursor on fine-pointer devices (desktop)
    if (window.matchMedia('(pointer: fine)').matches) {
      this.cursorX.set(e.clientX);
      this.cursorY.set(e.clientY);
      this.isCursorVisible.set(true);
    }
  }

  @HostListener('window:mouseleave')
  onMouseLeave(): void {
    this.isCursorVisible.set(false);
  }
}
