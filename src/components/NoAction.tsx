interface NoActionProps {
    content: string[];
}

const NoAction = ({ content }: NoActionProps) => {
    return (
        <div className="flex  gap-4">
            {content.map((text, index) => (
                <div key={index} className="flex gap-2 max-w-[15rem]">
                    <div className="block w-1 self-stretch bg-accent-foreground"></div>
                    <p className="text-sm font-light text-background leading-relaxed">{text}</p>
                </div>
            ))}
        </div>
    );
};

export default NoAction;
