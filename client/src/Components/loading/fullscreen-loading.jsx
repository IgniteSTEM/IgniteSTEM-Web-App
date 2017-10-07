import React from 'react';

import LoadingSquares from './loading-squares.min.svg'; // SVG Loading animation

import './../../Styles/fullscreen-loading.scss'; // Import styling

const fullscreenLoading = () => {
    return (
        <div className="fullscreen-loading">
            <span dangerouslySetInnerHTML={{ __html: LoadingSquares }} />
        </div>
    );
}

export default fullscreenLoading;
