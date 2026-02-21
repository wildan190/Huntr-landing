import type { Metadata } from 'next';
import { translations } from '@/lib/translations';

export const metadata: Metadata = {
  title: translations.en.privacyPolicy.title,
  description: translations.en.privacyPolicy.subtitle,
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
