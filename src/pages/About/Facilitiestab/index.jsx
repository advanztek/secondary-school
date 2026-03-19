import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import ComputerIcon      from '@mui/icons-material/Computer';
import StorageIcon       from '@mui/icons-material/Storage';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import BoltIcon          from '@mui/icons-material/Bolt';
import DeskIcon          from '@mui/icons-material/Desk';
import RouterIcon        from '@mui/icons-material/Router';
import { colors, typography } from '../../../theme';

const keyframes = `
  @keyframes fc_fadeUp  { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:none} }
  @keyframes fc_scaleIn { from{opacity:0;transform:scale(0.93)}      to{opacity:1;transform:scale(1)} }
  @keyframes fc_shimmer { 0%{left:-80%} 100%{left:130%} }
`;

const facilities = [
  {
    icon: ComputerIcon,
    title: 'Computer Lab — Front View',
    src: '/facility-lab-front.png',
    tag: 'ICT Centre',
    tagColor: colors.primary.main,
    desc: 'A spacious, fully equipped computer lab featuring individual mahogany workstations with high-resolution monitors for every student.',
  },
  {
    icon: DesktopWindowsIcon,
    title: 'Computer Lab — Hall View',
    src: '/facility-lab-back.png',
    tag: 'ICT Centre',
    tagColor: colors.primary.main,
    desc: 'Wide-angle view of the exam-ready ICT hall showing the full capacity of workstations stretching across the facility.',
  },
  {
    icon: DeskIcon,
    title: 'Computer Lab — Side Angle',
    src: '/facility-lab-side.png',
    tag: 'ICT Centre',
    tagColor: colors.primary.light,
    desc: 'Side perspective of the neatly arranged computer workstations with dedicated stools and monitor screens at each station.',
  },
  {
    icon: StorageIcon,
    title: 'Server Room & Network Rack',
    src: '/facility-server.png',
    tag: 'Infrastructure',
    tagColor: colors.secondary.dark,
    desc: 'A professional-grade server rack and networking infrastructure powering reliable high-speed internet connectivity across the entire ICT facility.',
  },
  {
    icon: DesktopWindowsIcon,
    title: 'Computer Lab — Full Length',
    src: '/facility-lab-full.png',
    tag: 'ICT Centre',
    tagColor: colors.primary.main,
    desc: 'Full-length view of the ICT hall demonstrating the impressive scale of the facility — accommodating students for learning and CBT examinations.',
  },
  {
    icon: BoltIcon,
    title: 'Inverter & Power Backup',
    src: '/facility-inverter.png',
    tag: 'Power Supply',
    tagColor: '#2E7D32',
    desc: 'Industrial-grade inverter system with heavy-duty battery banks ensuring uninterrupted power supply to the ICT centre at all times.',
  },
];

const FacilityCard = ({ item, index, visible }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        borderRadius: '18px', overflow: 'hidden',
        bgcolor: colors.background.paper,
        boxShadow: hovered
          ? `0 28px 64px rgba(27,90,174,0.18), 0 0 0 1.5px ${item.tagColor}44`
          : '0 4px 20px rgba(27,90,174,0.07)',
        transform: hovered ? 'translateY(-10px)' : 'none',
        transition: 'all 0.35s ease',
        border: `1.5px solid ${hovered ? item.tagColor + '55' : colors.divider}`,
        animation: visible ? `fc_scaleIn 0.7s ease ${index * 0.1 + 0.1}s both` : 'none',
        cursor: 'default', position: 'relative',
        /* shimmer on hover */
        '&::before': { content:'""', position:'absolute', top:0, bottom:0, width:'55%', left:'-80%', zIndex:10, pointerEvents:'none', background:'linear-gradient(105deg,transparent 30%,rgba(255,255,255,0.45) 50%,transparent 70%)' },
        '&:hover::before': { animation:'fc_shimmer .6s ease forwards' },
      }}
    >
      {/* Image */}
      <Box sx={{ position:'relative', height:240, overflow:'hidden' }}>
        <Box component="img" src={item.src} alt={item.title}
          sx={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.6s ease', transform: hovered ? 'scale(1.07)' : 'scale(1)' }}
        />
        {/* overlay */}
        <Box sx={{ position:'absolute', inset:0, background:`linear-gradient(180deg,transparent 25%,rgba(10,20,50,0.82) 100%)`, opacity: hovered ? 1 : 0.55, transition:'opacity 0.35s ease' }} />

        {/* Tag */}
        <Box sx={{ position:'absolute', top:14, left:14, bgcolor:item.tagColor, px:1.5, py:.55, borderRadius:'5px' }}>
          <Typography sx={{ fontFamily:typography.fontFamily.main, fontSize:'0.62rem', fontWeight:typography.fontWeight.bold, color:'white', letterSpacing:1.2, textTransform:'uppercase' }}>
            {item.tag}
          </Typography>
        </Box>

        {/* Icon bottom-right */}
        <Box sx={{ position:'absolute', bottom:14, right:14, width:40, height:40, borderRadius:'10px', bgcolor: hovered ? item.tagColor : 'rgba(255,255,255,0.15)', backdropFilter:'blur(8px)', display:'flex', alignItems:'center', justifyContent:'center', transition:'all 0.3s ease', transform: hovered ? 'rotate(8deg)' : 'none' }}>
          <Icon sx={{ fontSize:20, color:'white' }} />
        </Box>

        {/* Title on image bottom */}
        <Typography sx={{ position:'absolute', bottom:14, left:14, fontFamily:typography.fontFamily.main, fontSize:typography.fontSize.sm, fontWeight:typography.fontWeight.bold, color:'white', lineHeight:1.3, maxWidth:'70%', textShadow:'0 2px 8px rgba(0,0,0,0.5)' }}>
          {item.title}
        </Typography>
      </Box>

      {/* Content */}
      <Box sx={{ p:3 }}>
        <Box sx={{ width: hovered ? 44 : 24, height:2, bgcolor:item.tagColor, mb:1.8, transition:'width 0.3s ease', borderRadius:2 }} />
        <Typography sx={{ fontFamily:typography.fontFamily.main, fontSize:typography.fontSize.sm, color:colors.text.secondary, lineHeight:1.8 }}>
          {item.desc}
        </Typography>
      </Box>
    </Box>
  );
};

