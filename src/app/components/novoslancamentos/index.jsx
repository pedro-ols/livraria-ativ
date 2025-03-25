import styles from "./novoslancamentos.module.css";
import Card from "../card"

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
      <div className={styles.cardsContainer}>
        <Card id={5} title={"A Linguagem Secreta"} author={"Carla Prado"} price={42.9} coverImage={"https://via.placeholder.com/150x200/9b59b6/ffffff?text=Linguagem"} rating={4.0} tags={["Suspense", "Linguística"]} />
        <Card id={6} title={"Revolução Digital"} author={"Pedro Almeida"} price={59.9} coverImage={"https://via.placeholder.com/150x200/1abc9c/ffffff?text=Revolução"} rating={4.6} tags={["Não-Ficção", "Tecnologia"]} />
        <Card id={7} title={"Fronteiras do Pensamento"} author={"Sofia Torres"} price={37.9} coverImage={"https://via.placeholder.com/150x200/d35400/ffffff?text=Fronteiras"} rating={4.3} tags={["Filosofia", "Psicologia"]} />
      </div>
    </section>
  );
};

export default NovosLancamentos;