import PartnerItem from "@/elements/PartnerItem"
import ColorfulSection from "./common/ColorfulSection"
const Partner = () => {
    return (
        <ColorfulSection key={`Our partners section`} sectionName={`Our Trusted Clients`}  >
            <ul className="shelf wrap">
                <PartnerItem img={`/assets/images/partners/partner1.jpg`} />
                <PartnerItem img={`/assets/images/partners/partner1.jpg`} />
            </ul>
        </ColorfulSection>
    )
}

export default Partner
