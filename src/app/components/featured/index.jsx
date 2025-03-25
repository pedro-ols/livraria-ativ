import styles from "./featured.module.css";
import Card from "../card"

const featuredBooks = [
    {
        id: 1,
        title: "O Algoritmo da Imaginação",
        author: "Ana Luz Santos",
        price: 49.9,
        coverImage:
            "https://via.placeholder.com/150x200/3498db/ffffff?text=Algoritmo",
        rating: 4.5,
        tags: ["Ficção Científica", "Tecnologia"],
    },
    {
        id: 2,
        title: "Conexões Invisíveis",
        author: "Marcos Silva",
        price: 39.9,
        coverImage:
            "https://via.placeholder.com/150x200/e74c3c/ffffff?text=Conexões",
        rating: 4.8,
        tags: ["Romance", "Tecnologia"],
    },
    {
        id: 3,
        title: "Além do Código",
        author: "Julia Mendes",
        price: 55.9,
        coverImage:
            "https://via.placeholder.com/150x200/2ecc71/ffffff?text=Código",
        rating: 4.2,
        tags: ["Biografia", "Programação"],
    },
    {
        id: 4,
        title: "Universos Paralelos",
        author: "Lucas Costa",
        price: 47.9,
        coverImage:
            "https://via.placeholder.com/150x200/f39c12/ffffff?text=Universos",
        rating: 4.7,
        tags: ["Ficção Científica", "Filosofia"],
    },
];

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

const Featured = () => {
    return (
        <section className={styles.bookSection}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionHeading}>Destaques da Semana</h2>
                <a href="/destaques" className={styles.viewAll}>
                    Ver todos
                </a>
            </div>
            <div className={styles.cardsContainer}>
                <Card id={1} title={"O Algoritmo da Imaginação"} author={"Ana Luz Santos"} price={49.9} coverImage={"https://via.placeholder.com/150x200/3498db/ffffff?text=Algoritmo"} rating={4.5} tags={["Ficção Científica", "Tecnologia"]} />
                <Card id={2} title={"Conexões Invisíveis"} author={"Marcos Silva"} price={39.9} coverImage={"https://via.placeholder.com/150x200/e74c3c/ffffff?text=Conexões"} rating={4.8} tags={["Romance", "Tecnologia"]} />
                <Card id={3} title={"Além do Código"} author={"Julia Mendes"} price={55.9} coverImage={"https://via.placeholder.com/150x200/2ecc71/ffffff?text=Código"} rating={4.2} tags={["Biografia", "Programação"]} />
                <Card id={4} title={"Universos Paralelos"} author={"Lucas Costa"} price={47.9} coverImage={"https://via.placeholder.com/150x200/f39c12/ffffff?text=Universos"} rating={4.7} tags={["Ficção Científica", "Filosofia"]} />
            </div>
        </section>
    );
};

export default Featured;