import dynamic from 'next/dynamic';

const ContactUs = dynamic(() => import('@/components/ContactUs'), { ssr: false });

export default function ContactPage() {
  return <ContactUs />;
}
