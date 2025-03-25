import styles from "./card.module.css"

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


const Card = ({ id, title, author, price, coverImage, rating, tags }) => {
    return(
        <div className={styles.booksGrid}>
                <div key={id} className={styles.bookCard}>
                    <div className={styles.bookCover}>
                        <img
                            src={coverImage}
                            alt={title}
                            className={styles.coverImage}
                        />
                        <button className={styles.quickViewButton}>Visualizar</button>
                    </div>
                    <div className={styles.bookInfo}>
                        <h3 className={styles.bookTitle}>{title}</h3>
                        <p className={styles.bookAuthor}>por {author}</p>
                        <div className={styles.bookRating}>
                            {renderStars(rating)}
                            <span className={styles.ratingValue}>({rating})</span>
                        </div>
                        <div className={styles.bookTags}>
                            {tags.map((tag, index) => (
                                <span key={index} className={styles.tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className={styles.bookPriceActions}>
                            <span className={styles.bookPrice}>
                                R$ {price}
                            </span>
                            <div className={styles.bookActions}>
                                <button className={styles.iconButton}>❤️</button>
                                <button className={styles.iconButton}>🛒</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        );
};

export default Card