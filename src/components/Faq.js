import React from 'react'
import ColorfulSection from './common/ColorfulSection';
import FaqBox from '@/elements/FaqBox';
import FormatText from './common/FormatText';
import messages from './common/en.json'


const Faq = () => {

 const [question,setQuestions] = React.useState(messages[`pages.faq.section.questions.total`])
  return (
    <ColorfulSection key={`FaqBox's Section`} title={<FormatText text={'pages.faq.section.questions.title'} />}>
      {[...Array(question)].map((item,index) => {

      
        return (
        <FaqBox key={index+Math.random()} question={<FormatText text={`pages.faq.section.questions.question${index+1}`} />}
          answer={<FormatText text={`pages.faq.section.questions.answer${index+1}`} />}
        />
        )
      
      })}
      {/* <FaqBox question={`Will any of my personal information be shared/leaked?`}
        answer={`Absolutely not. TRUE is bound by professional secrecy with the CPA order. All information will be kept confidential.`}
      />
      <FaqBox question={`How will I share my files/information with you?`}
        answer={`All information will be sent to a gmail email account, where only TRUE has access, and be kept off discord (unless preferred by client).`}
      /> */}
    </ColorfulSection>
  )
}

export default Faq