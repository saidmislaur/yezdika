import React from 'react';

import { ArtefactsSlide } from './artefactsSlide';

export const Artefacts = () => {
    return (
        <div className="artefacts">
            <h1 className="artefacts_title">Артефакты</h1>
            <ArtefactsSlide />
            <div className="artefacts_button">
            <button className={`button red`}>смотреть все
                <img src="./img/arrow.svg" alt="arr"/>
            </button>
            </div>
        </div>
    )
}
