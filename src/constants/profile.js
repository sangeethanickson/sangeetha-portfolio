import profileImage from '../assets/sangeetha_original_profile.jpeg';
import resumeFile from '../assets/sangeetha_resume.pdf';

export const profile = {
  name: 'Sangeetha N',
  shortName: 'Sangeetha',
  title: 'Full Stack Developer',
  roles: [
    'Full Stack Developer',
    'React.js · Vue.js · Node.js Engineer',
    'Scalable Enterprise Application Developer',
  ],
  location: 'India',
  available: true,
  email: 'sangeethanickson.inbox@gmail.com',
  profileImage,
  resumeUrl: resumeFile,
  socials: {
    github: 'https://github.com/sangeethanickson',
    linkedin: 'https://www.linkedin.com/in/sangeetha-n-77a141392/',
    email: 'mailto:sangeethanickson.inbox@gmail.com',
  },
  summary:
    'Full Stack Developer with 3+ years of experience building scalable enterprise applications across compliance-tech, workforce management, fintech, and AI-powered operational platforms. Specialized in React.js, Vue.js, Node.js, PHP, Kotlin, Swift, and cloud-integrated infrastructures with strong expertise in scalable APIs, frontend architecture, real-time systems, and performance optimization.',
};

export const navLinks = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'achievements', label: 'Achievements', href: '#achievements' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];