const FacilitiesTab = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{keyframes}</style>

      {/* ── Intro strip ── */}
      <Box sx={{ bgcolor:colors.primary.dark, py:{ xs:5, md:7 }, position:'relative', overflow:'hidden' }}>
        <Box sx={{ position:'absolute', inset:0, backgroundImage:`radial-gradient(rgba(255,255,255,0.04) 1.5px,transparent 1.5px)`, backgroundSize:'28px 28px', pointerEvents:'none' }} />
        {/* gold shimmer top */}
        <Box sx={{ position:'absolute', top:0, left:0, right:0, height:3, background:`linear-gradient(90deg,transparent,${colors.secondary.main},${colors.secondary.light},${colors.secondary.main},transparent)` }} />

        <Container maxWidth="xl" sx={{ position:'relative', zIndex:1 }}>
          <Box sx={{ display:'grid', gridTemplateColumns:{ xs:'1fr', md:'1fr 1fr' }, gap:4, alignItems:'center' }}>
            <Box>
              <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb:2 }}>
                <Box sx={{ width:36, height:2, bgcolor:colors.secondary.main }} />
                <Typography sx={{ fontFamily:typography.fontFamily.main, fontSize:typography.fontSize.xs, fontWeight:typography.fontWeight.bold, color:colors.secondary.main, letterSpacing:3, textTransform:'uppercase' }}>
                  Our Facilities
                </Typography>
              </Stack>
              <Typography sx={{ fontFamily:typography.fontFamily.main, fontSize:{ xs:typography.fontSize['2xl'], md:'2.8rem' }, fontWeight:typography.fontWeight.bold, color:'white', lineHeight:1.2 }}>
                Built for World-Class Learning
              </Typography>
            </Box>
            <Typography sx={{ fontFamily:typography.fontFamily.main, fontSize:typography.fontSize.base, color:'rgba(255,255,255,0.55)', lineHeight:1.9 }}>
              Our ICT Centre is equipped with state-of-the-art computer workstations, a professional server room, and a reliable power backup system — ensuring uninterrupted digital learning for every student at Pamsset School, Aliade.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Grid ── */}
      <Box ref={ref} sx={{ bgcolor:colors.background.default, py:{ xs:7, md:11 }, position:'relative', overflow:'hidden',
        '&::before':{ content:'""', position:'absolute', inset:0, backgroundImage:`radial-gradient(${colors.primary.main}10 1px,transparent 1px)`, backgroundSize:'26px 26px', pointerEvents:'none' },
      }}>
        <Container maxWidth="xl" sx={{ position:'relative', zIndex:1 }}>
          <Box sx={{ display:'grid', gridTemplateColumns:{ xs:'1fr', sm:'1fr 1fr', md:'1fr 1fr 1fr' }, gap:3 }}>
            {facilities.map((item, i) => (
              <FacilityCard key={item.title} item={item} index={i} visible={visible} />
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FacilitiesTab;