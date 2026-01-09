export const comeUp = {
    initial: { y: 20 },
    whileInView: { y: 0 },
    viewport: { amount: 0.4, once: false }
}

export const show = {
    initial:{ y: 30, opacity: 0.9 },
    animate:{ y: 0, opacity: 1 },
    exit:{ y: 30},
    transition: { duration: 0.2}
}