import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import ComputerIcon    from '@mui/icons-material/Computer';
import ApartmentIcon   from '@mui/icons-material/Apartment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { colors, typography } from '../../../theme';

const keyframes = `
  @keyframes fc_fadeUp   { from{opacity:0;transform:translateY(60px) scale(.97)} to{opacity:1;transform:none} }
  @keyframes fc_left     { from{opacity:0;transform:translateX(-60px)} to{opacity:1;transform:none} }
  @keyframes fc_right    { from{opacity:0;transform:translateX(60px)}  to{opacity:1;transform:none} }
  @keyframes fc_shimmer  { 0%{background-position:-700px 0} 100%{background-position:700px 0} }
  @keyframes fc_spin     { to{transform:rotate(360deg)} }
  @keyframes fc_spinR    { to{transform:rotate(-360deg)} }
  @keyframes fc_pulse    { 0%,100%{opacity:.25;transform:scale(1)} 50%{opacity:.55;transform:scale(1.08)} }
  @keyframes fc_float    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  @keyframes fc_gradShift{ 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
  @keyframes fc_lineGrow { from{transform:scaleX(0)} to{transform:scaleX(1)} }
  @keyframes fc_tagPop   { from{opacity:0;transform:translateY(-10px) scale(.85)} to{opacity:1;transform:none} }
  @keyframes fc_bulletIn { from{opacity:0;transform:translateX(-16px)} to{opacity:1;transform:none} }
`;

const facilities = [
  {
    icon: ComputerIcon,
    title: 'ICT Centre &',
    titleGold: 'Technology Infrastructure',
    subtitle: 'Powering Digital Excellence',
    src: '/faci-ict.png',
    tag: 'ICT & Technology',
    tagColor: colors.primary.main,
    number: '01',
    bullets: [
      'Hundreds of individual mahogany workstations across a massive well-lit hall',
      'Dedicated monitors at every station — ready for CBT exams & daily learning',
      'Professional server rack with full structured cabling & high-speed networking',
      'Industrial inverter with green-lit battery banks for 24/7 uninterrupted power',
    ],
    desc: 'A purpose-built, state-of-the-art ICT facility stretching across a massive hall — rows upon rows of mahogany computer workstations, each with a dedicated monitor. The facility runs on a professional server room with a fully cabled network rack and is backed by an industrial inverter system, ensuring zero downtime for students learning and writing CBT examinations.',
  },
  {
    icon: ApartmentIcon,
    title: 'Campus, Security',
    titleGold: '& Power Systems',
    subtitle: 'A Safe & Functional Environment',
    src: '/faci-campus.png',
    tag: 'Campus Facilities',
    tagColor: colors.secondary.dark,
    number: '02',
    bullets: [
      'Clean tiled bathroom blocks with overhead water storage tanks',
      'Ornamental iron entrance gate with solid concrete perimeter wall',
      'Heavy-duty Mantrac industrial generator for full campus power backup',
      'Well-maintained grounds ensuring a safe environment for all students',
    ],
    desc: 'The Pamsset School campus is engineered for student wellbeing and security at every level. Hygienic tiled bathroom facilities are equipped with overhead water tanks for constant supply. The campus entrance features ornamental iron gates set into a solid perimeter wall — while a massive Mantrac industrial generator ensures power is never a barrier to learning.',
  },
];

const useReveal = (threshold = 0.08) => {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
};

