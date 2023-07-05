type RGBColor = {
    r: number;
    g: number;
    b: number;
};

const changeColorOnScroll = (
    startPercentage: number,
    endPercentage: number,
    startColor: RGBColor,
    endColor: RGBColor
): string => {
    const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollPosition / scrollHeight;

    let backgroundColor = '';

    if (scrollFraction < startPercentage) {
        backgroundColor = `rgb(${startColor.r}, ${startColor.g}, ${startColor.b})`; // Start color until startPercentage scroll percentage
    } else if (
        scrollFraction >= startPercentage &&
        scrollFraction <= endPercentage
    ) {
        const opacity =
            (scrollFraction - startPercentage) /
            (endPercentage - startPercentage); // Opacity transition from 0 to 1
        const r = Math.round(
            opacity * (endColor.r - startColor.r) + startColor.r
        );
        const g = Math.round(
            opacity * (endColor.g - startColor.g) + startColor.g
        );
        const b = Math.round(
            opacity * (endColor.b - startColor.b) + startColor.b
        );
        backgroundColor = `rgb(${r}, ${g}, ${b})`;
    } else {
        backgroundColor = `rgb(${endColor.r}, ${endColor.g}, ${endColor.b})`; // End color after endPercentage scroll percentage
    }

    return backgroundColor;
};

const startPercentage = 0.6;
const endPercentage = 0.65;

export function returnBgColor() {
    return changeColorOnScroll(
        startPercentage,
        endPercentage,
        { r: 0, g: 0, b: 0 },
        { r: 240, g: 228, b: 220 }
    );
}

export function returnTitleColor() {
    return changeColorOnScroll(
        startPercentage,
        endPercentage,
        { r: 154, g: 205, b: 50 },
        { r: 0, g: 0, b: 0 }
    );
}

export function returnColor() {
    return changeColorOnScroll(
        startPercentage,
        endPercentage,
        { r: 255, g: 255, b: 255 },

        { r: 0, g: 0, b: 0 }
    );
}
