interface AdSlotProps {
  className?: string;
}

export default function AdSlot({ className = '' }: AdSlotProps) {
  return (
    // Replace with AdSense code when approved
    <div className={`ad-slot ${className}`}>
      <span>Advertisement Space</span>
    </div>
  );
}
