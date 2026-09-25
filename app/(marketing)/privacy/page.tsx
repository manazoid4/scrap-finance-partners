import type { Metadata } from "next";
export const metadata:Metadata={title:"Privacy Policy",description:"Data handling for the Maz Works portfolio demo."};
const sections=[
["About this site","This is a portfolio demonstration built by Maz Works. It is not an operating finance consultancy."],
["Enquiry forms","The contact and Health Check forms are disabled. They do not collect, store or send enquiry details. Direct submissions to the former enquiry endpoint are also disabled."],
["Website analytics","Aggregate website analytics are used to understand site usage. The hosting provider may process technical request data to serve and protect the site."],
["Contacting Maz Works","If you choose to email Maz Works directly, your email is sent by your email provider to manazoid4@gmail.com. Use that address for questions about this website or its data handling."]
];
export default function PrivacyPage(){return <><section className="editorial-shell border-b-2 border-black p-6 sm:p-10 lg:p-12"><p className="editorial-label">Data handling / Updated 25 September 2026</p><h1 className="mt-10">Privacy policy</h1></section><section className="editorial-shell border-b-2 border-black">{sections.map(([title,copy])=><article key={title} className="grid grid-cols-1 border-b border-black last:border-b-0 md:grid-cols-12"><h2 className="p-5 text-2xl md:col-span-3 md:border-r md:border-black md:p-7">{title}</h2><p className="border-t border-black p-5 text-ink-secondary md:col-span-9 md:border-t-0 md:p-7">{copy}</p></article>)}</section></>}