import React, { useState } from 'react';

const AccordionCard = ({heading, content}) => {

    const [showContent, setShowContent] = useState(false);

  return (
    <section className="section_content">

        <div className="flex justify-between">
            <h2 onClick={() => setShowContent(prev => !prev)} className="text-dark_purple pt-6 pb-5 font-[700] pr-7 text-md leading-[21px] md:pt-4 md:pb-6 md:text-lg hover:text-[#AD28EB] hover:cursor-pointer">{heading}</h2>
            
            {!showContent ? (
                <img src="/faq-accordion/icon-plus.svg" alt="Plus" onClick={() => setShowContent(prev => !prev)}/>
            ) : (
                <img src="/faq-accordion/icon-minus.svg" alt="Minus" onClick={() => setShowContent(prev => !prev)}/>
            )}
        </div>

        {showContent && (
            <div className="pb-5 px-1 text-grayish_purple text-[14px] leading-[20px] md:md:text-[15px] md:leading-[23px]">
                {content}
            </div>
        )}
    </section>
  )
}

export default AccordionCard;