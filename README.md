# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# StreamSpace 🎥

**StreamSpace** is a YouTube-inspired video streaming platform built with a focus on clean UI, smooth interactivity, and essential video features. This project leverages a range of powerful technologies, including React, Redux, and Firebase, to deliver a responsive, real-time video experience. With full-fledged functionality, StreamSpace offers video search, recommended videos, channel data, user authentication, and more!

## Features 🚀

### 1. Responsive Design
- Built a sleek, fully responsive UI for video pages and sidebars, adapting seamlessly to screens of all sizes, including small devices like iPhone SE.
- Sidebar UI supports various categories, which toggle with blue underlines for selected categories.

### 2. Video Search with YouTube Data API
- Integrated YouTube’s Search API for powerful, real-time video search functionality.
- Display search results on the homepage and video details via multiple API calls, handled efficiently with Redux for smooth state management.

### 3. Subscriptions & Video Details
- Leveraged YouTube’s Subscription and FetchDetails APIs to display channel data (subscriber counts, channel names, view counts, descriptions, titles, etc.)—everything you’d expect from a complete video platform!

### 4. Recommended Videos Section
- Created a fully responsive, intuitive recommended videos section, enhancing content discovery with a user-friendly interface.

### 5. Real-Time Database & Authentication
- Added Firebase’s real-time database to sync and update user data instantly, providing a dynamic, interactive experience.
- Integrated Firebase authentication with email/password and Google sign-in options. Users already signed in are redirected to the About Us page to streamline navigation.

## Tech Stack 💻

- **Frontend**: React.js, Tailwind CSS, Bootstrap
- **State Management**: Redux & Context API
- **Backend & Database**: Firebase (real-time database)
- **APIs**: YouTube Data API (Search, Subscription, and FetchDetails)
- **Authentication**: Firebase Auth (Email/Password, Google sign-in)

## Future Enhancements 🛠️
- Implement user profiles and personalized watch history
- Add “like” and “comment” features with real-time updates
- Enhance video filtering by category for even more refined content discovery

## How to Run Locally 💡
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/streamspace.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure Firebase and YouTube API keys.
4. Start the development server:
   ```bash
   npm start
   ```

## Contributing 🤝
Contributions are welcome! Please submit a pull request or open an issue for feedback or feature requests.

---

**StreamSpace** is a continuously evolving project aiming to bring a full YouTube-like experience into a modern web app. Feel free to explore, star ⭐, and contribute!
