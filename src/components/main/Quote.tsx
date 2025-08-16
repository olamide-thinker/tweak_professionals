import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

type QuoteType = {
    text: string
    author: string
}

const quotes: QuoteType[] = [
    {
        text: "We design bespoke strategies that precisely align with your unique business challenges and goals.",
        author: "Olumide Emmanuel",
    },
    {
        text: "We design bespoke strategies that precisely align with your unique business challenges and goals.",
        author: "Olumide Emmanuel",
    },
    {
        text: "We design bespoke strategies that precisely align with your unique business challenges and goals.",
        author: "Olumide Emmanuel",
    },
]

export function Quote() {
    return (
        <div className=" w-[110rem]  mx-auto flex flex-col gap-4 mt-20 px-4">
            <p className="text-primary text-4xl sm:text-6xl max-w-5xl lg:text-8xl font-bold mb-4">
                What they said about us
            </p>
            <Carousel opts={{ align: "start" }} className="w-full">
                <CarouselContent>
                    {quotes.map((quote, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-full sm:basis-1/2 lg:basis-1/3"
                        >
                            <div className="p-4">
                                <div className="relative bg-black text-white p-6 h-[15rem] w-full flex flex-col justify-between">
                                    <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed">{quote.text}</p>
                                    <p className="mt-4 font-semibold">{quote.author}</p>

                                    {/* Right-angled triangle tail */}
                                    <div
                                        className="absolute left-0 -bottom-6 w-0 h-0
                                        border-l-[0px] border-l-transparent
                                        border-t-[32px] border-t-black
                                        border-r-[32px] border-r-transparent"
                                    />
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default Quote
