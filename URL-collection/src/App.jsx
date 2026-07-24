import { useState, useEffect } from "react";
import "./App.css";

import LinkForm from "./components/LinkForm";
import LinkList from "./components/LinkList";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";

function App() {
  const [links, setLinks] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  useEffect(() => {
    const savedLinks =
      JSON.parse(
        localStorage.getItem("links")
      ) || [];

    setLinks(savedLinks);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "links",
      JSON.stringify(links)
    );
  }, [links]);

  const addLink = (
    title,
    url,
    category
  ) => {
    const newLink = {
      id: Date.now(),
      title,
      url,
      category,
      favorite: false,
      clicks: 0,
    };

    setLinks([...links, newLink]);
  };

  const toggleFavorite = (id) => {
    setLinks(
      links.map((link) =>
        link.id === id
          ? {
              ...link,
              favorite: !link.favorite,
            }
          : link
      )
    );
  };

  const increaseClick = (id) => {
    setLinks(
      links.map((link) =>
        link.id === id
          ? {
              ...link,
              clicks: link.clicks + 1,
            }
          : link
      )
    );
  };

  const filteredLinks = links.filter(
    (link) => {
      const matchesSearch =
        link.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =
        selectedCategory === "All" ||
        link.category ===
          selectedCategory;

      return (
        matchesSearch &&
        matchesCategory
      );
    }
  );

  const favoriteCount =
    links.filter(
      (link) => link.favorite
    ).length;

  const totalClicks = links.reduce(
    (sum, link) =>
      sum + link.clicks,
    0
  );

  return (
    <div className="container">
      <h1>
        URL Collection Manager
      </h1>

      <div className="dashboard">
        <h2>Dashboard</h2>

        <p>
          Total Links: {links.length}
        </p>

        <p>
          Favorite Links:
          {favoriteCount}
        </p>

        <p>
          Total Clicks:
          {totalClicks}
        </p>
      </div>

      <LinkForm addLink={addLink} />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <CategoryFilter
        category={selectedCategory}
        setCategory={
          setSelectedCategory
        }
      />

      <LinkList
        links={filteredLinks}
        toggleFavorite={
          toggleFavorite
        }
        increaseClick={
          increaseClick
        }
      />
    </div>
  );
}

export default App;