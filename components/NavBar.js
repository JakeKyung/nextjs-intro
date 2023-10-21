import Link from "next/link";
import { useRouter } from "next/router";
// import styles from "./NavBar.module.css";

export default function NavBar(){
    const router = useRouter();
    return (
    <nav>
      <img src="/vercel.svg" />
      <div>
        <Link href="/" legacyBehavior>
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
    );
}


/**
 * Error: Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.
 * ※ Next13 버전 이후 부터는 Link 태그 속에 a 태그를 넣지 않아야 정상 동작함
 * Link 속에 a 태그를 유지해야 한다면, legacyBehavior 삽입해야함
 * a tag 없어도 잘 동작함
 */