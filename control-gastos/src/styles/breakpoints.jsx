const sizes = {
    movile: "576px",
    tablet: "768px",
    laptop: "992px",
    desktop: "1200"
}

export const device = {
    movile: `(min-width: ${sizes.movile})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    desktop: `(min-width: ${sizes.desktop})`,
}