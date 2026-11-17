import { useState } from "react";
import BookCard from "./composants/BookCard";

function App() {
  const [books, setBooks] = useState([
    {
      id: 1,
      titre: "Le Petit Prince",
      auteur: "Antoine de Saint-Exupéry",
      estDisponible: true,
    },
    {
      id: 2,
      titre: "Une si longue lettre",
      auteur: "Mariama Bâ",
      estDisponible: true,
    },
    {
      id: 3,
      titre: "L'Aventure ambiguë",
      auteur: "Cheikh Hamidou Kane",
      estDisponible: false,
    },
    {
      id: 4,
      titre: "Les Misérables",
      auteur: "Victor Hugo",
      estDisponible: true,
    },
  ]);

  const [titre, setTitre] = useState("");
  const [auteur, setAuteur] = useState("");

  const nbDisponibles = books.filter((b) => b.estDisponible).length;

  function onClickEmprunt(bookId) {
    setBooks(
      books.map((b) =>
        b.id === bookId ? { ...b, estDisponible: !b.estDisponible } : b,
      ),
    );
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (titre.trim() === "" || auteur.trim() === "") return;

    const nouveauLivre = {
      id: Date.now(),
      titre: titre.trim(),
      auteur: auteur.trim(),
      estDisponible: true,
    };

    setBooks([...books, nouveauLivre]);
    setTitre("");
    setAuteur("");
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>
        Bibliothèque universitaire : {nbDisponibles} livre(s) disponible(s)
      </h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Titre"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          style={{ marginRight: "8px" }}
        />
        <input
          type="text"
          placeholder="Auteur"
          value={auteur}
          onChange={(e) => setAuteur(e.target.value)}
          style={{ marginRight: "8px" }}
        />
        <button type="submit">Ajouter</button>
      </form>

      {books.map((book) => (
        <BookCard
          key={book.id}
          titre={book.titre}
          auteur={book.auteur}
          estDisponible={book.estDisponible}
          onClickEmprunt={() => onClickEmprunt(book.id)}
        />
      ))}
    </div>
  );
}

export default App;
