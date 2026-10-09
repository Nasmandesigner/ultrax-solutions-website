import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found container-shell">
      <p className="eyebrow"><span className="eyebrow__mark" />404 · Page not found</p>
      <h1>This page is <em>off the map.</em></h1>
      <Link className="text-link" href="/">Return home <span aria-hidden="true">↗</span></Link>
    </section>
  );
}
