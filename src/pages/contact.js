import Banner from "@/components/common/Banner"
import ColorfulSection from "@/components/common/ColorfulSection"
import SubcribeBox from "@/components/common/SubscribeBox"
import ContactForm from "@/elements/ContactForm"
import MetaData from "@/components/common/MetaData"

const contact = () => {
    const metaData = MetaData({
        title: "Contact Us - VUOTO Crypto Tax Specialists",
        description: "Get in touch with VUOTO, your trusted crypto tax specialist based in Montreal, Quebec, Canada. Reach out to us for all your crypto tax and income tax inquiries. We're here to help!",
        path: "contactus",
        imageSrc: "images/metadata/contactus.png",
        keywords: "VUOTO contact, crypto tax specialist contact, Montreal, Quebec, Canada, income tax inquiries, contact form, email contact"
    }
    )
    return (
        <> {metaData}
            <Banner title={"Contact Us"} prev={"Home"} link={"/"} />
            <ColorfulSection colorful={false} title={`Feedback Form`}>
                <ContactForm />
            </ColorfulSection>
            <ColorfulSection colorful={true} />
            <SubcribeBox />
        </>
    )
}

export default contact
