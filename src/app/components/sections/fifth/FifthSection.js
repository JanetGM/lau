import React from 'react';
import './fifth.css';
import Image from 'next/image';

export default function FifthSection({ texts }) {
    const { title, arrCards, tag, img_background } = texts;
    return (
        <div className="third-section flex">
            <div className='flex flex-wrap gap-[10px] '>
                {arrCards.map((card) => {
                    return (
                        <div key={card} className='card'>
                           <Image
                            src={card}
                           /> 
                        </div>
                    )
                })}
            </div>
            
            <div className='tag-project flex flex-wrap img-podcast'>
                <Image
                className='relative '
                src={img_background}
                />
            <p className='w-[320px]'>{tag}</p>
            </div>
            <p className='title-aside-right relative left-[-70px]'>{title}</p>

        </div>
    );
}