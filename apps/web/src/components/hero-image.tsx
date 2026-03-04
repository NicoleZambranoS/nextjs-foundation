import { getImageProps } from "next/image";

export function HeroImage() {
    const common = { alt: "Product showcase", sizes: "100vw" };

    // Desktop: wide landscape image
    const {
        props: { srcSet: desktop },
    } = getImageProps({
        ...common,
        width: 1440,
        height: 600,
        quality: 85,
        src: "/hero-desktop.jpg",
    });

    // Mobile: tall portrait image (different crop, not just smaller)
    const {
        props: { srcSet: mobile, ...rest },
    } = getImageProps({
        ...common,
        width: 750,
        height: 1000,
        quality: 75,
        src: "/hero-mobile.jpg",
    });

    return (
        <picture>
            <source media="(min-width: 1024px)" srcSet={desktop} />
            <source media="(min-width: 640px)" srcSet={mobile} />
            <img {...rest} style={{ width: "100%", height: "auto" }} />
        </picture>
    );
}