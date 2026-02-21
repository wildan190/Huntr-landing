import type { Metadata } from 'next';
import { translations } from '@/lib/translations';

export const metadata: Metadata = {
  title: translations.en.contact.title,
  description: translations.en.contact.description,
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
