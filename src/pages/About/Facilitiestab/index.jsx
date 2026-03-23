import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import ComputerIcon       from '@mui/icons-material/Computer';
import StorageIcon        from '@mui/icons-material/Storage';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import BoltIcon           from '@mui/icons-material/Bolt';
import DeskIcon           from '@mui/icons-material/Desk';
import WaterIcon          from '@mui/icons-material/Water';
import GateIcon           from '@mui/icons-material/Fence';
import PowerIcon          from '@mui/icons-material/Power';
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
    src: '/output_5.jpg',
    tag: 'ICT Centre',
    tagColor: colors.primary.main,
    desc: 'A wide, well-lit hall lined with rows of polished mahogany workstations and wooden stools — built to accommodate hundreds of students for both everyday learning and CBT examinations.',
  },
  {
    icon: DesktopWindowsIcon,
    title: 'Computer Lab — Wide Angle',
    src: '/output_8.jpg',
    tag: 'ICT Centre',
    tagColor: colors.primary.main,
    desc: 'A broad view of the ICT hall showing the full scale of the facility — rows of mahogany desks with individual monitors and computers stretching across the entire length of the room.',
  },
  {
    icon: DeskIcon,
    title: 'Computer Lab — Close Up',
    src: '/output_4.jpg',
    tag: 'ICT Centre',
    tagColor: colors.primary.light,
    desc: 'A close-up view showing the quality mahogany desk partitions, each equipped with a dedicated monitor and computer unit — designed for focus and individual student productivity.',
  },
  {
    icon: StorageIcon,
    title: 'Server Room & Network Rack',
    src: '/output_7.jpg',
    tag: 'Infrastructure',
    tagColor: colors.secondary.dark,
    desc: 'A full-height server rack packed with structured blue ethernet cabling, network switches and routing equipment — the backbone of the ICT centre\'s high-speed internet connectivity.',
  },
  {
    icon: DesktopWindowsIcon,
    title: 'Computer Lab — Side View',
    src: '/output_6.jpg',
    tag: 'ICT Centre',
    tagColor: colors.primary.main,
    desc: 'Side-angle perspective of the lab showing double rows of mahogany workstations extending deep into the hall — with ceiling fans, strip lighting and a clean tiled floor.',
  },
  {
    icon: BoltIcon,
    title: 'Inverter & Power Backup',
    src: '/output_9.jpg',
    tag: 'Power Supply',
    tagColor: '#2E7D32',
    desc: 'Industrial-grade inverter unit with heavy-duty green battery banks, ensuring the ICT centre maintains uninterrupted power supply at all times — day or night.',
  },
  {
    icon: WaterIcon,
    title: 'Student Conveniences',
    src: '/output_1.jpg',
    tag: 'Sanitation',
    tagColor: '#0277BD',
    desc: 'Clean, tiled toilet and bathroom facilities with stone-finished walls and a large overhead water storage tank — maintaining hygiene standards for all students on campus.',
  },
  {
    icon: GateIcon,
    title: 'School Gate & Perimeter Wall',
    src: '/output_2.jpg',
    tag: 'Security',
    tagColor: colors.primary.dark,
    desc: 'A solid concrete perimeter wall with an impressive ornamental iron entrance gate featuring circular decorative ironwork — providing a secured, controlled campus environment.',
  },
  {
    icon: PowerIcon,
    title: 'Mantrac Industrial Generator',
    src: '/output_3.jpg',
    tag: 'Power Supply',
    tagColor: '#2E7D32',
    desc: 'A heavy-duty Mantrac BERKCE industrial generator providing full campus-wide power backup — ensuring electricity is never an obstacle to teaching, learning or operations.',
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
        animation: visible ? `fc_scaleIn 0.7s ease ${index * 0.08 + 0.1}s both` : 'none',
        cursor: 'default', position: 'relative',
        '&::before': { content:'""', position:'absolute', top:0, bottom:0, width:'55%', left:'-80%', zIndex:10, pointerEvents:'none', background:'linear-gradient(105deg,transparent 30%,rgba(255,255,255,0.45) 50%,transparent 70%)' },
        '&:hover::before': { animation:'fc_shimmer .6s ease forwards' },
      }}
    >
      {/* Image */}
      <Box sx={{ position:'relative', height:240, overflow:'hidden' }}>
        <Box component="img" src={item.src} alt={item.title}
          sx={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.6s ease', transform: hovered ? 'scale(1.07)' : 'scale(1)' }} />

        {/* subtle overlay — not heavy */}
        <Box sx={{ position:'absolute', inset:0, background:`linear-gradient(180deg,transparent 40%,rgba(10,20,50,0.75) 100%)`, opacity: hovered ? 1 : .5, transition:'opacity 0.35s ease' }} />

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

        {/* Title on image */}
        <Typography sx={{ position:'absolute', bottom:14, left:14, fontFamily:typography.fontFamily.main, fontSize:typography.fontSize.sm, fontWeight:typography.fontWeight.bold, color:'white', lineHeight:1.3, maxWidth:'70%', textShadow:'0 2px 8px rgba(0,0,0,0.6)' }}>
          {item.title}
        </Typography>
      </Box>

      {/* Content */}
      <Box sx={{ p:3 }}>
        <Box sx={{ width: hovered ? 44 : 24, height:2, bgcolor:item.tagColor, mb:1.8, transition:'width 0.3s ease', borderRadius:2 }} />
        <Typography sx={{ fontFamily:typography.fontFamily.main, fontSize:typography.fontSize.sm, color:colors.text.secondary, lineHeight:1.85 }}>
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
        <Box sx={{ position:'absolute', inset:0, backgroundImage:`radial-gradient(rgba(255,255,255,0.08) 1.5px,transparent 1.5px)`, backgroundSize:'28px 28px', pointerEvents:'none' }} />
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
                Built for{' '}
                <Box component="span" sx={{ color:colors.secondary.main }}>World-Class</Box>{' '}
                Learning
              </Typography>
            </Box>
            <Typography sx={{ fontFamily:typography.fontFamily.main, fontSize:typography.fontSize.base, color:'rgba(255,255,255,0.55)', lineHeight:1.9 }}>
              From a state-of-the-art ICT centre and professional server room to a secured campus gate, clean sanitation facilities and industrial power backup — every corner of Pamsset School is designed with excellence in mind.
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