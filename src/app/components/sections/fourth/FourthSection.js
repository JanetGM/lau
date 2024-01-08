import React from 'react';
import './fourth.css';
import Image from 'next/image';

export default function FourthSection({ texts }) {
    const { title,img, tag, title_podcast, btn_title } = texts;
    return (
        <div className="third-section flex gap-[100px]">
            <div className='flex justify-center'>
            <p className='title-aside center relative left-[64px]'>{title}</p>
            </div>
            <div>
            <Image
            className='relative top-[4rem]'
            src={img}
            />
            </div>
            
            <div>
            <div className={`tag md:w-[565px] sm:w-[200px]`} dangerouslySetInnerHTML={{ __html: tag }} />
            <p className='title-white' dangerouslySetInnerHTML={{ __html: title_podcast }}/>
            <button className='title-button border-2 border-white rounded-[46px] p-4'>{btn_title}</button>
            </div>

        </div>
    );
}