import Form from "@/components/Form";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.newsContainer}>
        <div className={styles.imgContainer}>
          <img
            className={styles.imgClass}
            src="/images/illustration-sign-up-mobile.svg"
            alt="signup image"
          
          />

        </div>
        <div className={styles.secondContainer} >
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>Stay updated!</h1>
          <p>Join 60,000+ product managers recieving monthly updates on:</p>
          <ul className={styles.list}>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are success</li>
            <li>And Much more</li>
          </ul>
        </div>
        <div className={styles.formContainer}>
         <Form/>
        </div>
        </div>
      </div>
    </main>
  );
}
