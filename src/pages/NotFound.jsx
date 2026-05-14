import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 — Page not found</title>
      </Helmet>
      <section className="min-h-[80vh] flex items-center justify-center">
        <div className="container text-center">
          <p className="eyebrow justify-center"><span className="h-1 w-6 rounded-full bg-gradient-accent" /> 404</p>
          <h1 className="section-title mt-4">This page wandered off.</h1>
          <p className="mt-3 text-ink-muted max-w-md mx-auto">
            The link may be outdated. Head back to the homepage and continue exploring.
          </p>
          <Link to="/" className="btn-primary mt-8">Back to home</Link>
        </div>
      </section>
    </>
  );
}