const FacilityCard = ({ item, index, visible }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;
  const isEven = index % 2 === 0;

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        borderRadius: '28px', overflow: 'hidden', position: 'relative',
        bgcolor: colors.background.paper,
        border: `1.5px solid ${hovered ? item.tagColor + '55' : colors.divider}`,
        boxShadow: hovered
          ? `0 48px 90px rgba(13,58,122,0.2), 0 0 0 2px ${item.tagColor}30`
          : '0 10px 40px rgba(13,58,122,0.09)',
        transition: 'all .5s cubic-bezier(.34,1.1,.64,1)',
        transform: hovered ? 'translateY(-10px)' : 'none',
        animation: visible
          ? `${isEven ? 'fc_left' : 'fc_right'} .9s cubic-bezier(.34,1.2,.64,1) ${index * .15}s both`
          : 'none',
        /* shimmer */
        '&::after': { content:'""', position:'absolute', top:0, bottom:0, width:'60%', left:'-80%', zIndex:20, pointerEvents:'none', background:'linear-gradient(105deg,transparent 30%,rgba(255,255,255,0.3) 50%,transparent 70%)' },
        '&:hover::after': { animation:'fc_shimmer .8s ease forwards' },
      }}
    >
      {/* ── animated top gradient bar ── */}
      <Box sx={{
        height: 5, zIndex: 2, position: 'relative',
        background: `linear-gradient(90deg, ${colors.primary.dark}, ${item.tagColor}, ${colors.secondary.main}, ${item.tagColor}, ${colors.primary.dark})`,
        backgroundSize: '300% 100%',
        animation: 'fc_gradShift 5s ease infinite',
      }} />

      {/* ── IMAGE — full width, no fixed height ── */}
      <Box sx={{ position:'relative', overflow:'hidden', lineHeight:0 }}>
        <Box component="img" src={item.src} alt={item.title}
          sx={{ width:'100%', display:'block', transition:'transform .9s cubic-bezier(.25,.46,.45,.94)', transform: hovered ? 'scale(1.04)' : 'scale(1)' }} />

        {/* very subtle bottom fade */}
        <Box sx={{ position:'absolute', bottom:0, left:0, right:0, height:'15%', background:`linear-gradient(0deg,${colors.background.paper}88 0%,transparent 100%)` }} />

        {/* faded big number on image */}
        <Typography sx={{ position:'absolute', top:'50%', right:'3%', transform:'translateY(-50%)', fontFamily:typography.fontFamily.main, fontSize:{ xs:'8rem', md:'14rem' }, fontWeight:typography.fontWeight.extraBold, color:'white', opacity:.07, lineHeight:1, userSelect:'none', pointerEvents:'none' }}>
          {item.number}
        </Typography>

        {/* tag badge — top left */}
        <Box sx={{ position:'absolute', top:22, left:22, display:'flex', alignItems:'center', gap:1, bgcolor:item.tagColor, px:2, py:.9, borderRadius:'100px', boxShadow:`0 6px 20px rgba(0,0,0,0.3)`, animation: visible ? 'fc_tagPop .6s cubic-bezier(.34,1.2,.64,1) .5s both' : 'none' }}>
          <Icon sx={{ fontSize:15, color:'white' }} />
          <Typography sx={{ fontFamily:typography.fontFamily.main, fontSize:'0.62rem', fontWeight:typography.fontWeight.bold, color:'white', letterSpacing:1.5, textTransform:'uppercase' }}>
            {item.tag}
          </Typography>
        </Box>
      </Box>

      {/* ── CONTENT ── */}
      <Box sx={{ p:{ xs:3.5, md:5.5 }, position:'relative', zIndex:1 }}>

        {/* subtitle */}
        <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb:1.5 }}>
          <Box sx={{ width:28, height:2, bgcolor:colors.secondary.main, borderRadius:2 }} />
          <Typography sx={{ fontFamily:typography.fontFamily.main, fontSize:typography.fontSize.xs, fontWeight:typography.fontWeight.bold, color:colors.secondary.dark, letterSpacing:2.5, textTransform:'uppercase' }}>
            {item.subtitle}
          </Typography>
        </Stack>

        {/* title — mixed white + gold */}
        <Box sx={{ mb:2 }}>
          <Typography component="span" sx={{ fontFamily:typography.fontFamily.main, fontSize:{ xs:typography.fontSize.xl, md:'2rem' }, fontWeight:typography.fontWeight.extraBold, color:colors.primary.dark, lineHeight:1.2, display:'block' }}>
            {item.title}
          </Typography>
          <Typography component="span" sx={{ fontFamily:typography.fontFamily.main, fontSize:{ xs:typography.fontSize.xl, md:'2rem' }, fontWeight:typography.fontWeight.extraBold, lineHeight:1.2, display:'block', background:`linear-gradient(120deg,${colors.secondary.dark},${colors.secondary.main},${colors.secondary.light})`, backgroundSize:'200%', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', animation:'fc_gradShift 4s ease infinite' }}>
            {item.titleGold}
          </Typography>
        </Box>

        {/* animated underline */}
        <Box sx={{ height:3, borderRadius:2, transformOrigin:'left', bgcolor: item.tagColor, mb:3, animation: visible ? 'fc_lineGrow .8s cubic-bezier(.34,1.2,.64,1) .3s both' : 'none', width:'100%', maxWidth: hovered ? 100 : 56, transition:'max-width .4s ease' }} />

        {/* description */}
        <Typography sx={{ fontFamily:typography.fontFamily.main, fontSize:typography.fontSize.base, color:colors.text.secondary, lineHeight:1.95, mb:3.5 }}>
          {item.desc}
        </Typography>

        {/* bullets */}
        <Box sx={{ bgcolor:`${item.tagColor}07`, border:`1px solid ${item.tagColor}18`, borderRadius:'16px', p:{ xs:2.5, md:3 } }}>
          <Stack gap={1.8}>
            {item.bullets.map((b, i) => (
              <Stack key={i} direction="row" alignItems="flex-start" gap={1.5}
                sx={{ animation: visible ? `fc_bulletIn .5s ease ${i * .08 + .5}s both` : 'none' }}>
                <Box sx={{ width:22, height:22, borderRadius:'50%', bgcolor:`${item.tagColor}18`, border:`1.5px solid ${item.tagColor}35`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, mt:.1 }}>
                  <CheckCircleIcon sx={{ fontSize:13, color:item.tagColor }} />
                </Box>
                <Typography sx={{ fontFamily:typography.fontFamily.main, fontSize:typography.fontSize.sm, color:colors.text.primary, lineHeight:1.75, fontWeight:typography.fontWeight.medium }}>
                  {b}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

const FacilitiesTab = () => {
  const [heroRef, heroVis] = useReveal(0.05);
  const [gridRef, gridVis] = useReveal(0.05);

  return (
    <>
      <style>{keyframes}</style>

      {/* ── Intro strip ── */}
      <Box ref={heroRef} sx={{ bgcolor:colors.primary.dark, py:{ xs:6, md:9 }, position:'relative', overflow:'hidden' }}>
        {/* dot grid */}
        <Box sx={{ position:'absolute', inset:0, backgroundImage:`radial-gradient(rgba(255,255,255,0.09) 1.5px,transparent 1.5px)`, backgroundSize:'26px 26px', pointerEvents:'none' }} />
        {/* shimmer top bar */}
        <Box sx={{ position:'absolute', top:0, left:0, right:0, height:4, background:`linear-gradient(90deg,transparent,${colors.secondary.dark},${colors.secondary.main},${colors.secondary.light},${colors.secondary.main},${colors.secondary.dark},transparent)`, backgroundSize:'400px 100%', animation:'fc_shimmer 4s linear infinite' }} />
        {/* glow orbs */}
        <Box sx={{ position:'absolute', top:'-30%', right:'-5%', width:420, height:420, borderRadius:'50%', bgcolor:colors.primary.light, opacity:.1, filter:'blur(70px)', pointerEvents:'none', animation:'fc_pulse 8s ease infinite' }} />
        <Box sx={{ position:'absolute', bottom:'-20%', left:'-4%', width:300, height:300, borderRadius:'50%', bgcolor:colors.secondary.main, opacity:.06, filter:'blur(60px)', pointerEvents:'none' }} />

        {/* deco rings */}
        <Box sx={{ position:'absolute', top:'5%', right:'3%', width:{ xs:0, md:240 }, height:{ xs:0, md:240 }, display:{ xs:'none', md:'block' }, pointerEvents:'none' }}>
          <Box sx={{ position:'absolute', inset:0, borderRadius:'50%', border:`1px dashed rgba(255,255,255,0.1)`, animation:'fc_spin 22s linear infinite' }}>
            <Box sx={{ position:'absolute', top:'-5px', left:'46%', width:9, height:9, borderRadius:'50%', bgcolor:'white', opacity:.5 }} />
          </Box>
          <Box sx={{ position:'absolute', inset:'20%', borderRadius:'50%', border:`1px dashed ${colors.secondary.main}30`, animation:'fc_spinR 14s linear infinite' }}>
            <Box sx={{ position:'absolute', bottom:'-4px', left:'46%', width:7, height:7, borderRadius:'50%', bgcolor:colors.secondary.main, boxShadow:`0 0 10px ${colors.secondary.main}` }} />
          </Box>
        </Box>

        {/* faded watermark */}
        <Typography sx={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', fontFamily:typography.fontFamily.main, fontSize:{ xs:'8rem', md:'14rem' }, fontWeight:typography.fontWeight.extraBold, color:'white', opacity:.03, whiteSpace:'nowrap', userSelect:'none', pointerEvents:'none', lineHeight:1 }}>
          FACILITIES
        </Typography>

        <Container maxWidth="xl" sx={{ position:'relative', zIndex:1 }}>
          <Box sx={{ display:'grid', gridTemplateColumns:{ xs:'1fr', md:'1.1fr 1fr' }, gap:{ xs:3, md:7 }, alignItems:'center', animation: heroVis ? 'fc_fadeUp .7s ease both' : 'none' }}>
            <Box>
              <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb:2 }}>
                <Box sx={{ width:36, height:2, bgcolor:colors.secondary.main }} />
                <Typography sx={{ fontFamily:typography.fontFamily.main, fontSize:typography.fontSize.xs, fontWeight:typography.fontWeight.bold, color:colors.secondary.main, letterSpacing:3, textTransform:'uppercase' }}>
                  Our Facilities
                </Typography>
              </Stack>
              <Typography sx={{ fontFamily:typography.fontFamily.main, fontSize:{ xs:typography.fontSize['2xl'], md:'3.2rem' }, fontWeight:typography.fontWeight.extraBold, color:'white', lineHeight:1.12, mb:.3 }}>
                Built for
              </Typography>
              <Typography sx={{ fontFamily:typography.fontFamily.main, fontSize:{ xs:typography.fontSize['2xl'], md:'3.2rem' }, fontWeight:typography.fontWeight.extraBold, lineHeight:1.12, background:`linear-gradient(120deg,${colors.secondary.dark},${colors.secondary.main},${colors.secondary.light})`, backgroundSize:'200%', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', animation:'fc_gradShift 4s ease infinite', mb:0 }}>
                World-Class Learning.
              </Typography>
            </Box>
            <Typography sx={{ fontFamily:typography.fontFamily.main, fontSize:typography.fontSize.base, color:'rgba(255,255,255,0.55)', lineHeight:1.95 }}>
              Every facility at Pamsset School, Aliade is intentionally designed, professionally maintained and built to support student excellence — from our modern ICT infrastructure and secured campus to our reliable industrial power systems.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Cards ── */}
      <Box ref={gridRef} sx={{ bgcolor:colors.background.default, py:{ xs:8, md:12 }, position:'relative', overflow:'hidden',
        '&::before':{ content:'""', position:'absolute', inset:0, backgroundImage:`radial-gradient(${colors.primary.main}0D 1px,transparent 1px)`, backgroundSize:'26px 26px', pointerEvents:'none' },
      }}>
        <Container maxWidth="lg" sx={{ position:'relative', zIndex:1 }}>
          <Stack gap={6}>
            {facilities.map((item, i) => (
              <FacilityCard key={item.title} item={item} index={i} visible={gridVis} />
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default FacilitiesTab;