# Luna Maria Portfolio

A personal portfolio website for Luna Maria, a full-stack developer.

## Project Overview

Static HTML/CSS website with no build system or framework dependencies. All styling is done with vanilla CSS, and dependencies (Animate.css, Google Fonts) are loaded from CDNs.

## Structure

```
.
├── index.html        # Main landing page
├── sobremi.html      # "About Me" page (in Spanish)
├── css/
│   └── style.css     # Main stylesheet with CSS variables and animations
└── img/
    └── banner.jpg    # Header background image
```

## Running the Project

Served with Python's built-in HTTP server:

```
python3 -m http.server 5000 --bind 0.0.0.0
```

The site is available at port 5000.

## Deployment

Configured as a static deployment with the root directory as the public directory.
