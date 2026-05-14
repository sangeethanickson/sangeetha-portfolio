import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-accent blur-2xl opacity-50 animate-pulse" />
        <div className="relative h-20 w-20 rounded-2xl bg-gradient-accent flex items-center justify-center font-display text-white text-2xl font-extrabold shadow-glow">
          SN
        </div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
          className="mt-6 h-[2px] bg-gradient-accent rounded-full"
        />
      </div>
    </motion.div>
  );
}
