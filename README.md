# AI Art Studio

AI Art Studio is a modern web application that allows users to generate custom AI artwork by providing prompts and customizing various style parameters. The application integrates with the Fooocus API to generate images and provides a personal collection system where users can save and manage their generated masterpieces.

![AI Art Studio Screenshot](https://placeholder.com/ai-art-studio-screenshot.png)

## Features

- **AI Image Generation**: Generate custom artwork using text prompts
- **Style Customization**: Choose from various art styles and mediums
- **User Authentication**: Secure user accounts powered by Clerk
- **Personal Collections**: Save and manage your generated images
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Tech Stack

- **Frontend**:
  - React 18 (with Vite)
  - React Router
  - Tailwind CSS
  - Clerk for authentication
  - Axios for API requests

- **Backend**:
  - Express.js
  - MongoDB (with Mongoose)
  - Fooocus API integration

## Prerequisites

Before running this project, you'll need:

- Node.js (v16+)
- MongoDB database
- Clerk account for authentication
- Fooocus API instance (local or hosted)

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```

