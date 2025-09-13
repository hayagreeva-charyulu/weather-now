# ChatGPT Work Log (Summary)

As part of this take-home challenge, I used ChatGPT as a coding assistant to guide my approach.  
This document summarizes the process and problem-solving steps (not the full raw chat).

---

## 🔹 Step 1 — Understanding Requirements
- Read the challenge instructions and evaluated the 4 options.
- Chose **Weather Now** as it is the simplest to implement, yet allows polish (icons, error handling, responsive UI).

---

## 🔹 Step 2 — Project Setup
- Initialized a React + TypeScript project using Create React App.
- Configured **Tailwind CSS** for styling.
- Fixed common PostCSS/Tailwind setup issues.

---

## 🔹 Step 3 — Core Features
- Created a **SearchBar** component for entering city names.
- Used **Open-Meteo Geocoding API** to convert city → coordinates.
- Used **Open-Meteo Forecast API** to fetch current weather.
- Created a **WeatherCard** component to display results (temperature, wind speed, weather code).

---

## 🔹 Step 4 — Enhancements
- Added **Weather Icons** mapped from weather codes (e.g., ☀️, ⛅, 🌧).
- Implemented **°C / °F toggle** for temperature display.
- Made the app **responsive** for mobile/desktop.
- Added **error handling** for invalid city names or network errors.

---

## 🔹 Step 5 — Deployment
- Pushed the project to GitHub.
- Deployed live demo on **CodeSandbox**:  
  👉 [Live App](https://sgj654-3000.csb.app/)

---

## 🔹 Step 6 — Reflection
- Focused on clean code and user-friendly UI.
- Documented the setup and usage in `README.md`.
- Demonstrated problem-solving through ChatGPT collaboration.

---


