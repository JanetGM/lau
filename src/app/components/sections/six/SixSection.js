import React from 'react';
import './six.css';
import Image from 'next/image';

export default function SixSection({ texts }) {
    const { title,msg, redes, items } = texts;
    return (
        <div className="third-section flex justify-between">
            <div className='mr-[100px]'>
            <p className='footer__title'>{title}</p>

            </div>
            <div className='w-[300px] mr-[150px]'>
                <div className='footer-subtitle mb-[20px]' dangerouslySetInnerHTML={{__html:msg}}></div>
                 <a className='footer-mail text-white ' href="mailto:destinatario@example.com">mail</a>
            </div>
            <div className='footer__menu mr-10'>
                <div>{items.map(item=> <div key={item} className='mb-[18px]'>{item}</div>)}</div>
            </div>
            <div>
            <div className='gap-[20px] redes'>{redes.map(item=> <Image key={item} src={item}/>)}</div>
            </div>
        </div>
    );
}