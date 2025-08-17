import CallToAction from "@/components/CallToAction";
import whatsapp from '../../public/images/whatsapp.svg'
import location from '../../public/images/location.svg'
import email from '../../public/images/email.svg'
import link from '../../public/images/link.svg'

const Footer = () => {
    return (
        <section className={"container/footer mt-44"}>

            <div className={'flex gap-8 h-[15rem]'}>
                <div className={'p-4 border-2 border-primary w-fit'}>
                    {/*<Link href="/" className="text-primary leading-tight">*/}
                        <span className="block text-6xl font-bold">Tweak</span>
                        <span className="block text-6xl font-bold">Professional</span>
                        <span className="block text-4xl font-normal">Consulting</span>
                    {/*</Link>*/}


                </div>

                <div className={'font-medium flex flex-col text-3xl h-full justify-between '}>
                    <p className={''}>Unlock potential and <br/> achieve strategic <br/> objectives.</p>
                    <p className={'italic font-normal'}>All rights reserved 2025</p>
                </div>
            </div>

        <div className={" flex lg:flex-row flex-col w-full  mx-auto gap-4  space-x-4 mt-42  "}>


            <CallToAction
                header="Join Our News Letter"
                className={"flex-1 w-[40rem]"}
                content="Partner with Tweak Professional to unlock your organization's potential and achieve strategic objectives."
                action="Request A Proposal"
            />
            <CallToAction
                header="Reach Us Today"
                className={"flex-1 w-[40rem] "}
                content={[
                    {
                        title: "Whatsapp",
                        icon: whatsapp,
                        link: "0904532345"
                    },
                    {
                        title: "Email",
                        icon: email,
                        link: "example.email.com"
                    },
                    {
                        title: "Address",
                        icon: location,
                        link: "No 12 my address, my city, my country"
                    }
                ]}
                moreSocials={[
                        {
                            title: "Whatsapp",
                            icon: whatsapp,
                            link: "0904532345"
                        },
                {
                    title: "Email",
                    icon: email,
                    link: "example.email.com"
                },
                {
                    title: "Address",
                    icon: location,
                    link: "No 12 my address, my city, my country"
                },
                    {
                        title: "Address",
                        icon: location,
                        link: "No 12 my address, my city, my country"
                    }
                    ]}
            />

            <CallToAction
                header="Useful Links"
                className={"w-[20rem]"}
                content={[
                    {
                        title: "Privacy Link",
                        icon: link,
                        link: "Privacy Link"
                    },
                    {
                        title: "Legals",
                        icon: link,
                        link: "Legals"
                    },

                ]}
            />

        </div>
        </section>
    )
}

export default Footer;