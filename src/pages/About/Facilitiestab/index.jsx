import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import ComputerIcon from '@mui/icons-material/Computer';
import StorageIcon from '@mui/icons-material/Storage';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import BoltIcon from '@mui/icons-material/Bolt';
import DeskIcon from '@mui/icons-material/Desk';
import WaterIcon from '@mui/icons-material/Water';
import GateIcon from '@mui/icons-material/Fence';
import PowerIcon from '@mui/icons-material/Power';
import { colors, typography } from '../../../theme';

const keyframes = `
  @keyframes fc_fadeUp  { from{opacity:0;transform:translateY(44px) scale(.97)} to{opacity:1;transform:none} }
  @keyframes fc_shimmer { 0%{background-position:-400px 0} 100%{background-position:400px 0} }
  @keyframes fc_spin    { to{transform:rotate(360deg)} }
  @keyframes fc_spinR   { to{transform:rotate(-360deg)} }
  @keyframes fc_scaleIn { from{opacity:0;transform:scale(0.92) translateY(30px)} to{opacity:1;transform:none} }
  @keyframes fc_sweep   { 0%{left:-80%} 100%{left:130%} }
  @keyframes fc_lineGrow{ from{transform:scaleX(0)} to{transform:scaleX(1)} }
  @keyframes fc_tagPop  { from{opacity:0;transform:translateY(-8px) scale(.85)} to{opacity:1;transform:none} }
`;

const facilities = [
  { icon: ComputerIcon, title: 'Computer Lab — Front View', src: '/output_5.jpg', tag: 'ICT Centre', tagColor: colors.primary.main, desc: 'A wide, well-lit hall lined with rows of polished mahogany workstations and wooden stools — built to accommodate hundreds of students for everyday learning and CBT examinations.' },
  { icon: DesktopWindowsIcon, title: 'Computer Lab — Wide Angle', src: '/output_8.jpg', tag: 'ICT Centre', tagColor: colors.primary.main, desc: 'Full-scale view of the ICT hall — rows of mahogany desks with individual monitors and computers stretching across the entire length of the room.' },
  { icon: DeskIcon, title: 'Computer Lab — Close Up', src: '/output_4.jpg', tag: 'ICT Centre', tagColor: colors.primary.light, desc: 'A close-up of the quality mahogany desk partitions, each equipped with a dedicated monitor and computer unit — designed for focus and individual productivity.' },
  { icon: StorageIcon, title: 'Server Room & Network Rack', src: '/output_7.jpg', tag: 'Infrastructure', tagColor: colors.secondary.dark, desc: 'A full-height server rack packed with structured blue ethernet cabling, network switches and routing equipment — powering high-speed internet connectivity.' },
  { icon: DesktopWindowsIcon, title: 'Computer Lab — Side View', src: '/output_6.jpg', tag: 'ICT Centre', tagColor: colors.primary.main, desc: 'Side-angle view of the lab showing double rows of mahogany workstations extending deep into the hall — with ceiling fans, strip lighting and tiled floors.' },
  { icon: BoltIcon, title: 'Inverter & Power Backup', src: '/output_9.jpg', tag: 'Power Supply', tagColor: '#2E7D32', desc: 'Industrial-grade inverter unit with heavy-duty green battery banks ensuring the ICT centre maintains uninterrupted power supply at all times — day or night.' },
  { icon: WaterIcon, title: 'Student Conveniences', src: '/output_1.jpg', tag: 'Sanitation', tagColor: '#0277BD', desc: 'Clean, tiled toilet and bathroom facilities with stone-finished walls and a large overhead water storage tank — maintaining high hygiene standards on campus.' },
  { icon: GateIcon, title: 'School Gate & Perimeter Wall', src: '/output_2.jpg', tag: 'Security', tagColor: colors.primary.dark, desc: 'A solid concrete perimeter wall with an ornamental iron entrance gate featuring decorative circular ironwork — providing a secured, controlled campus environment.' },
  { icon: PowerIcon, title: 'Mantrac Industrial Generator', src: '/output_3.jpg', tag: 'Power Supply', tagColor: '#2E7D32', desc: 'A heavy-duty Mantrac industrial generator providing full campus-wide power backup — ensuring electricity is never an obstacle to teaching, learning or operations.' },
];

