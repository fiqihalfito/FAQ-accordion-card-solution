import Image from "next/image"
import { faqs } from "../constants"
import AccordionItem from "./accordion-item"
import vectorMobile from "../public/images/illustration-woman-online-mobile.svg"
import vectorShadowMobile from "../public/images/bg-pattern-mobile.svg"
import vectorDesktop from "../public/images/illustration-woman-online-desktop.svg"
import vectorShadowDesktop from "../public/images/bg-pattern-desktop.svg"
import iconBox from "../public/images/illustration-box-desktop.svg"

function Card() {
    return (
        <div className="w-full md:w-3/5 font-kumbhSans bg-white rounded-3xl px-6 pb-12 md:p-0 relative shadow-card grid md:grid-cols-2">
            <Image src={iconBox} alt="box" className="absolute -left-32 top-1/2 -translate-y-1/4 hidden md:block z-50" />
            <div className="md:relative md:overflow-hidden">
                <Image src={vectorMobile} alt="vector" className="absolute -top-28 left-1/2 -translate-x-1/2 md:hidden" />
                <Image src={vectorShadowMobile} alt="shadow" className="relative left-1/2 -translate-x-1/2 md:hidden" />
                <Image src={vectorDesktop} alt="vector" className="absolute left-8 -translate-x-1/4 top-1/2 -translate-y-1/2 hidden md:block" />
                <Image src={vectorShadowDesktop} alt="shadow" className="absolute left-8 -translate-x-1/4 top-1/2 -translate-y-1/2 hidden md:block" />
                {/* <div className="absolute left-8 -translate-x-1/4 top-1/2 -translate-y-1/2 bg-desktop bg-contain scale-[1.7] hidden md:block" /> */}
            </div>
            <div className="md:pt-16 md:pb-20 md:pr-28">
                <h1 className="font-bold text-3xl text-center md:text-start text-custom-primary-text-blue mb-4 mt-8 md:mt-0">FAQ</h1>
                <div>
                    {faqs.map((item, i) => (
                        <AccordionItem key={i} {...item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Card