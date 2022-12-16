import Image from "next/image"
import { faqs } from "../constants"
import AccordionItem from "./accordion-item"
import vector from "../public/images/illustration-woman-online-mobile.svg"

function Card() {
    return (
        <div className="w-full font-kumbhSans bg-white rounded-3xl px-6 pb-12 relative shadow-card">
            <Image src={vector} alt="vector" className="absolute -top-28 left-1/2 -translate-x-1/2 drop-shadow-illustration" />
            <h1 className="font-bold text-3xl text-center text-custom-primary-text-blue mb-4 mt-32">FAQ</h1>
            <div>
                {faqs.map((item, i) => (
                    <AccordionItem key={i} {...item} />
                ))}
            </div>
        </div>
    )
}

export default Card