<div align="center">
  <br />
    <a href="https://meetup-five-xi.vercel.app/" target="_blank">
      <img src="https://github.com/Deepak-technical/meetup/blob/main/public/images/banner.png" alt="Meetup Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Badge" />
    <img src="https://img.shields.io/badge/-Next_JS-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js Badge" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS Badge" />
  </div>

  <h3 align="center">A Zoom Clone</h3>

  <div align="center">
    Follow our step-by-step tutorial to build this project on <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a> YouTube channel. Join the JSM family!
  </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Assets & Code](#snippets)
6. 🚀 [More](#more)

## 🚨 Tutorial

This repository includes the code for a comprehensive tutorial available on our YouTube channel, <a href="https://github.com/Deepak-technical/meetup" target="_blank"><b>JavaScript Mastery</b></a>.

## <a name="introduction">🤖 Introduction</a>

This project, built with Next.js and TypeScript, is a replica of Zoom, a popular video conferencing tool. It allows users to log in securely, create meetings, and use various features like recording, screen sharing, and participant management.


## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- Clerk
- getstream
- shadcn
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 **Authentication**: Secure login via social sign-on or email/password using Clerk, with proper access levels and permissions.

👉 **New Meeting**: Easily start a new meeting with camera and microphone configuration.

👉 **Meeting Controls**: Full control over meeting aspects such as recording, emoji reactions, screen sharing, muting, sound adjustments, grid layout, participant list view, and individual participant management.

👉 **Exit Meeting**: Leave or end meetings for all participants.

👉 **Schedule Future Meetings**: Schedule and manage future meetings with details like date and time.

👉 **Past Meetings List**: View and access details of previously held meetings.

👉 **View Recorded Meetings**: Access and review recordings of past meetings.

👉 **Personal Room**: Unique personal room link for instant meetings.

👉 **Join Meetings via Link**: Join meetings created by others using a provided link.

👉 **Secure Real-time Functionality**: Ensures secure, real-time interactions while maintaining user privacy and data integrity.

👉 **Responsive Design**: Optimized for different devices, ensuring a seamless user experience across various screen sizes and resolutions.

And many more features, including robust code architecture and reusability.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally:

**Prerequisites**

Ensure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

**Cloning the Repository**

```bash
git clone https://github.com/Deepak-technical/meetup/
cd zoom-clone
```

**Installation**

Install dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a `.env` file in the root directory and add the following content:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=
```

Replace placeholder values with your actual Clerk and getstream credentials. Sign up on [Clerk](https://clerk.com/) and [getstream](https://getstream.io/) to obtain them.

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
