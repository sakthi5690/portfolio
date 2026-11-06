import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../../core/services/portfolio-data.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  private dataService = inject(PortfolioDataService);
  readonly personalInfo = this.dataService.personalInfo;

  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);
  activeSection = signal('home');

  navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const scrollPos = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled.set(scrollPos > 30);

    // Active section detection
    const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
    for (const section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const top = el.offsetTop - 120;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          this.activeSection.set(section);
          break;
        }
      }
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  scrollToSection(id: string): void {
    this.closeMobileMenu();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onDownloadResumeClick(): void {
    this.closeMobileMenu();
    // Scroll to resume section to inspect or download
    const resumeSection = document.getElementById('resume');
    if (resumeSection) {
      resumeSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

