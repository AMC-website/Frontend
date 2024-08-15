# AEROMODELLING CLUB <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfA6Lsw9OjXRUqY00bO22-gQQlsUeU0R5Gww&s" alt="Aeromodelling Club Logo" align="right" width="110" height="113">

## 🛫 Introduction
Welcome to the AEROMODELLING CLUB of IIT (BHU),Varanasi. We are a passionate group of students dedicated to the design, construction, and flight of model aircraft, RC planes, Quadcopters, etc. Our club provides a platform for enthusiasts to explore aerodynamics, flight mechanics, and the practical aspects of aircraft design.

## 📋 Table of Contents
- 🛫 [Introduction](#introduction)
- 🛠️ [Built With](#built-with)
- ✨ [Features](#features)
- ⚙️ [Installation](#installation)
- 🔧 [Configuration](#configuration)
- 📦 [Dependencies](#dependencies)
- 📂 [Repository Structure](#repository-structure)
- 📞 [Contact Us](#contact-us)

## 🛠️ Built With

- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black)
- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white)
- ![CSS](https://img.shields.io/badge/CSS-1572B6.svg?style=flat&logo=CSS3&logoColor=white)
- ![Shell](https://img.shields.io/badge/Shell-4EAA25.svg?style=flat&logo=GNU-Bash&logoColor=white)
- ![Prettier](https://img.shields.io/badge/Prettier-F7B93E.svg?style=flat&logo=Prettier&logoColor=black)
- ![Webpack](https://img.shields.io/badge/Webpack-8DD6F9.svg?style=flat&logo=Webpack&logoColor=black)
- ![React](https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black)
- ![ESLint](https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white)
- ![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF.svg?style=flat&logo=GitHub-Actions&logoColor=white)
- ![JSON](https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white)
- ![Next.js](https://img.shields.io/badge/Next.js-000000.svg?style=flat&logo=Next.js&logoColor=white)

## ✨ Features

### Hands-on Learning

Experience the thrill of learning by doing. Our club emphasizes practical, hands-on experiences where members design, build, and test model aircraft. This approach ensures that theoretical knowledge is solidified through real-world application, giving students a comprehensive understanding of aerodynamics and flight mechanics.

### Build-driven
At the heart of our club is the drive to create. We focus on the entire process of aircraft construction, from initial design to the final flight. Members are encouraged to take initiative and lead projects, fostering a deep sense of accomplishment and a robust skill set in aeromodelling.

### Innovative
Innovation is key to our mission. We constantly push the boundaries of traditional aeromodelling, experimenting with new materials, designs, and technologies. Our projects aim to be at the cutting edge of aviation trends, inspiring creativity and forward-thinking among our members.

### Cutting-edge Aviation
Stay ahead of the curve with our club's focus on cutting-edge aviation. We explore the latest advancements in the field, incorporating modern technology into our designs. This forward-looking approach ensures that our members are well-versed in the current and future trends of aeronautics.

### Inter-disciplinary
Our club thrives on the collaboration of students from various disciplines. By integrating knowledge from different fields such as engineering, physics, and computer science, we enrich our projects and broaden our members' perspectives, making our designs more robust and innovative.

### Collaborative
Teamwork is the cornerstone of our club. We foster a collaborative environment where members work together on challenging projects. By combining different skill sets and perspectives, we achieve greater innovation and success, while also building strong networks and friendships.


## ⚙️ Installation
To set up your development environment for the Aeromodelling Club projects, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/IIT-BHU-Aero/Aeromodelling-Club.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Aeromodelling-Club
    ```

3. Install necessary dependencies:
    ```bash
    npm install
    ```

4. Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## 🔧 Configuration
To ensure your development environment is correctly set up for Aeromodelling Club projects, follow these configuration steps:

#### Ensure Required Software is Installed:

- Node.js: Required for running JavaScript on the server-side and managing project dependencies.
- TypeScript: For adding type safety to your JavaScript code.
- Next.js: Framework used for building server-rendered React applications.
- Install Node.js from nodejs.org. TypeScript and Next.js will be installed automatically through npm or yarn.

#### Configure Project Environment:

- Environment Variables: May require environment variables for proper configuration. Create a .env file in the root of your project and define any necessary variables.
Setup Specific Tools and Compilers.

- tsconfig.json: Ensure that TypeScript configuration is appropriate for your project. Modify the file as needed to match the project's requirements.
next.config.js: Configure Next.js settings if required, including custom webpack configurations or environment-specific settings.
Verify Installation:

- Verify Installation: Run the development server to check if everything is configured correctly.
Visit http://localhost:3000 in your browser to ensure the application is running as expected.

## 📦 Dependencies
This repository requires the following software and libraries:

- Node.js
- TypeScript
- Next.js
- CSS frameworks


##  📂 Repository Structure

```sh
└── AMC-PROJECT/
    ├── .github
    │   └── workflows
    │       └── production.yml
    ├── README.md
    ├── contents
    │   ├── biggest-passenger-aircraft.md
    │   ├── hypersonic-engine-development.md
    │   ├── pushpak.md
    │   └── tejas.md
    ├── lib
    │   └── getPosts.ts
    ├── next.config.js
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── black drone new.jpg
    │   ├── black drone old.jpg
    │   ├── closeIcon.png
    │   ├── drone.jpg
    │   ├── drone1.jpg
    │   ├── drone2.jpg
    │   ├── flight1.jpg
    │   ├── flight2.jpg
    │   ├── font
    │   │   └── Roobert-Regular.ttf
    │   ├── image.jpg
    │   ├── imageGallery
    │   ├── members
    │   └── model_imgs
    ├── src
    │   ├── components
    │   │   ├── About
    │   │   │   └── BasicCard.tsx
    │   │   ├── Carousel.tsx
    │   │   ├── ChangeColorOnScroll.ts
    │   │   ├── Contact
    │   │   │   └── ContactForm.tsx
    │   │   ├── Cursor.tsx
    │   │   ├── Docs
    │   │   │   └── MarkdownComponents.tsx
    │   │   ├── Footer.tsx
    │   │   ├── Home
    │   │   │   ├── AMCSection.tsx
    │   │   │   ├── CardHolder.tsx
    │   │   │   ├── Logo.tsx
    │   │   │   ├── Parallax.tsx
    │   │   │   └── WelcomeSection.tsx
    │   │   ├── Member
    │   │   │   ├── MemberCard.tsx
    │   │   │   └── members.tsx
    │   │   ├── MovingText.tsx
    │   │   ├── Navbar
    │   │   │   ├── Logo.tsx
    │   │   │   ├── NavItem.tsx
    │   │   │   └── Navbar.tsx
    │   │   └── Projects
    │   │       ├── ProjectCard.tsx
    │   │       └── projects.tsx
    │   ├── constants.ts
    │   ├── data
    │   │   ├── contact.ts
    │   │   ├── imagegallery.ts
    │   │   ├── members.ts
    │   │   ├── navigation.ts
    │   │   ├── photos.ts
    │   │   └── projects.ts
    │   ├── pages
    │   │   ├── _app.tsx
    │   │   ├── _document.tsx
    │   │   ├── blogs
    │   │   │   ├── [id].tsx
    │   │   │   └── index.tsx
    │   │   ├── gallery
    │   │   │   └── index.tsx
    │   │   ├── index.tsx
    │   │   └── members
    │   │       └── index.tsx
    │   ├── styles
    │   │   ├── Card.module.css
    │   │   ├── contact.module.css
    │   │   ├── events.module.css
    │   │   ├── global.css
    │   │   ├── home.module.css
    │   │   ├── index.module.css
    │   │   └── members.module.css
    │   └── theme.js
    └── tsconfig.json

```

---

## 📞 Contact Us

For any questions or inquiries, feel free to contact us via email:

[![Gmail](https://img.shields.io/badge/Gmail-aero.iitbhu@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:aero.iitbhu@gmail.com)

Connect with us on social media:

[![Facebook](https://img.shields.io/badge/Facebook-amc.iitbhu-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/amc.iitbhu/)
[![Instagram](https://img.shields.io/badge/Instagram-amc.iitbhu-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/amc.iitbhu/reels/?locale=de&hl=am-et)
