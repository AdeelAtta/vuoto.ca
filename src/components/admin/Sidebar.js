import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'
import Image from 'next/image';
import { BiSolidDashboard, BiLogOut, BiSolidBookContent } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { ImProfile } from 'react-icons/im'
import {LuMessagesSquare} from 'react-icons/lu'
// import {useRouter} from 'next/router';

const menu = [{
    name:'Dashboard',
    icon: <BiSolidDashboard />
},{
    name:'Blogs',
    icon: <BiSolidBookContent />
},{
    name:'Subscribers',
    icon: <ImProfile />
},{
    name:'Messages',
    icon:<LuMessagesSquare />
}];

const Sidebar = ({logout,setPage,page}) => {
    // const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div style={{ width: isOpen ? "50px" : "250px", overflow:'hidden' }} className="sidebar relative" >
            <div className="top_section mb_16 mt_16 ">
                <div style={{ display: isOpen ? "none" : "flex", columnGap: `10px` }}>
                    <Image className='radius_8' width={30} height={30} src={`/assets/images/common/logo1.png`} alt='logo' />
                    <h3 className='font_26'> Vuoto</h3>
                </div>
                <div style={{ marginLeft: isOpen ? "0px" : "50px" }} className="bars">
                    {isOpen ? <FaBars onClick={toggle} className={isOpen ? 't_golden' : ''} /> : <AiOutlineClose onClick={toggle} /> }
                </div>
            </div>
            { menu.map((item,i) =>{

            return (
                <div title={item.name}  key={i} className={`link pointer ${(page == item.name) && ` hover` }`} onClick={() =>setPage(`${item.name}`)} >
                    <div className="icon">{item.icon}</div>
                    <div style={{ display: isOpen ? "none" : "block" }} className="link_text">{item.name}</div>
                </div>
            )
            })
            }
            <Link title={`Logout`} href={"/"} key={3} className="link absolute " style={{bottom:'5%' , width:'100%'}} onClick={() => logout()}>
                <div className="icon"><BiLogOut /></div>
                <div className="link_text">Logout</div>
            </Link>
            
        </div>
    );
};

export default Sidebar;