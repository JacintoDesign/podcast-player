# Podcast Player

This project is a podcast player built using the Podcast Index API and a Node.js server, deployed on Render. The player allows users to search for podcasts, browse episodes, and play audio directly in the browser.

## Features

- **Search Podcasts:** Find podcasts by title, author, or keyword using the Podcast Index API.
- **Browse Episodes:** View episodes of selected podcasts with details like title, description, and duration.
- **Audio Playback:** Listen to podcast episodes directly within the app with controls to play, pause, and skip.
- **Persistent State:** Save and load playback state, including the current episode, progress, and queue, using local storage.
- **Progressive Web App (PWA):** Installable on supported devices for offline use.
- **Lazy Loading:** Efficiently loads podcast images and episode details as you scroll.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JacintoDesign/podcast-player.git
   ```

2. Navigation to the project directory:
   ```bash
   cd podcast-player
   ```

3. Install dependencies
   ```bash
   npm install
   ```

4. Sign up for your own API Key & Secret at Podcast Index, then create your own .env file in the root folder and add the following:
   ```bash
   AUTH_KEY='your_api_key'
   SECRET_KEY='your_api_secret'
   USER_AGENT='Your_app_name'
   API_ENDPOINT='https://api.podcastindex.org/api/1.0'
   ```

## Usage

1. Start the server:
   ```bash
   npm start
   ```

The app will be available at http://localhost:3000.

## Deployment

The project is deployed on Render. To deploy your own version:

1. **Fork the repository** and connect it to your Render account.
2. **Set up environment variables** on Render with your API key and secret.
3. **Deploy the project** using Render's deployment tools.

## Functionality

- **Search:** Enter a keyword to search for podcasts.
- **Browse:** Click on a podcast to view its episodes.
- **Play:** Select an episode to start listening.
- **Queue:** Manage your episode queue and save your progress.

## Technologies Used

- **Node.js:** Backend server
- **Express:** Web framework for Node.js
- **Podcast Index API:** Podcast search and episode retrieval
- **Render:** Deployment platform
- **JavaScript:** Frontend functionality
- **HTML & CSS:** User interface
- **Local Storage:** Persistent state management

## Acknowledgements

- [Podcast Index](https://podcastindex.org/) for providing the podcast data.
- [Render](https://render.com/) for hosting and deployment.
- [Podcast Icon](https://www.flaticon.com/free-icons/podcast) Podcast icons created by Flat Icons - Flaticon
