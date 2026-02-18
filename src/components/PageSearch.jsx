import { useState } from "react";

export default function PageSearch({ products, setFiltered }) {

  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (value) => {
    setText(value);

    // filter products
    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(value.toLowerCase())
    );

    setFiltered(filtered);

    // suggestions (only names)
    setSuggestions(value ? filtered.slice(0,5) : []);
  };

  const selectSuggestion = (name) => {
    setText(name);

    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(name.toLowerCase())
    );

    setFiltered(filtered);
    setSuggestions([]);
  };

  return (
    <div className="page-search">

      <input
        type="text"
        placeholder="Search Product Name..."
        value={text}
        onChange={(e)=>handleChange(e.target.value)}
        onBlur={()=>setTimeout(()=>setSuggestions([]),200)}
        onFocus={()=>text && setSuggestions(products)}
      />

      {suggestions.length > 0 && (
        <div className="suggest-box">
          {suggestions.map(item => (
            <div
              key={item.id}
              className="suggest-item"
              onClick={()=>selectSuggestion(item.name)}
            >
              🔍 {item.name}
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
