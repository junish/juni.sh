import Link from 'next/link';

export default function Profile() {
  return (
    <div>
      <ul className="mainContents">
        <li>Full-stack engineer, but mainly front-end engineer</li>
        <li>JavaScript, React, Vue, Python, Golang</li>
        <li>Yoga ball lover</li>
        <li>Plaid, Inc.</li>
      </ul>
      <ul className="links">
        <li><Link href="/">Go to Home</Link></li>
      </ul>
    </div>
  );
}
