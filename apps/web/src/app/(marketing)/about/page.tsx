import Image from "next/image";
import heroImage from "./hero.jpg"; // Static import

export default function AboutPage() {
    return (
        <Image
            src={heroImage}
            placeholder="blur" // blurDataURL auto-generated
            alt="Team photo"
            className="rounded-lg"
        />
    );
}