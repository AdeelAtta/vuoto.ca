import TeamCard from "@/elements/TeamCard"
import ColorfulSection from "./common/ColorfulSection"
const Teams = () => {
    return (
        <ColorfulSection key={`Teams section`} sectionName={`OUR TEAM`} title={`The Leadership Team`} colorful={true}>
            <div className='shelf wrap mt_50 expand_70'>
                <TeamCard name={`Marco Cianci`} position={`Founder & CEO`} image={`/assets/images/teams/member1.png`} social={{ facebook: `https://www.facebook.com/`, youtube: `https://www.youtube.com/`, twitter: `https://www.twitter.com/`, discord: `https://www.discord.com/` }} />
                {/* <TeamCard name={`Daud`} position={`Crypto Specialist`} image={`/assets/images/teams/member1.png`} social={{ facebook: `https://www.facebook.com/`, youtube: `https://www.youtube.com/`, twitter: `https://www.twitter.com/`, discord: `https://www.discord.com/` }} /> */}
                {/* <TeamCard name={`Sandria`} position={`Tax Specialist`} image={`/assets/images/teams/member1.png`} social={{ facebook: `https://www.facebook.com/`, youtube: `https://www.youtube.com/`, twitter: `https://www.twitter.com/`, discord: `https://www.discord.com/` }} /> */}

            </div>
        </ColorfulSection>
    )
}

export default Teams
