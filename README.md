# Fullstack Challenge Client

This is the frontend client for the Fullstack Challenge project. It is built with **React.js**, **TypeScript**, **Redux Toolkit**, and **Material-UI**.

## Project Overview

The application allows users to view, create, and manage announcements and quizzes. It integrates with a backend API to fetch and manipulate data, with state management handled by Redux.

## Features

- Display a list of announcements and quizzes
- Create, edit, and delete announcements and quizzes
- Integration with backend API
- Loading state handling
- Responsive UI with Material-UI components
- Unit tests for components

## My Contributions

The following code was written by me:

- **Components**
   - All main components such as `AnnouncementCard.tsx`, `AnnouncementsPage.tsx`, `QuizzesPage`, `Sidebar`, `Navbar` and others
  - `App.tsx` – main app component
- **Unit Tests**
  - `AnnouncementCard.test.tsx` – tests for the AnnouncementCard component
  - `App.test.tsx` – tests for the main App component
- **Redux / API Integration in Tests**
  - Mocking API calls for announcements
  - Testing state updates for announcements page (if implemented)

All other code (boilerplate, setup files, or pre-existing components) was provided in the original project.

## How to Run

1. Install dependencies:

```bash
npm install
