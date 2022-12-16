"use client"

import { useState } from "react"
import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"

const IconArrow = ({ isOpen }) => {

    const rotation = isOpen ? 'rotate-180' : "rotate-0"

    return (
        <svg width={10} height={7} xmlns="http://www.w3.org/2000/svg" className={`${rotation} transition ease-in-out duration-300`}>
            <path d="m1 .799 4 4 4-4" stroke="#F47B56" strokeWidth={2} fill="none" />
        </svg>
    )
}


function Answer({ answer }) {

    const variants = {
        open: { height: 'auto', marginTop: ".5rem" },
        close: { height: 0, marginTop: 0 },
    }

    return (
        <motion.div initial='close' animate='open' exit='close' variants={variants} className=" text-custom-neutral-text-blue overflow-hidden">
            {answer}
        </motion.div>
        // <motion.div animate={isOpen ? 'open' : 'close'} variants={variants} className={` text-custom-neutral-text-blue overflow-hidden`}>
        //     {answer}
        // </motion.div>
    )
}

function AccordionItem({ question, answer }) {

    const [isOpen, setOpen] = useState(false)

    return (
        <div className={`text-xs py-4 border-b-2 cursor-pointer`} onClick={() => setOpen(!isOpen)}>
            <div className="flex justify-between items-center">
                <h1 className={`${isOpen && 'font-bold'} text-custom-primary-text-blue`}>{question}</h1>
                <IconArrow isOpen={isOpen} />
            </div>
            <AnimatePresence>
                {isOpen && <Answer answer={answer} />}
            </AnimatePresence>
            {/* <Answer answer={answer} isOpen={isOpen} /> */}
        </div>
    )
}

export default AccordionItem