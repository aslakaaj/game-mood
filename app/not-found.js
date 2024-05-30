import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='text-center mt-20'>
      <h1 className='text-lg font-bold'>The page you are looking for, doesn&#39;t exist</h1>
      <p>Try some of the pages from the homescreen:</p>
      <Link className="btn btn-active btn-secondary text-white mt-7" href={"/"}>Return Home</Link>
    </div>
  );
}