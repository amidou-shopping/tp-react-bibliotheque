function BookCard({ titre, auteur, estDisponible, onClickEmprunt }) {
  const styleCarte = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "16px",
    margin: "10px 0",
    maxWidth: "420px",
  };

  return (
    <div style={styleCarte}>
      <h3 style={{ margin: "0 0 4px" }}>{titre}</h3>
      <p style={{ margin: "0 0 12px", color: "#555" }}>{auteur}</p>

      <p>{estDisponible ? "🟢 Disponible" : "🔴 Emprunté"}</p>

      <button onClick={onClickEmprunt}>
        {estDisponible ? "Emprunter" : "Rendre"}
      </button>
    </div>
  );
}

export default BookCard;
