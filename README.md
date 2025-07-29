# MERN-AI-ChatBot Frontend

This is the frontend for the MERN-AI-ChatBot application, built with React, TypeScript, and Vite.

## Features

- User authentication (signup, login, logout)
- Chat interface with AI assistant
- Responsive design with Material UI
- Code syntax highlighting

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the frontend directory
3. Install dependencies:

```bash
npm install
# or
yarn install
```

4. Create a `.env` file based on `.env.example` and set your environment variables

### Development

To run the development server:

```bash
npm run dev
# or
yarn dev
```

### Building for Production

```bash
npm run build
# or
yarn build
```

## Deployment to Heroku

1. Create a Heroku app:

```bash
heroku create your-app-name
```

2. Set environment variables:

```bash
heroku config:set VITE_API_BASE_URL=https://your-backend-url.herokuapp.com/api/v1
```

3. Deploy to Heroku:

```bash
git push heroku main
```

## Project Structure

- `src/` - Source code
  - `assets/` - Static assets
  - `components/` - React components
  - `context/` - React context providers
  - `helpers/` - Utility functions
  - `pages/` - Page components
- `public/` - Public assets

## Technologies Used

- React
- TypeScript
- Vite
- Material UI
- Axios
- React Router
- React Hot Toast
- React Syntax Highlighter
