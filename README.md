# QuesAns

A fun, interactive trivia quiz web application built with **React**, **Vite**, and **Redux Toolkit**. QuesAns randomly selects 10 questions from a bank of 500+ multiple-choice trivia questions, lets you navigate through them at your own pace, and shows a detailed results page at the end.

---

## ✨ Features

- 🎲 **Random 10-question quiz** drawn from a pool of 500+ questions every time you play
- 📋 **Multiple-choice format** — four options (A / B / C / D) per question
- 🔄 **Free navigation** — move forwards and backwards between questions
- 💾 **Save & update answers** before you submit
- 📊 **Progress bar** shows how far through the quiz you are
- 🏆 **Results page** displays your score and highlights correct/incorrect answers
- 🌿 **Green-themed UI** with smooth animations and Bootstrap 5 components
- 🔗 **Client-side routing** via React Router DOM

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI component library |
| [Vite 6](https://vitejs.dev/) | Lightning-fast dev server & bundler |
| [Redux Toolkit](https://redux-toolkit.js.org/) | Global state management (question bank & session) |
| [React Router DOM v7](https://reactrouter.com/) | Client-side navigation |
| [Bootstrap 5.3](https://getbootstrap.com/) | Responsive layout & pre-built components |
| [Axios](https://axios-http.com/) | HTTP client (available for API integration) |
| [react-confetti](https://www.npmjs.com/package/react-confetti) | Celebration animation |
| ESLint (flat config) | Code quality & linting |

---

## 📁 Project Structure

```
QuestionAnswer/
├── public/                  # Static assets
├── src/
│   ├── assets/              # CSS files (Question.css, etc.)
│   ├── components/
│   │   └── Question.jsx     # Quiz question card with options & navigation
│   ├── db/
│   │   └── Que.jsx          # Local database of 500+ trivia questions
│   ├── pages/
│   │   ├── Body.jsx         # Home / landing page
│   │   ├── Header.jsx       # Navigation bar
│   │   ├── Footer.jsx       # Page footer
│   │   ├── Aboutus.jsx      # About page
│   │   └── Result.jsx       # Score & answer review page
│   ├── Redux/
│   │   ├── QueSlice.jsx     # Redux slice — full question bank
│   │   └── SortedQueSlice.jsx # Redux slice — 10 random indices for the session
│   ├── App.jsx              # Root component with route definitions
│   └── main.jsx             # App entry point (ReactDOM + Redux Provider)
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (LTS version recommended — v18 or newer)
- **npm** or **yarn**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/aibhavesh/QuestionAnswer.git
   cd QuestionAnswer
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open the app** in your browser at `http://localhost:5173` (Vite's default port — the terminal will confirm the exact URL).

---

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Starts the development server with Hot Module Replacement |
| `npm run build` | Bundles the app for production into the `dist/` folder |
| `npm run preview` | Serves the production build locally for testing |
| `npm run lint` | Runs ESLint across the entire codebase |

---

## 🗺️ Application Routes

| Path | Component | Description |
|---|---|---|
| `/` | `Body` | Home / landing page with "Let's Practice" button |
| `/questions` | `Question` | Quiz interface — 10 randomly selected questions |
| `/result` | `Result` | Score summary with correct/incorrect breakdown |
| `/about` | `AboutUs` | About page |
| `*` | — | 404 Not Found fallback |

---

## 🧩 How It Works

1. On the **Home** page, clicking **"Let's Practice"** dispatches 10 unique random indices to the Redux store (`SortedQueSlice`).
2. The **Question** page reads those indices from the store, loads the corresponding questions, and renders them one at a time.
3. You can **save** your answer for each question and navigate freely with the **Previous / Next** buttons.
4. On the last question, clicking **Submit Final Answers** navigates to the **Results** page, which computes and displays your final score along with a per-question breakdown.

---

## 🛠️ Customization

- **Add or modify questions** — edit `src/db/Que.jsx`. Each entry follows this schema:
  ```js
  {
    question: "Your question here?",
    A: "Option A",
    B: "Option B",
    C: "Option C",
    D: "Option D",
    answer: "A" // correct option letter
  }
  ```
- **Change the number of questions per quiz** — update the `while (arr.length < 10)` condition in `src/pages/Body.jsx`.
- **Adjust ESLint rules** — edit `eslint.config.js` (flat config format).
- **Migrate to TypeScript** — follow the official [Vite + React + TypeScript guide](https://vitejs.dev/guide/#scaffolding-your-first-vite-project).

---

## 🤝 Contributing

Contributions, bug reports, and feature suggestions are welcome! Please open an issue or submit a pull request.

---

## 📄 License

This project is open source and free to use.