const FacilityCard = ({ item, index, visible }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  return (
    <Box onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      sx={{
        borderRadius: '20px', overflow: 'hidden', position: 'relative',
        bgcolor: colors.background.paper,
        border: `1.5px solid ${hovered ? item.tagColor + '55' : colors.divider}`,
        boxShadow: hovered
          ? `0 32px 70px rgba(13,58,122,0.16), 0 0 0 2px ${item.tagColor}33`
          : '0 4px 20px rgba(13,58,122,0.07)',
        transform: hovered ? 'translateY(-12px)' : 'none',
        transition: 'all .4s cubic-bezier(.34,1.2,.64,1)',
        animation: visible ? `fc_scaleIn .65s ease ${index * .07 + .1}s both` : 'none',
        /* shimmer sweep */
        '&::after': { content: '""', position: 'absolute', top: 0, bottom: 0, width: '55%', left: '-80%', zIndex: 10, pointerEvents: 'none', background: 'linear-gradient(105deg,transparent 30%,rgba(255,255,255,0.5) 50%,transparent 70%)' },
        '&:hover::after': { animation: 'fc_sweep .65s ease forwards' },
      }}>

      {/* ── animated top bar ── */}
      <Box sx={{ height: 4, background: `linear-gradient(90deg, ${item.tagColor}, ${item.tagColor}88, transparent)`, transformOrigin: 'left', animation: visible ? `fc_lineGrow .6s ease ${index * .07 + .2}s both` : 'none' }} />

      {/* ── Image ── */}
      <Box sx={{ position: 'relative', height: 220, overflow: 'hidden' }}>
        <Box component="img" src={item.src} alt={item.title}
          sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .7s ease', transform: hovered ? 'scale(1.08)' : 'scale(1)' }} />

        {/* dark overlay — tightened, not heavy */}
        <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg,rgba(10,20,50,0.08) 0%,rgba(10,20,50,0.72) 100%)`, opacity: hovered ? 1 : .7, transition: 'opacity .4s ease' }} />

        {/* tag — pops in */}
        <Box sx={{ position: 'absolute', top: 14, left: 14, display: 'flex', alignItems: 'center', gap: .8, bgcolor: item.tagColor, px: 1.5, py: .55, borderRadius: '6px', animation: visible ? `fc_tagPop .5s cubic-bezier(.34,1.2,.64,1) ${index * .07 + .4}s both` : 'none' }}>
          <Icon sx={{ fontSize: 11, color: 'white' }} />
          <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: '0.58rem', fontWeight: typography.fontWeight.bold, color: 'white', letterSpacing: 1.2, textTransform: 'uppercase' }}>
            {item.tag}
          </Typography>
        </Box>

        {/* icon circle bottom-right */}
        <Box sx={{ position: 'absolute', bottom: 14, right: 14, width: 38, height: 38, borderRadius: '50%', bgcolor: hovered ? item.tagColor : 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)', border: `1.5px solid ${hovered ? item.tagColor : 'rgba(255,255,255,0.3)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .35s ease', transform: hovered ? 'rotate(15deg) scale(1.1)' : 'none' }}>
          <Icon sx={{ fontSize: 18, color: 'white' }} />
        </Box>

        {/* title on image bottom */}
        <Typography sx={{ position: 'absolute', bottom: 14, left: 14, fontFamily: typography.fontFamily.main, fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.bold, color: 'white', lineHeight: 1.3, maxWidth: '68%', textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}>
          {item.title}
        </Typography>
      </Box>

      <Box sx={{ p: 2.8 }}>
        <Box sx={{ height: 2, borderRadius: 2, bgcolor: item.tagColor, mb: 1.8, width: hovered ? '50px' : '26px', transition: 'width .35s ease' }} />
        <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: typography.fontSize.sm, color: colors.text.secondary, lineHeight: 1.85 }}>
          {item.desc}
        </Typography>
      </Box>
    </Box>
  );
};

