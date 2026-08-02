# URL Collection Manager

A React-based application for storing, organizing, and managing useful web links in one place. Users can categorize resources, search saved links, mark favorites, and monitor link activity through an interactive dashboard.

## Features

- Save and Manage Links
- Organize Links by Category
- Search Resources Instantly
- Mark Favorite Links
- Track Link Clicks
- Dashboard Overview
- Local Storage Persistence
- Responsive User Interface

## Tech Stack

- React
- JavaScript (ES6)
- CSS
- Vite
- Local Storage

## Project Structure

```text
URLCollectionManager/
│
├── src/
│   ├── components/
│   │   ├── LinkForm.jsx
│   │   ├── LinkList.jsx
│   │   ├── LinkItem.jsx
│   │   ├── SearchBar.jsx
│   │   └── CategoryFilter.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── public/
├── package.json
└── README.md
```
## Installation

Clone the repository:

```bash
git clone https://github.com/vinayak833/URLCollectionManager.git
```

Navigate to the project directory:

```bash
cd URLCollectionManager
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

## Usage

1. Enter a title and URL.
2. Choose a category.
3. Save the resource.
4. Search links using keywords.
5. Filter links by category.
6. Add links to favorites.
7. Monitor click counts.
8. View dashboard statistics.

## Dashboard Metrics

- Total Saved Links
- Favorite Links
- Total Link Clicks
- Category Distribution
