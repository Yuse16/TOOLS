export const effects=[
 {slug:'liquid-hero',index:'01',title:'Liquid Hero',subtitle:'Blobs líquidos, glow y copy editorial.',tech:'Motion + CSS',tone:'amber'},
 {slug:'scroll-sequence',index:'02',title:'Scroll Sequence',subtitle:'Canvas sticky controlado por scroll.',tech:'Motion + Canvas',tone:'teal'},
 {slug:'particle-field',index:'03',title:'Particle Field',subtitle:'Partículas reactivas al cursor.',tech:'Canvas 2D',tone:'violet'},
 {slug:'glass-orb',index:'04',title:'Glass Orb',subtitle:'Objeto 3D con distorsión y bloom.',tech:'R3F + Drei',tone:'coffee'},
 {slug:'image-distortion',index:'05',title:'Image Distortion',subtitle:'Profundidad y distorsión procedural.',tech:'Motion',tone:'blue'},
 {slug:'product-3d',index:'06',title:'3D Product',subtitle:'Objeto interactivo con pointer rotation.',tech:'Three + R3F',tone:'rose'},
 {slug:'pinned-storytelling',index:'07',title:'Pinned Storytelling',subtitle:'Narrativa sticky por capítulos.',tech:'Motion Scroll',tone:'olive'},
 {slug:'page-transitions',index:'08',title:'Page Transitions',subtitle:'Transiciones cinematográficas entre escenas.',tech:'Motion',tone:'slate'}
] as const
export function getEffect(slug:string){return effects.find(e=>e.slug===slug)}