const FacilitiesTab = () => {
  const [heroVis, setHeroVis] = useState(false);
  const [gridVis, setGridVis] = useState(false);
  const heroRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const obs1 = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setHeroVis(true); obs1.disconnect(); } }, { threshold: 0.05 });
    const obs2 = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setGridVis(true); obs2.disconnect(); } }, { threshold: 0.05 });
    if (heroRef.current) obs1.observe(heroRef.current);
    if (gridRef.current) obs2.observe(gridRef.current);
    return () => { obs1.disconnect(); obs2.disconnect(); };
  }, []);

  return (
    <>
      <style>{keyframes}</style>

      <Box ref={heroRef} sx={{
        bgcolor: colors.background.default, py: { xs: 8, md: 11 }, position: 'relative', overflow: 'hidden',
        '&::before': { content: '""', position: 'absolute', inset: 0, backgroundImage: `radial-gradient(${colors.primary.main}10 1.5px,transparent 1.5px)`, backgroundSize: '26px 26px', pointerEvents: 'none' },
      }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg,transparent,${colors.secondary.dark},${colors.secondary.main},${colors.secondary.light},${colors.secondary.main},${colors.secondary.dark},transparent)`, backgroundSize: '400px 100%', animation: 'fc_shimmer 4s linear infinite' }} />

        <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, bgcolor: colors.divider }} />

        <Box sx={{ position: 'absolute', top: '-15%', right: '-5%', width: { xs: 0, md: 300 }, height: { xs: 0, md: 300 }, display: { xs: 'none', md: 'block' }, pointerEvents: 'none' }}>
          <Box sx={{ position: 'absolute', inset: 0, borderRadius: '50%', border: `1px dashed ${colors.primary.main}18`, animation: 'fc_spin 28s linear infinite' }}>
            <Box sx={{ position: 'absolute', top: '-5px', left: '46%', width: 9, height: 9, borderRadius: '50%', bgcolor: colors.primary.main, boxShadow: `0 0 10px ${colors.primary.main}` }} />
          </Box>
          <Box sx={{ position: 'absolute', inset: '20%', borderRadius: '50%', border: `1px dashed ${colors.secondary.main}30`, animation: 'fc_spinR 18s linear infinite' }}>
            <Box sx={{ position: 'absolute', bottom: '-4px', left: '46%', width: 7, height: 7, borderRadius: '50%', bgcolor: colors.secondary.main, boxShadow: `0 0 8px ${colors.secondary.main}` }} />
          </Box>
        </Box>

        <Box sx={{ position: 'absolute', bottom: '-10%', left: '-4%', width: 300, height: 300, borderRadius: '50%', bgcolor: colors.primary.main, opacity: .05, filter: 'blur(60px)', pointerEvents: 'none' }} />
        <Typography sx={{ position: 'absolute', bottom: '-5%', right: '-1%', fontFamily: typography.fontFamily.main, fontSize: { xs: '8rem', md: '14rem' }, fontWeight: typography.fontWeight.extraBold, color: colors.primary.main, opacity: .04, userSelect: 'none', pointerEvents: 'none', lineHeight: 1 }}>
          FACILITIES
        </Typography>

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{
            display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.1fr 1fr' }, gap: { xs: 4, md: 8 }, alignItems: 'center',
            animation: heroVis ? 'fc_fadeUp .7s ease both' : 'none'
          }}>

            <Box>
              <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2 }}>
                <Box sx={{ width: 36, height: 2, bgcolor: colors.secondary.main }} />
                <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.dark, letterSpacing: 3, textTransform: 'uppercase' }}>
                  Our Facilities
                </Typography>
              </Stack>

              <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: { xs: typography.fontSize['2xl'], md: '3rem' }, fontWeight: typography.fontWeight.extraBold, color: colors.primary.dark, lineHeight: 1.15, mb: .3 }}>
                Built for
              </Typography>
              <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: { xs: typography.fontSize['2xl'], md: '3rem' }, fontWeight: typography.fontWeight.extraBold, color: colors.secondary.main, lineHeight: 1.15, mb: 3 }}>
                World-Class Learning.
              </Typography>

              <Stack direction="row" gap={1.5} flexWrap="wrap">
                {[
                  { label: 'ICT Centre', color: colors.primary.main },
                  { label: 'Power Backup', color: '#2E7D32' },
                  { label: 'Secured Campus', color: colors.primary.dark },
                ].map(s => (
                  <Box key={s.label} sx={{ display: 'inline-flex', alignItems: 'center', gap: .7, bgcolor: `${s.color}10`, border: `1.5px solid ${s.color}28`, borderRadius: '100px', px: 1.8, py: .6 }}>
                    <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: s.color }} />
                    <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: '0.68rem', fontWeight: typography.fontWeight.bold, color: s.color, letterSpacing: 1, textTransform: 'uppercase' }}>
                      {s.label}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>

            <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: typography.fontSize.base, color: colors.text.secondary, lineHeight: 1.95 }}>
              From a state-of-the-art ICT centre and professional server room to a secured campus gate, clean sanitation facilities and industrial power backup — every corner of Pamsset School is intentionally designed and professionally maintained for student excellence.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box ref={gridRef} sx={{
        bgcolor: colors.background.paper, py: { xs: 7, md: 11 }, position: 'relative', overflow: 'hidden',
        '&::before': { content: '""', position: 'absolute', inset: 0, backgroundImage: `radial-gradient(${colors.primary.main}0D 1px,transparent 1px)`, backgroundSize: '26px 26px', pointerEvents: 'none' },
      }}>
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 3 }}>
            {facilities.map((item, i) => (
              <FacilityCard key={item.title} item={item} index={i} visible={gridVis} />
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FacilitiesTab;