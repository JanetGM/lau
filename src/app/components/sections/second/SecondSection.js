import React from 'react';
import './second.css';
import Image from 'next/image';

export default function SecondSection({ texts }) {
    const {
        title_side_section,
        title_section, subtitle_first, subtitle_second, img_path } = texts;
        console.log(img_path,'path');

    const TitleAside = ({ title }) => {
        return (
            <div className='title-aside '>
                {title}
            </div>
        )
    }

    const TitleCenter = ({title}) => {
        return(
        <div className='title-center'>
            {title}
        </div>
        )
    }

    const Tag = ({ text, customeClass }) => {
        return (
            <div className={`tag ${customeClass}`} dangerouslySetInnerHTML={{ __html: text }} />
        );
    };

    return (
        <div className="sm:flex flex-column">
            <TitleAside
                title={title_side_section}
            />
           <Image
            className='second-section__image sm: w-[200px]'
            src={img_path}
            alt="Miriam Lau"
          />
            <div className=''>
    <div className='second-section--action'>
        <p className='title-second center'>{title_section}</p>
          <div className='second-section-texts  sm:flex flex-column'>
            <Tag
                customeClass="second-section__tag--primary"
                text={subtitle_first}
            />
             <Tag
                customeClass="second-section__tag--second"
                text={subtitle_second}
            />
            </div>
        </div>
            </div>
       
        </div>
    );
}