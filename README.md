# 🎬 MovieVault

A modern, responsive web application for discovering and managing Kannada movies. Built with React and Vite, MovieVault provides an intuitive interface to browse popular Kannada films and maintain a personal watchlist.

## ✨ Features

- **🎭 Movie Discovery**: Browse popular Kannada movies from The Movie Database (TMDB)
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **💾 Watchlist Management**: Add/remove movies to your personal watchlist
- **🔄 Pagination**: Navigate through movie collections with ease
- **🎨 Modern UI**: Beautiful interface built with Tailwind CSS
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **💾 Local Storage**: Watchlist persists across browser sessions

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.0
- **Styling**: Tailwind CSS 3.4.17
- **Routing**: React Router DOM 7.8.0
- **HTTP Client**: Axios 1.11.0
- **State Management**: React Hooks (useState, useEffect)
- **Local Storage**: LocalForage 1.10.0
- **Code Quality**: ESLint 9.32.0
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Akash4456/MoviesVault.git
   cd MovieVault/vite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Run for Production

```bash
npm run dev
```

## 📱 Usage

### Home Page (`/`)
- View the featured banner with Popular Kannada movie
- Browse popular Kannada movies
- Add movies to your watchlist
- Navigate through pages using pagination controls

### Watchlist Page (`/watchlist`)
- View all movies you've added to your watchlist
- Remove movies from your watchlist
- Persistent storage across browser sessions

### Adding Movies
- Click the "Add to Watchlist" button on any movie card
- Movies are automatically saved to local storage
- Your watchlist persists even after closing the browser

### Removing Movies
- Navigate to your watchlist page
- Click "Remove from Watchlist" on any movie
- Changes are immediately reflected and saved

## 🏗️ Project Structure

```
MovieVault/
├── vite/
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── Banner.jsx          # Hero banner component
│   │   │   ├── MovieCard.jsx       # Individual movie display
│   │   │   ├── Movies.jsx          # Movie grid and pagination
│   │   │   ├── Navbar.jsx          # Navigation component
│   │   │   ├── Pagination.jsx      # Page navigation controls
│   │   │   └── Watchlist.jsx       # Watchlist management
│   │   ├── assets/
│   │   │   ├── moviesKGF.jpg       # Banner image
│   │   │   └── react.svg
│   │   ├── Utility/
│   │   │   └── genre.js            # Genre utilities
│   │   ├── App.jsx                 # Main application component
│   │   ├── App.css                 # Application styles
│   │   ├── index.css               # Global styles
│   │   └── main.jsx                # Application entry point
│   ├── package.json                # Dependencies and scripts
│   ├── vite.config.js              # Vite configuration
│   ├── tailwind.config.js          # Tailwind CSS configuration
│   ├── postcss.config.js           # PostCSS configuration
│   └── eslint.config.js            # ESLint configuration
```

## 🔧 Configuration

### Environment Variables
The application uses TMDB API for movie data. The API key is currently hardcoded in the Movies component. For production use, consider moving it to environment variables:


### Tailwind CSS
The project is configured with Tailwind CSS for utility-first styling. Custom configurations can be made in `tailwind.config.js`.

## 📱 Responsive Design

MovieVault is fully responsive and optimized for:
- **Desktop**: Full-featured experience with grid layouts
- **Tablet**: Adaptive layouts for medium screens
- **Mobile**: Touch-friendly interface with optimized spacing

## 🚀 Performance Features

- **Vite Build**: Lightning-fast development and build times
- **Code Splitting**: Automatic route-based code splitting
- **Optimized Assets**: Efficient handling of images and static files
- **Local Storage**: Fast access to user data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **TMDB API**: For providing comprehensive movie data
- **React Team**: For the amazing React framework
- **Vite Team**: For the fast build tool
- **Tailwind CSS**: For the utility-first CSS framework

## 📞 Support

If you have any questions or need help with the project, please open an issue on GitHub or contact the development team.

---

**Made with ❤️ using React and Vite**
