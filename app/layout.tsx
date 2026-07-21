import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://outsourcedcallers.com'),
  title: {
    default: 'Outsourced Callers | Calling and appointment-setting guides',
    template: '%s | Outsourced Callers',
  },
  description: 'Plan outsourced callers for follow-up, appointment setting, lead qualification, CRM notes, call review, and clear owner approvals.',
  openGraph: {
    title: 'Outsourced Callers',
    description: 'Practical guides and staffing plans for outsourced calling work.',
    url: 'https://outsourcedcallers.com',
    siteName: 'Outsourced Callers',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
