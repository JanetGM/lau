import React from 'react';
import './third.css';
import Image from 'next/image';

export default function ThirdSection({ texts }) {
    const { arrCards, title } = texts;
    return (
        <div className="third-section flex h-max-[600px]">
            <div className='mr-[0px] lg:flex flex-start sm:flex-column gap-[80px]'>
                {
                    arrCards.map(card => {
                        return (
                            <div key={card} className='w-[296px] lg:flex flex-wrap sm:flex flex-column '>
                                <Image
                                    className=''
                                    src={card.img}
                                    alt={card.img}
                                />
                                <p className='card-title mt-[20px]'>{card?.title}</p>
                                <p className='card-subtitle'>{card?.subtitle}</p>
                                <p className='card-littletter'>{card?.littletter}</p>
                            </div>
                        )
                    })
                }
            </div>

            <p className='title-aside-right center'>{title}</p>
        </div>
    );
}