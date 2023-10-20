import React from 'react';

import { VscCircleFilled } from 'react-icons/vsc'

const ColorfulSection = (props) => {
    return (
        <div className={`stack center expand_100 ${props.colorful ? `colorful_background` : props.title ? `bg_l_gray` : ``} `}>
            <div className='stack expand_80 mt_16 pt_50 pb_50 center'>
                {props.sectionName && (<h4 className={`${props.colorful ? `t_white` : `t_black`} font_16 bold mb_16 shelf center`}><VscCircleFilled className='t_golden' />{props.sectionName}<VscCircleFilled className='t_golden' /></h4>)}
                {props.title && (<h2 className={`${props.colorful ? `t_white` : `t_black`} font_33 bold mb_50`}>{props.title}</h2>)}

                {props.children}

            </div>
        </div>
    )
}

export default ColorfulSection