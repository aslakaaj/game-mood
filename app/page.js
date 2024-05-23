import Link from "next/link";

export default function Home () {
return(
    <div className="grid md:grid-cols-4 gap-3 w-1/2 relative left-1/2 -translate-x-1/2">
        <Link href={"/games/happiness"} className="btn btn-active btn-secondary text-white">😁 Happy</Link>
        <Link href={"/games/sadness"} className="btn btn-active btn-secondary text-white">😔 Sad</Link>
        <Link href={"/games/fear"} className="btn btn-active btn-secondary text-white">😨 Fear</Link>
        <Link href={"/games/anger"} className="btn btn-active btn-secondary text-white">😡 Angry</Link>
        <Link href={"/games/suprise"} className="btn btn-active btn-secondary text-white">😲 Suprised</Link>
        <Link href={"/games/disgust"} className="btn btn-active btn-secondary text-white">🤢 Disgusted</Link>
        <Link href={"/games/love"} className="btn btn-active btn-secondary text-white">🥰 In Love</Link>
        <Link href={"/games/trust"} className="btn btn-active btn-secondary text-white">🤓 Trust</Link>
        <Link href={"/games/anticipation"} className="btn btn-active btn-secondary text-white">🤯 Anticipated</Link>
        <Link href={"/games/guilt"} className="btn btn-active btn-secondary text-white">🫤 Guilt</Link>
    </div>
);
}