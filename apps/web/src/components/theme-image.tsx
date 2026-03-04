import { getImageProps } from "next/image";
import styles from "./theme-image.module.css";

export function ThemeImage() {
    const {
        props: { srcSet: light, ...lightRest },
    } = getImageProps({
        src: "/logo-light.png",
        alt: "Logo",
        width: 200,
        height: 50,
    });

    const {
        props: { srcSet: dark, ...darkRest },
    } = getImageProps({
        src: "/logo-dark.png",
        alt: "Logo",
        width: 200,
        height: 50,
    });

    return (
        <>
            <img {...lightRest} srcSet={light} className={styles.light} />
            <img {...darkRest} srcSet={dark} className={styles.dark} />
        </>
    );
}