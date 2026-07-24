function LinkItem({
  link,
  toggleFavorite,
  increaseClick,
}) {
  return (
    <li>
      <a
        href={link.url}
        target="_blank"
        rel="noreferrer"
        onClick={() =>
          increaseClick(link.id)
        }
      >
        {link.title}
      </a>

      <span>{link.category}</span>

      <button
        onClick={() =>
          toggleFavorite(link.id)
        }
      >
        {link.favorite
          ? "★"
          : "☆"}
      </button>

      <span>
        Clicks: {link.clicks}
      </span>
    </li>
  );
}

export default LinkItem;
