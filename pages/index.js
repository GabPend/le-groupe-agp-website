import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Welcome to Le Groupe AGP inc.</h1>
      <p>Your trusted construction and renovation experts in Quebec.</p>
      <nav style={{ marginTop: '2rem' }}>
        <Link href="/services">Our Services</Link> |{" "}
        <Link href="/contact">Contact / Quote</Link> |{" "}
        <Link href="/gallery">Gallery</Link>
      </nav>
    </main>
  );
}
