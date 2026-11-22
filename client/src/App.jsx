import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function App() {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${API}/api/products`)
      .then((r) => r.json())
      .then(setProducts)
      .catch(() => setError("Cannot reach API"));
  }, []);

  if (error) return <p className="error">{error}</p>;

  return (
    <div className="wrap">
      <h1>ကိုနေဝင်းအောင် Mini Shop</h1>
      {selected ? (
        <div className="detail">
          <button onClick={() => setSelected(null)}>← Back</button>
          <img src={selected.image_url} alt={selected.name} />
          <h2>{selected.name}</h2>
          <p className="price">${selected.price}</p>
          <p>{selected.description}</p>
        </div>
      ) : (
        <div className="grid">
          {products.map((p) => (
            <div key={p.id} className="card" onClick={() => setSelected(p)}>
              <img src={p.image_url} alt={p.name} />
              <h3>{p.name}</h3>
              <p className="price">${p.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}