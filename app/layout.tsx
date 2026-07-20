import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://outsourcedcallers.com'), title: { default: 'Outsourced Callers | Offshore outsourcing guides', template: '%s | Outsourced Callers' }, description: 'Stealth Agents-style guides for outsourced callers: pricing, services, onboarding, and provider questions.', openGraph: { title: 'Outsourced Callers', description: 'Practical outsourcing guides for business teams.', url: 'https://outsourcedcallers.com', siteName: 'Outsourced Callers', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
