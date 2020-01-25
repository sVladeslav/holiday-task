'use strict';

export async function loadJSON (data) {
    try {
        const response = await fetch(data);
        const outData = await response.json();

        return outData;
    } catch (e) {
        console.error(e);
    }
}


export const loadImage = (url, alt, reserveUrl) => {
    const image = new Image();
    image.src = url;
    image.onerror = function(){
        this.src = reserveUrl;
    };
    return image;
};

