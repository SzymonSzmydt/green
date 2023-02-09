import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className={styles.head}>
      <div className={styles.container}>
        <Link href='/' className={styles.logo}>
          <Image src='' alt='logo' />
        </Link>
        <nav>
          <Link href='/shop' className={styles.link}>
            Sklep
          </Link>
          <Link href='/description' className={styles.link}>
            Opis
          </Link>
          <Link href='/contact' className={styles.link}>
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
