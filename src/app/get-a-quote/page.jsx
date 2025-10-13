import dynamic from 'next/dynamic';

const GetAQuoteSection = dynamic(() => import('@/components/GetAQuoteSection'), { ssr: false });

export default function GetAQuotePage() {
  return <GetAQuoteSection />;
}
