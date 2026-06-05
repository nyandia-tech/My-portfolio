# Mary Nyandia - Portfolio Website

A modern, responsive portfolio website built with Django, HTML, CSS, and JavaScript. Showcase your skills, projects, and experience with a professional design.

## 🌟 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern Aesthetic** - Clean, professional design with smooth animations
- **Dark/Light Mode Compatible** - Color scheme uses CSS variables for easy customization
- **Interactive Navigation** - Smooth scroll navigation with active state tracking
- **Mobile Menu** - Responsive hamburger menu for smaller screens
- **Smooth Animations** - Scroll-triggered animations and transitions
- **Contact Section** - Ready for backend form integration
- **SEO Optimized** - Proper semantic HTML structure

## 📋 Sections

1. **Navigation Bar** - Sticky navigation with links to all sections
2. **Hero Section** - Eye-catching introduction with call-to-action
3. **About Me** - Personal background with profile image and social links
4. **Skills** - Grid layout showcasing technical expertise
5. **Projects** - Showcase of completed projects with descriptions
6. **Contact** - Contact form for inquiries

## 🛠️ Tech Stack

- **Backend**: Django (Python)
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Database**: SQLite (default)
- **Server**: Django Development Server

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- pip
- Virtual environment (recommended)

### Installation

1. Clone the repository
```bash
git clone https://github.com/nyandia-tech/my-portfolio.git
cd my-portfolio
```

2. Create and activate virtual environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies
```bash
pip install django
```

4. Run migrations
```bash
cd portfolio
python manage.py migrate
```

5. Start development server
```bash
python manage.py runserver
```

6. Open your browser and navigate to
```
http://127.0.0.1:8000
```

## 📁 Project Structure

```
My-portfolio/
├── portfolio/                    # Django project directory
│   ├── manage.py               # Django management script
│   ├── db.sqlite3              # SQLite database
│   ├── portfolio/              # Main project configuration
│   │   ├── settings.py         # Django settings
│   │   ├── urls.py            # URL routing
│   │   └── wsgi.py            # WSGI configuration
│   ├── showcase/               # Main Django app
│   │   ├── models.py          # Database models
│   │   ├── views.py           # View functions
│   │   ├── admin.py           # Admin configuration
│   │   ├── templates/
│   │   │   └── home.html      # Main portfolio template
│   │   └── migrations/        # Database migrations
│   └── static/                # Static files
│       ├── styles.css         # Main stylesheet
│       ├── script.js          # JavaScript functionality
│       └── images/            # Portfolio images
├── README.md                   # Project documentation
└── .gitignore                 # Git ignore rules
```

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #f59e0b;
    /* ... more colors ... */
}
```

### Content
Update the following files with your information:
- `templates/home.html` - Personal details, projects, skills
- `static/styles.css` - Style customizations
- `static/script.js` - Additional functionality

## 🔧 Features in Detail

### Responsive Navigation
- Sticky navbar that stays at the top while scrolling
- Mobile hamburger menu that toggles on smaller screens
- Smooth navigation with active state indicators

### Smooth Scrolling
- Click navigation items to smoothly scroll to sections
- Parallax effect in hero section
- Scroll-triggered animations for visual appeal

### Form Validation
- Real-time feedback on contact form inputs
- Error messages for invalid entries
- Ready for backend processing

### Performance
- Optimized CSS and JavaScript
- Minimal dependencies
- Fast loading times

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 📧 Contact

- **Email**: nyandiamary7@gmail.com
- **GitHub**: [nyandia-tech](https://github.com/nyandia-tech)
- **LinkedIn**: [Mary Nyandia](https://www.linkedin.com/in/mary-nyandia-69473031b/)

## 📄 License

This project is open source and available under the MIT License.

## 🎯 Future Enhancements

- [ ] Blog section
- [ ] Dark mode toggle
- [ ] Project filtering
- [ ] Backend contact form processing
- [ ] Download resume functionality
- [ ] Admin dashboard

---

**Made with ❤️ by Mary Nyandia**