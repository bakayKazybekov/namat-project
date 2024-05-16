export const verticalAnimation = {
  hidden: {
    opacity: 0,
    y: 120,
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {delay: custom * 0.15, duration: 0.3}
  })
}