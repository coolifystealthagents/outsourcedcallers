import type { Metadata } from 'next';
import { getAug19Metadata, renderAug19Article } from '../../aug19-content';
export const metadata: Metadata = getAug19Metadata('blog','outbound-calling-intake-source-register');
export default function Page(){return renderAug19Article('blog','outbound-calling-intake-source-register')}
