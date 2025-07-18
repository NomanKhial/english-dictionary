
# 📚 React Dictionary App

A sleek, minimal dictionary app built with **React** using context API. Enter a word, and it fetches definitions from the [Free Dictionary API](https://dictionaryapi.dev). Smooth loading state, error handling, and automatic input clearing — all baked in.

## ✨ Features

- 🔍 Search any English word
- 📦 Fetches data from a public dictionary API
- ⚛️ Global state management using React Context
- 🌀 Loading state for better UX
- ❌ Input auto-clears after successful search
- 🚫 Alerts on invalid input or word not found

## 🧠 Tech Stack

- React 19+
- Context API
- Fetch API
- CSS (or Tailwind if you add it)

## 📦 Installation

Clone this repo and install dependencies:

```bash
git clone https://github.com/NomanKhial/english-dictionary.git
cd react-dictionary-app
npm install
```

## 🚀 Running Locally
```bash
npm run dev
```

## 🗂️ Project Structure

src/
│
├── AppContext.jsx         # Global state using React Context
├── components/
│   └── InputBox.jsx       # Input + button to search words
├── App.jsx
└── main.jsx

## 📡 API Used
Dictionary API (Free)
No key needed. Just send a GET request like:

```bash
https://api.dictionaryapi.dev/api/v2/entries/en/hello
```

## 💡 To-Do (Optional Enhancements)
 Add audio pronunciation

 Display word type (noun, verb, etc.)

 Add debounce to reduce API spam

 Save search history

 Dark mode toggle 🌑

## 🤝 Contributing
Pull requests are welcome! If you’d like to improve styling, add new features, or fix bugs, feel free to fork and send it over.

## 🧑‍💻 Author
Made with 💙 by Noman Khial

## 📜 License
MIT License — do whatever you want, just give credit

### ⚠️ Before You Commit:
- Replace `your-username` with your actual GitHub username
- If you use Tailwind or add new features, update the tech stack
- If you don’t use Vite, adjust the dev script (`npm run dev`) accordingly

