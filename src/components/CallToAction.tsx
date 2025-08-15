interface CardProps {
    header: string;
    content: string;
    action: string;
}

const CallToAction = ({ header, content, action }: CardProps) => {
    return (
        <div className="bg-primary text-accent-foreground p-8 rounded-lg flex flex-col gap-6 max-w-3xl">
            {/* Header */}
            <h1 className="text-4xl w-full  sm:max-w-none  md:text-6xl font-bold leading-snug max-w-xl">
                {header}
            </h1>

            {/* Content + Button */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex gap-2 max-w-[15rem] ">
                    <div className="block w-1.5 self-stretch bg-accent-foreground"></div>
                    <p className="text-sm font-light leading-relaxed">{content}</p>
                </div>

                <button
                    className="flex items-center gap-2 sm:w-fit text-lg md:text-xl
          bg-transparent border border-accent-foreground
          text-accent-foreground px-6 py-3 rounded-md
          font-semibold hover:bg-accent-foreground hover:text-black transition-colors"
                >
                    {action}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default CallToAction;
