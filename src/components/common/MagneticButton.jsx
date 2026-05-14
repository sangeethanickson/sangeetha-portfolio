import useMagnetic from '../../hooks/useMagnetic';
import { cn } from '../../utils/cn';

export default function MagneticButton({ as: Tag = 'a', className, children, strength, ...props }) {
  const ref = useMagnetic(strength);
  return (
    <Tag ref={ref} className={cn('flex transition-transform duration-200 will-change-transform', className)} {...props}>
      {children}
    </Tag>
  );
}
