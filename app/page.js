import Link from "next/link";

export default function Home () {
return(
    <div className="grid mt-28 grid-cols-2 md:grid-cols-4 gap-5 w-1/2 relative left-1/2 -translate-x-1/2">
        <Link href={"/games/happiness"} className="btn btn-active btn-secondary btn-lg text-white">😁 Happy</Link>
        <Link href={"/games/sadness"} className="btn btn-active btn-secondary btn-lg text-white">😔 Sad</Link>
        <Link href={"/games/fear"} className="btn btn-active btn-secondary btn-lg text-white">😨 Fear</Link>
        <Link href={"/games/anger"} className="btn btn-active btn-secondary btn-lg text-white">😡 Angry</Link>
        <Link href={"/games/surprise"} className="btn btn-active btn-secondary btn-lg text-white">😲 Suprised</Link>
        <Link href={"/games/disgust"} className="btn btn-active btn-secondary btn-lg text-white">🤢 Disgusted</Link>
        <Link href={"/games/love"} className="btn btn-active btn-secondary btn-lg text-white">🥰 In Love</Link>
        <Link href={"/games/trust"} className="btn btn-active btn-secondary btn-lg text-white">🤓 Trust</Link>
        <Link href={"/games/anticipation"} className="btn btn-active btn-secondary btn-lg text-white md:col-start-2">🤯 Anticipated</Link>
        <Link href={"/games/guilt"} className="btn btn-active btn-secondary btn-lg text-white">🫤 Guilt</Link>
    </div>
);
}