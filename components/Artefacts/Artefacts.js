import React from 'react';
import Link from 'next/link';
import { ArtefactsSlide } from './artefactsSlide';

export const Artefacts = ({lists}) => {
    return (
        <div className="artefacts">
            <h1 className="artefacts_title">Артефакты</h1>
                <ArtefactsSlide lists={lists}/>
            <div className="artefacts_button">
            {/* <Link href='/artefacts'>
                <button className={`button red`}>смотреть все
                    <img src="./img/arrow.svg" alt="arr"/>
                </button>
            </Link> */}
            </div>
        </div>
    )
}
