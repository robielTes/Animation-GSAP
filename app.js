gsap.from('#myNavbar', { duration: 1, y: '-100%', ease: 'bounce' })

gsap.fromTo('#titre', { scale: 0, opacity: 0 }, { duration: 3, opacity: 1, scale: 1, ease: 'bounce' })

gsap.from('#formation', { duration: 3, x: '-100%', opacity: 0, stagger: 1.5 })
gsap.from('#stage', { duration: 2, x: '-100%', opacity: 0, stagger: 1 })
gsap.from('#branch', { duration: 1, x: '-100%', opacity: 0, stagger: .5 })