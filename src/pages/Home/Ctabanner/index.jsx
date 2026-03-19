import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';
import { colors, typography } from '../../../theme';

const keyframes = `
  @keyframes cta_fadeUp { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:none} }
  @keyframes cta_scaleIn { from{opacity:0;transform:scale(0.88)} to{opacity:1;transform:scale(1)} }
  @keyframes cta_shimmer { 0%{background-position:-600px 0} 100%{background-position:600px 0} }
  @keyframes cta_float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  @keyframes cta_pulse { 0%,100%{box-shadow:0 0 0 0 rgba(240,165,0,0.4)} 50%{box-shadow:0 0 0 14px rgba(240,165,0,0)} }
  @keyframes cta_lineGrow { from{width:0} to{width:100%} }
  @keyframes cta_spin { to{transform:rotate(360deg)} }
`;

const perks = [
  'Cambridge & WAEC Curriculum',
  'Boarding & Day Options Available',
  'Scholarships for Exceptional Students',
  'Applications Close July 31, 2026',
];

const CTABanner = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <Box ref={ref} sx={{ position:'relative', overflow:'hidden', bgcolor: colors.primary.main, }}>

        <Box sx={{ position:'absolute', top:-100, right:-100, width:420, height:420, borderRadius:'50%', border:`1px solid ${colors.secondary.main}15`, animation:'cta_spin 30s linear infinite', pointerEvents:'none', zIndex:0 }} />
        <Box sx={{ position:'absolute', bottom:-80, left:-60, width:320, height:320, borderRadius:'50%', bgcolor:colors.primary.main, opacity:.2, filter:'blur(60px)', pointerEvents:'none', zIndex:0 }} />

        <Typography sx={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', fontFamily:typography.fontFamily.main, fontSize:{ xs:'8rem', md:'14rem' }, fontWeight:typography.fontWeight.extraBold, color:colors.primary.light, opacity:.04, whiteSpace:'nowrap', userSelect:'none', pointerEvents:'none', zIndex:0, lineHeight:1 }}>
          ADMISSIONS
        </Typography>

        <Box sx={{ position:'absolute', top:0, left:0, right:0, height:3, background:`linear-gradient(90deg,transparent,${colors.secondary.main},${colors.secondary.light},${colors.secondary.main},transparent)`, backgroundSize:'600px 100%', animation:'cta_shimmer 3s linear infinite', zIndex:2 }} />

        <Box sx={{ position:'relative', zIndex:1, maxWidth:1400, mx:'auto', px:{ xs:3, md:6 }, py:{ xs:7, md:10 } }}>
          <Box sx={{ display:'grid', gridTemplateColumns:{ xs:'1fr', md:'1fr 1fr' }, gap:{ xs:5, md:8 }, alignItems:'center' }}>

            <Box sx={{ animation: visible ? 'cta_fadeUp 0.8s ease 0.1s both' : 'none' }}>
              <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb:2.5 }}>
                <Box sx={{ width:36, height:2, bgcolor:colors.secondary.main }} />
                <Typography sx={{ fontFamily:typography.fontFamily.main, fontSize:typography.fontSize.xs, fontWeight:typography.fontWeight.bold, color:colors.secondary.main, letterSpacing:3, textTransform:'uppercase' }}>
                  Admissions Open — 2026/2027
                </Typography>
              </Stack>

              <Typography sx={{ fontFamily:typography.fontFamily.main, fontSize:{ xs:typography.fontSize['2xl'], md:'3rem' }, fontWeight:typography.fontWeight.bold, color:'white', lineHeight:1.15, mb:.5 }}>
                Give Your Child
              </Typography>
              <Box sx={{ position:'relative', display:'inline-block', mb:2.5 }}>
                <Typography sx={{ fontFamily:typography.fontFamily.main, fontSize:{ xs:typography.fontSize['2xl'], md:'3rem' }, fontWeight:typography.fontWeight.bold, color:colors.secondary.main, lineHeight:1.15 }}>
                  The Best Start.
                </Typography>
                <Box sx={{ position:'absolute', bottom:-2, left:0, height:3, bgcolor:colors.secondary.main, borderRadius:2, animation: visible ? 'cta_lineGrow 0.8s ease 0.6s both' : 'none', width: visible ? '100%' : 0 }} />
              </Box>

              <Typography sx={{ fontFamily:typography.fontFamily.main, fontSize:typography.fontSize.sm, color:'rgba(255,255,255,0.55)', lineHeight:1.9, mb:4, maxWidth:440 }}>
                Applications are now open for the new academic session. Limited spaces — don't miss your child's place at Pamsset School, Aliade.
              </Typography>

              <Stack direction={{ xs:'column', sm:'row' }} gap={2}>
                <Button variant="contained" endIcon={<ArrowForwardIcon />} onClick={() => navigate('/admissions')}
                  sx={{ fontFamily:typography.fontFamily.main, fontSize:typography.fontSize.sm, fontWeight:typography.fontWeight.semiBold, bgcolor:colors.secondary.main, color:colors.primary.dark, px:3.5, py:1.6, borderRadius:'8px', textTransform:'none', animation:'cta_pulse 2.5s ease infinite', transition:'all .25s ease', '&:hover':{ bgcolor:colors.secondary.light, transform:'translateY(-3px)', boxShadow:`0 12px 32px ${colors.secondary.main}44` }, '& .MuiButton-endIcon':{ transition:'transform .25s' }, '&:hover .MuiButton-endIcon':{ transform:'translateX(5px)' } }}>
                  Apply for Admission
                </Button>
                <Button variant="outlined" startIcon={<DownloadIcon />} onClick={() => navigate('/admissions/requirements')}
                  sx={{ fontFamily:typography.fontFamily.main, fontSize:typography.fontSize.sm, fontWeight:typography.fontWeight.semiBold, borderColor:`${colors.secondary.main}55`, color:'white', px:3.5, py:1.6, borderRadius:'8px', textTransform:'none', transition:'all .25s ease', '&:hover':{ borderColor:colors.secondary.main, color:colors.secondary.light, bgcolor:`${colors.secondary.main}12`, transform:'translateY(-3px)' } }}>
                  Download Prospectus
                </Button>
              </Stack>
            </Box>

            {/* RIGHT — perks card */}
            <Box sx={{ bgcolor:colors.primary.main, borderRadius:'20px', border:`1px solid rgba(255,255,255,0.08)`, overflow:'hidden', boxShadow:'0 20px 60px rgba(0,0,0,0.3)', animation: visible ? 'cta_scaleIn 0.8s ease 0.3s both, cta_float 6s ease-in-out 1.2s infinite' : 'none' }}>
              {/* card header */}
              <Box sx={{ bgcolor:colors.secondary.main, px:3, py:1.8, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                <Typography sx={{ fontFamily:typography.fontFamily.main, fontSize:typography.fontSize.base, fontWeight:typography.fontWeight.bold, color:colors.primary.dark }}>
                  Why Choose Pamsset?
                </Typography>
                <StarIcon sx={{ color:colors.primary.dark, fontSize:18 }} />
              </Box>

              <Box sx={{ p:3 }}>
                {perks.map((perk, i) => (
                  <Box key={perk} sx={{ display:'flex', alignItems:'center', gap:1.5, py:1.4, borderBottom: i < perks.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none', animation: visible ? `cta_fadeUp 0.6s ease ${0.4 + i * 0.1}s both` : 'none' }}>
                    <CheckCircleIcon sx={{ color:colors.secondary.main, fontSize:17, flexShrink:0 }} />
                    <Typography sx={{ fontFamily:typography.fontFamily.main, fontSize:typography.fontSize.sm, color:'rgba(255,255,255,0.8)' }}>
                      {perk}
                    </Typography>
                  </Box>
                ))}

                {/* deadline */}
                <Box sx={{ mt:2, bgcolor:`${colors.secondary.main}14`, border:`1px solid ${colors.secondary.main}40`, borderRadius:'8px', px:2, py:1.4, display:'flex', alignItems:'center', gap:1 }}>
                  <AccessTimeIcon sx={{ color:colors.secondary.main, fontSize:15 }} />
                  <Typography sx={{ fontFamily:typography.fontFamily.main, fontSize:typography.fontSize.xs, fontWeight:typography.fontWeight.semiBold, color:colors.secondary.light }}>
                    Deadline: <strong>July 31, 2026</strong>
                  </Typography>
                </Box>

                <Box onClick={() => navigate('/admissions/requirements')} sx={{ mt:1.5, display:'flex', alignItems:'center', justifyContent:'center', gap:1, py:1.3, borderRadius:'8px', border:'1px solid rgba(255,255,255,0.1)', cursor:'pointer', transition:'all .25s ease', '&:hover':{ bgcolor:`${colors.secondary.main}18`, borderColor:colors.secondary.main } }}>
                  <Typography sx={{ fontFamily:typography.fontFamily.main, fontSize:typography.fontSize.xs, fontWeight:typography.fontWeight.bold, color:colors.secondary.main, letterSpacing:1, textTransform:'uppercase' }}>View Entry Requirements</Typography>
                  <ArrowForwardIcon sx={{ fontSize:12, color:colors.secondary.main }} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* bottom gold line */}
        <Box sx={{ position:'absolute', bottom:0, left:0, right:0, height:2, background:`linear-gradient(90deg,transparent,${colors.secondary.main},transparent)` }} />
      </Box>
    </>
  );
};

export default CTABanner;