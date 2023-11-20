import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div className="mainContents">I&apos;m Junichi Shinohara</div>
      <ul className="links">
        <li><Link href="/profile">Go to Profile</Link></li>
        <li><Link href="/portfolio">Go to Portfolio</Link></li>
      </ul>
    </div>
  );
}
