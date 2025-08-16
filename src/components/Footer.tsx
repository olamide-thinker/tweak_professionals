import CallToAction from "@/components/CallToAction";

const Footer = () => {
    return (
        <section className={"container/footer"}>
        <div className={" flex gap-4  space-x-4 mt-42  "}>
            <CallToAction
                header="Join Our News Letter"
                content="Partner with Tweak Professional to unlock your organization's potential and achieve strategic objectives."
                action="Request A Proposal"
            />
            <CallToAction
                header="Reach Us Today?"
                content="Partner with Tweak Professional to unlock your organization's potential and achieve strategic objectives."
                action="Request A Proposal"
            />
            <CallToAction
                header="Useful Links"
                content="Partner with Tweak Professional to unlock your organization's potential and achieve strategic objectives."
                action="Request A Proposal"
            />
        </div>
        </section>
    )
}

export default Footer;