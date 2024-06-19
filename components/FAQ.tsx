import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

type FAQItem = {
    question: string;
    answer: string;
}

const items: FAQItem[] = [
    {
        question: "How do I get started?",
        answer: "The simplest way to get started as of the moment is to head over to the Github repo and follow the read me. "
    },
    {
        question: "What is the point of this page?",
        answer: "This page is simply just to demo the kit, imagine that this kit was a product beings sold."
    },
    {
        question: "Is it really free?",
        answer: "Yes! I love open source tools, I do wish to make money, but that is why I am making this, so I can quickly build tools to make money!"
    },
    {
        question: "Whats the point?",
        answer: "Beacuse I persoanlly have a hard time with starting projects due to the boilerplate such as Authentication, Landing page, and etc. I barely got to finish many projects due to lack of motivation after spending a lot of time on boilerplate."
    }
]

const FAQ = () => {
    return (
        <div id="faq" className='flex flex-col gap-10 mt-52 mb-[100vh] 2xl:px-60'>
            <div className="flex flex-col">
                <h1 className='text-2xl font-bold text-center'>FAQ</h1>
                <h2 className='text-lg text-center'>What are some frequently asked questions which haven{"'"}t actually been asked?</h2>
            </div>
            {items.map((item, index) => (
                <Accordion key={index} type="single" collapsible>
                    <AccordionItem value={item.question}>
                        <AccordionTrigger className="text-left">
                            {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-base md:w-3/4">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            ))}
        </div>
    )
}

export default FAQ