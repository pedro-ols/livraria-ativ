import styles from "./novoslancamentos.module.css";

const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={`star-${i}`} className={styles.star}>
        ★
      </span>
    );
  }

  if (hasHalfStar) {
    stars.push(
      <span key="half-star" className={styles.starHalf}>
        ★
      </span>
    );
  }

  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <span key={`empty-star-${i}`} className={styles.starEmpty}>
        ☆
      </span>
    );
  }

  return stars;
};

const newReleases = [
  {
    id: 5,
    title: "A Linguagem Secreta",
    author: "Carla Prado",
    price: 42.9,
    coverImage:
      "https://via.placeholder.com/150x200/9b59b6/ffffff?text=Linguagem",
    rating: 4.0,
    tags: ["Suspense", "Linguística"],
  },
  {
    id: 6,
    title: "Revolução Digital",
    author: "Pedro Almeida",
    price: 59.9,
    coverImage:
      "https://via.placeholder.com/150x200/1abc9c/ffffff?text=Revolução",
    rating: 4.6,
    tags: ["Não-Ficção", "Tecnologia"],
  },
  {
    id: 7,
    title: "Fronteiras do Pensamento",
    author: "Sofia Torres",
    price: 37.9,
    coverImage:
      "https://via.placeholder.com/150x200/d35400/ffffff?text=Fronteiras",
    rating: 4.3,
    tags: ["Filosofia", "Psicologia"],
  },
];

const NovosLancamentos = () => {
    return (
        <section className={`${styles.bookSection} ${styles.newReleases}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionHeading}>Lançamentos</h2>
          <a href="/lancamentos" className={styles.viewAll}>
            Ver todos
          </a>
        </div>

        <div className={styles.booksGrid}>
          {newReleases.map((book) => (
            <div key={book.id} className={styles.bookCard}>
              <div className={styles.bookCover}>
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className={styles.coverImage}
                />
                <button className={styles.quickViewButton}>Visualizar</button>
              </div>
              <div className={styles.bookInfo}>
                <span className={styles.newBadge}>Novo</span>
                <h3 className={styles.bookTitle}>{book.title}</h3>
                <p className={styles.bookAuthor}>por {book.author}</p>
                <div className={styles.bookRating}>
                  {renderStars(book.rating)}
                  <span className={styles.ratingValue}>({book.rating})</span>
                </div>
                <div className={styles.bookTags}>
                  {book.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.bookPriceActions}>
                  <span className={styles.bookPrice}>
                    R$ {book.price.toFixed(2)}
                  </span>
                  <div className={styles.bookActions}>
                    <button className={styles.iconButton}>❤️</button>
                    <button className={styles.iconButton}>🛒</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
};

export default NovosLancamentos;