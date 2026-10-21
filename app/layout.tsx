import { AcrClient } from './acr-client';
import Script from 'next/script';
import './globals.css';
import './editorial.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://outsourcedcallers.com'),
  title: {
    default: 'Outsourced Callers | Calling and appointment-setting guides',
    template: '%s | Outsourced Callers',
  },
  description: 'Plan Filipino callers for follow-up, appointment setting, lead qualification, CRM notes, call review, and clear owner approvals.',
  alternates: { canonical: '/' },
  icons: { icon: '/logo.svg', shortcut: '/logo.svg', apple: '/logo.svg' },
  openGraph: {
    title: 'Outsourced Callers',
    description: 'Practical guides and staffing plans for Filipino calling talent.',
    url: 'https://outsourcedcallers.com',
    siteName: 'Outsourced Callers',
    type: 'website',
    images: [{ url: '/brand/stealth-agents-team-bacolod.jpg', width: 1906, height: 1080, alt: 'Stealth Agents team in Bacolod' }],
  },
  twitter: { card: 'summary_large_image', title: 'Outsourced Callers', description: 'Practical guides and staffing plans for Filipino calling talent.', images: ['/brand/stealth-agents-team-bacolod.jpg'] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}<AcrClient/><Script id="acr-tracker-config" strategy="beforeInteractive">{`window.ACR_TRACKER_CONFIG={siteId:'outsourced-callers',endpoint:'/ingest/track',debug:false,funnelSteps:[{path:'/contact-us',step:1,label:'Form Page',event:'funnel_form_page'},{path:'/contact',step:1,label:'Form Page',event:'funnel_form_page'},{path:'/thank-you',step:2,label:'Form Submitted',event:'funnel_form_submitted'},{path:'/thanks-whats-next',step:3,label:'Booking Confirmed',event:'funnel_booking_confirmed'}]};`}</Script><Script src="https://acrtracking.stealthagents.us/v1/tracker.js" strategy="afterInteractive"/></body></html>;
}
