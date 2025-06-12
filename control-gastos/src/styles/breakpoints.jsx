const sizes = {
    movile: "576px",
    tablet: "768px",
    laptop: "992px",
    desktop: "1200"
}

export const device = {
    movile: `(max-width: ${sizes.movile})`,
    tablet: `(max-width: ${sizes.tablet})`,
    laptop: `(max-width: ${sizes.laptop})`,
    desktop: `(max-width: ${sizes.desktop})`,
}