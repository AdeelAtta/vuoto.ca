import { useState } from 'react'
import { BiUpArrowAlt, BiDownArrowAlt } from 'react-icons/bi'
const FaqBox = (props) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const toggleAnswer = () => { setShowAnswer(!showAnswer) }
    return (
        <div className='question stack expand_80 padding_4'>
            <h4 onClick={toggleAnswer} className={`shelf left t_black font_20 semi_bold bg_white padding_16 ${showAnswer ? `radius_side` : `radius_20`} `}><span className="padding_16">{props.question}</span> <BiUpArrowAlt className={`${showAnswer ? `rotate_0` : `rotate_180 t_l_gray`} margin_left_auto font_42`} />     </h4>
            <p className={`t_gray font_16 light justify bg_white padding_16 ${showAnswer ? `height_300` : `height_0`} `}>{props.answer}</p>
        </div>
    )
}

export default FaqBox
