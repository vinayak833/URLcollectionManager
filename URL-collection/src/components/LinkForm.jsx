import { useState } from "react";

function LinkForm({ addLink }) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] =
    useState("Programming");

  const handleSubmit = () => {
    if (!title || !url) return;

    addLink(title, url, category);

    setTitle("");
    setUrl("");
    setCategory("Programming");
  };

  return (
    <div className="card">
      <h2>Add Link</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="URL"
        value={url}
        onChange={(e) =>
          setUrl(e.target.value)
        }
      />

      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      >
        <option>Programming</option>
        <option>React</option>
        <option>Node.js</option>
        <option>Java</option>
        <option>DSA</option>
      </select>

      <button onClick={handleSubmit}>
        Save Link
      </button>
    </div>
  );
}

export default LinkForm;
