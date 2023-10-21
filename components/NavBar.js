import Link from "next/link";
import { useRouter } from "next/router";
// import styles from "./NavBar.module.css";

export default function NavBar(){
    const router = useRouter();
    return (
        <nav>
            <Link href="/" legacyBehavior>
                <a className={router.pathname === "/" ? "active" : ""}>Home</a>
            </Link>
            <Link href="/about" legacyBehavior>
                <a className={router.pathname === "/about" ? "active" : ""}>about</a>
            </Link>
            <style jsx>{`
                nav {
                    background-color : tomato;
                }
                a {
                    text-decoration: none;
                }
                .active {
                    color: yellow;
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