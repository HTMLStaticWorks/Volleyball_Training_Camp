# Spike Volleyball Training Camp HTML Template

A high-performance, responsive HTML template designed for volleyball camp coordinators, athletic academies, college recruitment events, and sports coaches. Built to commercial ThemeForest quality standards.

## Project Details

* **Audience Focus**: Youth clinics (ages 9-13), high school prospect showcases (ages 14-18), parents, and NCAA scouts.
* **Layout Design**: Professional, performance-focused, primary dark experience (`#020617` background) with premium light mode theme toggle using `localStorage` persistence.
* **Responsive Breakpoints**: Seamless scaling at 320px, 375px, 425px, 768px, 1024px, 1440px, and ultra-wide formats.
* **Performance Assets**: Local Unsplash sports photography assets, fully lazy-loaded with clean responsive styles.

## Directory Structure

```
/volleyball-training-camp-website/
│
├── index.html               # Main Landing Page
├── home-2.html              # College Recruiting Focus Layout
├── programs.html            # Course Offerings & Clinics Index
├── program-details.html     # Course Syllabus & Pricing Schedules
├── seasonal-camps.html      # Camp Timetable & Calendar List
├── coaches.html             # Staff Biographies Grid
├── coach-details.html       # Coach Qualifications & Philosophies
├── success-stories.html     # Commitments & Placements Table
├── contact.html             # Inquiry Form & Support FAQs
├── login.html               # Portal Login Form (UI Only)
├── signup.html              # Registration Form (UI Only)
├── 404.html                 # Stylized Volleyball Out-of-Bounds Page
│
├── assets/
│   ├── css/
│   │   ├── bootstrap.min.css # Bootstrap 5 Grid-Only System
│   │   ├── style.css         # Main stylesheet with layout properties
│   │   ├── dark.css          # Dark Mode custom color overrides
│   │   └── animations.css    # Subtle transition hover effects
│   │
│   ├── js/
│   │   ├── main.js           # Responsive sticky nav, accordion drawer & validations
│   │   ├── theme-toggle.js   # Local storage theme state switcher
│   │   └── animations.js     # GSAP timeline ScrollTrigger scroll setups
│   │
│   ├── images/               # Organized by category (Hero, Programs, Coaches, etc.)
│   └── fonts/
```

## Styling & Typography

### Light Mode Variables
* **Primary (Championship Blue)**: `#1E3A8A`
* **Accent (Energy Orange)**: `#F97316`
* **Secondary**: `#475569`
* **Background**: `#F8FAFC`
* **Surface**: `#FFFFFF`
* **Text Primary**: `#0F172A`

### Dark Mode Variables (Primary Experience)
* **Background**: `#020617`
* **Surface**: `#0B1120`
* **Accent Blue**: `#3B82F6`
* **Accent Orange**: `#FB923C`
* **Text Primary**: `#E2E8F0`
* **Glass Surface**: `rgba(255, 255, 255, 0.04)`

### Typography
* **Headings**: `Rajdhani` (Athletic, block letters)
* **Body Text**: `Inter` (High-legibility sans-serif)

## Animations
Powered by GSAP & ScrollTrigger:
* **Entrance Timelines**: Smooth slide-in for Hero copy.
* **Scroll-Activated Reveals**: Fade-up animations for main headers and paragraph containers.
* **Grid Staggering**: Sequential reveals for cards.
* **Stat counters**: Automatic numerical counting for placed recruits.
