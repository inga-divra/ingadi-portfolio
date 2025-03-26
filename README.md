# IngaDI Portfolio

[Visit the Live Site](https://ingadi-portfolio.vercel.app/)

## Overview

IngaDI Portfolio is a personal portfolio website built with **Next.js**, designed to showcase projects, skills, and professional experience. The website features a modern UI with sections for services, resume, work, and contact.

## Features

- **Full-Stack Implementation** - Includes both frontend and backend functionality.
- **Contact Form with Email Integration** - Users can send messages directly via the form.
- **Responsive Design** - Fully optimized for all screen sizes.
- **Next.js for Performance** - Uses Next.js for fast loading and SEO optimization.
- **Dynamic Navigation** - Pages for home, services, resume, work, and contact.
- **Integration with GitHub & LinkedIn** - Quick access to social profiles.
- **Hire Me Section** - Contact button for potential clients or employers.

## Technologies Used

- **Next.js** - Framework for server-side rendering and static site generation.
- **React.js** - Component-based UI structure.
- **Tailwind CSS** - Modern styling with utility classes.
- **Nodemailer** - Used for backend email functionality.
- **Vercel** - Deployment for fast and scalable hosting.

## Contact Form & Backend Functionality

The portfolio includes a fully functional contact form that sends messages directly to the configured email.

### How to Submit a Message:

1. Navigate to the **Contact** page.
2. Fill out the required fields (Name, Email, Phone, and Message).
3. Click **Send Message**.
4. If successful, a confirmation message will appear, and the email will be sent.

### Backend Implementation:

- The backend uses **Next.js API Routes** to handle form submissions.
- **Nodemailer** is used to send emails.
- Messages are sent securely to the designated email address.

## Live Demo

[Visit the Live Site](https://ingadi-portfolio.vercel.app/)

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/inga-divra/portfolio.git
   ```
2. Navigate to the project directory:
   ```sh
   cd portfolio
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables for email configuration in a `.env.local` file:
   ```sh
   EMAIL_RECEIVER=your-email@example.com
   EMAIL_USER=your-email@example.com
   EMAIL_PASSWORD=your-email-password
   ```
5. Run the development server:
   ```sh
   npm run dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment

This project is deployed on Vercel. To deploy your own version:

```sh
vercel
```

## Contact

For inquiries, reach out via [LinkedIn](https://www.linkedin.com/in/inga-divra-b15532219/) or [GitHub](https://github.com/inga-divra).
