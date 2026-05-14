import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Achievements from '../components/sections/Achievements';
import Contact from '../components/sections/Contact';
import { profile } from '../constants/profile';

export default function Home() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.title,
    url: typeof window !== 'undefined' ? window.location.origin : '',
    sameAs: [profile.socials.github, profile.socials.linkedin],
    email: profile.email,
    description: profile.summary,
  };

  return (
    <>
      <Helmet>
        <title>{profile.name} — {profile.title}</title>
        <meta name="description" content={profile.summary} />
        <link rel="canonical" href="/" />
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      </Helmet>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
    </>
  );
}
