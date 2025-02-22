import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  Icon: LucideIcon;
  href: string;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ Icon, href, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-orange-500 transition-colors"
      aria-label={label}
    >
      <Icon className="w-6 h-6" />
    </a>
  );
};

export default SocialLink;