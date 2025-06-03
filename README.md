
# 🎮 Game Hub React

A modern video game discovery web application built with React, TypeScript, and Vite. Game Hub allows users to explore and search for video games using the RAWG Video Games Database API.

Deme: https://game-hub-git-master-muzammi-ghanis-projects.vercel.app/

## ✨ Features

- 🔍 **Game Search**: Find games by title.
- 🎮 **Genre & Platform Filters**: Narrow down games by genre and platform.
- 📊 **Sorting Options**: Sort games by popularity, release date, or rating.
- 🌙 **Dark/Light Mode**: Toggle between dark and light themes.
- 📱 **Responsive Design**: Optimized for various screen sizes.

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS, Chakra UI
- **API**: [RAWG Video Games Database API](https://rawg.io/apidocs)

## 📦 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/muzammil001/game-hub-react.git
   cd game-hub-react
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Obtain a RAWG API key**:

   - Sign up at [RAWG.io](https://rawg.io/apidocs) to get your API key.

4. **Configure environment variables**:

   - Create a `.env` file in the root directory and add your API key:

     ```env
     VITE_RAWG_API_KEY=your_api_key_here
     ```

5. **Start the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   - Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## 🧪 Testing

*Include testing instructions here if applicable.*

## 📁 Project Structure

```
├── public/           # Static assets
├── src/
│   ├── assets/       # Images and other static resources
│   ├── components/   # Reusable components
│   ├── pages/        # Page components
│   ├── App.tsx       # Root component
│   └── main.tsx      # Vite entry point
├── .env              # Environment variables
├── index.html        # Main HTML template
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🔧 Configuration

- **Vite Config**: Customize Vite settings in `vite.config.ts`.
- **ESLint**: Linting configurations are in `eslint.config.js`.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
