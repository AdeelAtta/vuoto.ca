import Image from "next/image"

function PartnerItem(props) {
    return (
        <li className=" padding_16 margin_16" >
            <Image src={props.img} alt="partner" width={144} height={50} />
        </li>
    )
}

export default PartnerItem