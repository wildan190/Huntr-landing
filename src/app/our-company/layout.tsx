import type { Metadata } from 'next';
import { translations } from '@/lib/translations';

export const metadata: Metadata = {
  title: translations.en.ourCompany.title,
  description: translations.en.ourCompany.subtitle,
};

export default function OurCompanyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
