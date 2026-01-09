"use client"
import dynamic from 'next/dynamic';

const DotLottieReact = dynamic(
  () => import('@lottiefiles/dotlottie-react').then((mod) => mod.DotLottieReact),
);

interface LottiePlayerProps {
  src: string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

const LottiePlayer = ({ src, loop = true, autoplay = true, className }: LottiePlayerProps) => {
  return (
    <div className={className}>
    <DotLottieReact
      src={src}
      loop={loop}
      autoplay={autoplay}
      style={{ width: '100%', height: 'auto' }}
    />
    </div>
  );
};

export default LottiePlayer;
