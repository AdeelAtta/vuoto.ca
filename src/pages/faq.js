import Faq from "@/components/Faq"
import Testimonial from "@/components/Testimonial"
import Banner from "@/components/common/Banner"
import MetaData from "@/components/common/MetaData"
const faq = () => {
    const metaData = MetaData({
        title: "Frequently Asked Questions - VUOTO Crypto Tax Specialists",
        description: "Find answers to common questions about our crypto tax services. VUOTO is your trusted crypto tax specialist based in Montreal, Quebec, Canada. Get the information you need for a stress-free tax season.",
        path: "faq",
        imageSrc: "images/metadata/faq.png",
        keywords: "VUOTO FAQ, crypto tax questions, crypto tax answers, income tax, privacy, file sharing, KYC, refunds, crypto tax reports"
    }
    )
    return (
        <> {metaData}
            <Banner title={"Frequently Ask Questions"} prev={"Home"} link={"/"} />
            <Faq />
            <Testimonial />
        </>
    )
}

export default faq
