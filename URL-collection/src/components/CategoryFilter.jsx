function CategoryFilter({
  category,
  setCategory,
}) {
  return (
    <select
      value={category}
      onChange={(e) =>
        setCategory(e.target.value)
      }
    >
      <option value="All">
        All Categories
      </option>

      <option value="Programming">
        Programming
      </option>

      <option value="React">
        React
      </option>

      <option value="Node.js">
        Node.js
      </option>

      <option value="Java">
        Java
      </option>

      <option value="DSA">
        DSA
      </option>
    </select>
  );
}

export default CategoryFilter;
