import Link from 'next/link'

export default function Portfolio() {
  return (
    <div>
      <div className="header">Header</div>
      <div className="mainContents">I developed somthing.</div>
      <ul className="links">
        <li><Link href="/">Go to Home</Link></li>
      </ul>
      <div className="footer">Foolter</div>
    </div>
  );
}