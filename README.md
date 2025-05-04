# AI Art Studio

AI Art Studio is a modern web application that allows users to generate custom AI artwork by providing prompts and customizing various style parameters. The application integrates with the Fooocus API to generate images and provides a personal collection system where users can save and manage their generated masterpieces.


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

- `VITE_API_HOST`
- `VITE_BACKEND_URL`
- `VITE_CLERK_PUBLISHABLE_KEY`

In server directory Create a `.env` file with the following variables:
- `PORT`
- `DBURL`
- `ORIGIN`

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/ai-art-studio.git
   cd ai-art-studio
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the required variables as mentioned above.

4. Start the development server:
   ```sh
   npm run dev
   ```

## Usage

1. Open your browser and navigate to `http://localhost:5173`.
2. Sign up or log in using your Clerk account.
3. Start generating and customizing your AI artwork!

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.



