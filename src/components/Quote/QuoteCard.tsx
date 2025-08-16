type QuoteCardProps = {
    text: string
    author: string
}

export default function QuoteCard({ text, author }: QuoteCardProps) {
    return (
        <div className="relative bg-black text-white p-6 max-w-sm">
            <p className="text-sm leading-relaxed">{text}</p>
            <p className="mt-4 font-semibold">{author}</p>

            {/* Triangle tail */}
            <div className="absolute left-4 -bottom-3 w-0 h-0 border-l-[10px] border-l-transparent border-t-[12px] border-t-black border-r-[10px] border-r-transparent"></div>
        </div>
    )
}
