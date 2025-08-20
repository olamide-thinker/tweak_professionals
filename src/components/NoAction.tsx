interface NoActionProps {
    content: string[];
}

const NoAction = ({ content }: NoActionProps) => {
    return (
        <div className="grid sm:grid-cols-1 lg:grid-cols-4  gap-4">
            {content.map((text, index) => (
                <div key={index} className="flex gap-2 max-w-[30rem]">
                    <div className="block w-1 self-stretch bg-accent-foreground"></div>
                    <p className="sm:text-xl text-2xl lg:text-2xl  font-light text-background leading-relaxed">{text}</p>
                </div>
            ))}
        </div>
    );
};

export default NoAction;
