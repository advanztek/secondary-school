import { Box, Container, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon        from '@mui/icons-material/Facebook';
import InstagramIcon       from '@mui/icons-material/Instagram';
import YouTubeIcon         from '@mui/icons-material/YouTube';
import TwitterIcon         from '@mui/icons-material/Twitter';
import LocationOnIcon      from '@mui/icons-material/LocationOn';
import PhoneIcon           from '@mui/icons-material/Phone';
import EmailIcon           from '@mui/icons-material/Email';
import AccessTimeIcon      from '@mui/icons-material/AccessTime';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { colors, typography } from '../../theme';

const keyframes = `
  @keyframes ft_shimmer { 0%{background-position:-600px 0} 100%{background-position:600px 0} }
  @keyframes ft_pulse   { 0%,100%{opacity:1} 50%{opacity:0.4} }
  @keyframes ft_glow    { 0%,100%{opacity:.3} 50%{opacity:.6} }
`;

const footerLinks = {
  'About': [
    { label:'Our History',     path:'/about/history'    },
    { label:'Vision & Mission',path:'/about/vision'     },
    { label:'Meet the Staff',  path:'/about/staff'      },
    { label:'Facilities',      path:'/about/facilities' },
  ],
  'Academics': [
    { label:'Curriculum',       path:'/academics/curriculum' },
    { label:'Junior Secondary', path:'/academics/junior'     },
    { label:'Senior Secondary', path:'/academics/senior'     },
    { label:'Calendar',         path:'/academics/calendar'   },
  ],
  'Admissions': [
    { label:'How to Apply',  path:'/admissions/apply'        },
    { label:'Requirements',  path:'/admissions/requirements' },
    { label:'FAQs',          path:'/admissions/faqs'         },
    { label:'Apply Now',     path:'/admissions/apply'        },
  ],
  'More': [
    { label:'News & Events', path:'/news'    },
    { label:'Contact Us',    path:'/contact' },
    { label:'Home',          path:'/'        },
  ],
};

const socials = [
  { Icon:FacebookIcon,  href:'#', label:'Facebook',  color:'#1877F2' },
  { Icon:InstagramIcon, href:'#', label:'Instagram', color:'#E4405F' },
  { Icon:YouTubeIcon,   href:'#', label:'YouTube',   color:'#FF0000' },
  { Icon:TwitterIcon,   href:'#', label:'Twitter',   color:'#1DA1F2' },
];

const contact = [
  { Icon:LocationOnIcon, label:'Location',  text:'Aliade, Benue State, Nigeria'  },
  { Icon:PhoneIcon,      label:'Phone',     text:'+234 800 000 0000'             },
  { Icon:EmailIcon,      label:'Email',     text:'docpansset@gmail.com'           },
  { Icon:AccessTimeIcon, label:'Hours',     text:'Mon – Fri: 7:30am – 4:30pm'   },
];

const Footer = () => (
  <>
    <style>{keyframes}</style>
    <Box component="footer" sx={{
      bgcolor: colors.primary.dark, color:'white',
      position:'relative', overflow:'hidden',
      '&::before':{ content:'""', position:'absolute', inset:0, backgroundImage:`radial-gradient(rgba(255,255,255,0.045) 1.5px, transparent 1.5px)`, backgroundSize:'26px 26px', pointerEvents:'none' },
      '&::after':{ content:'""', position:'absolute', top:'-10%', right:'-8%', width:450, height:450, borderRadius:'50%', bgcolor:colors.primary.main, opacity:.18, filter:'blur(80px)', pointerEvents:'none' },
    }}>

      <Box sx={{ height:3, background:`linear-gradient(90deg,transparent,${colors.secondary.dark},${colors.secondary.main},${colors.secondary.light},${colors.secondary.main},${colors.secondary.dark},transparent)`, backgroundSize:'600px 100%', animation:'ft_shimmer 4s linear infinite' }} />

      <Container maxWidth="xl" sx={{ position:'relative', zIndex:1 }}>

        <Box sx={{ mt:5, mb:5, pb:4, borderBottom:`1px solid rgba(255,255,255,0.08)` }}>
          <Stack direction={{ xs:'column', sm:'row' }} flexWrap="wrap" gap={{ xs:3, sm:0 }} justifyContent="space-between" alignItems="center">
            {contact.map(({ Icon, label, text }, i) => (
              <Stack key={label} direction="row" alignItems="center" gap={1.8}
                sx={{ flex:1, minWidth:{ xs:'100%', sm:'auto' }, justifyContent:{ xs:'flex-start', sm:'center' },
                  borderRight: i < contact.length - 1 ? { sm:'1px solid rgba(255,255,255,0.1)' } : 'none',
                  pr:{ sm: i < contact.length - 1 ? 3 : 0 },
                  pl:{ sm: i > 0 ? 3 : 0 },
                }}>
                <Box sx={{ width:42, height:42, borderRadius:'12px', flexShrink:0,
                  background:`linear-gradient(135deg,${colors.secondary.main}30,${colors.secondary.main}10)`,
                  border:`1.5px solid ${colors.secondary.main}44`,
                  display:'flex', alignItems:'center', justifyContent:'center',
                }}>
                  <Icon sx={{ fontSize:20, color:colors.secondary.main }} />
                </Box>
                <Box>
                  <Typography sx={{ fontFamily:typography.fontFamily.main, fontSize:'0.62rem', fontWeight:typography.fontWeight.bold, color:colors.secondary.main, letterSpacing:1.5, textTransform:'uppercase', mb:.2 }}>
                    {label}
                  </Typography>
                  <Typography sx={{ fontFamily:typography.fontFamily.main, fontSize:typography.fontSize.sm, fontWeight:typography.fontWeight.medium, color:'rgba(255,255,255,0.85)', lineHeight:1.4 }}>
                    {text}
                  </Typography>
                </Box>
              </Stack>
            ))}
          </Stack>
        </Box>

        {/* ── Main grid ── */}
        <Box sx={{ display:'grid', gridTemplateColumns:{ xs:'1fr', sm:'1fr 1fr', md:'2fr 1fr 1fr 1fr 1fr' }, gap:{ xs:5, md:5 }, pb:6, borderBottom:`1px solid rgba(255,255,255,0.08)` }}>

          {/* Brand column */}
          <Box>
            <Stack direction="row" alignItems="center" gap={1.8} sx={{ mb:2.5 }}>
              <Box sx={{ width:54, height:54, borderRadius:'14px', overflow:'hidden', bgcolor:'white', p:'4px', boxShadow:`0 6px 20px rgba(0,0,0,0.4), 0 0 0 2px ${colors.secondary.main}44`, flexShrink:0 }}>
                <Box component="img" src="/logo1.png" alt="Pamsset" sx={{ width:'100%', height:'100%', objectFit:'contain' }} />
              </Box>
              <Box>
                <Typography sx={{ fontFamily:typography.fontFamily.main, fontSize:typography.fontSize.lg, fontWeight:typography.fontWeight.extraBold, color:'white', lineHeight:1.1, letterSpacing:'.5px' }}>
                  PAMSSET
                </Typography>
                <Typography sx={{ fontFamily:typography.fontFamily.main, fontSize:'0.6rem', fontWeight:typography.fontWeight.bold, color:colors.secondary.main, letterSpacing:2.5, textTransform:'uppercase' }}>
                  School · Aliade
                </Typography>
              </Box>
            </Stack>

            {/* motto */}
            <Box sx={{ display:'inline-flex', alignItems:'center', gap:1, border:`1px solid ${colors.secondary.main}40`, borderLeft:`3px solid ${colors.secondary.main}`, px:2, py:.9, borderRadius:'0 8px 8px 0', mb:2.5, bgcolor:`${colors.secondary.main}0D` }}>
              <Typography sx={{ fontFamily:typography.fontFamily.main, fontSize:'0.62rem', fontWeight:typography.fontWeight.bold, color:colors.secondary.main, letterSpacing:2.5, textTransform:'uppercase' }}>
                Faith · Zeal
              </Typography>
            </Box>

            <Typography sx={{ fontFamily:typography.fontFamily.main, fontSize:typography.fontSize.sm, color:'rgba(255,255,255,0.45)', lineHeight:1.9, mb:3.5, maxWidth:260 }}>
              Nurturing academic excellence and strong character since 1999. Shaping the next generation of leaders.
            </Typography>

            {/* socials */}
            <Typography sx={{ fontFamily:typography.fontFamily.main, fontSize:'0.6rem', fontWeight:typography.fontWeight.bold, color:'rgba(255,255,255,0.25)', letterSpacing:2, textTransform:'uppercase', mb:1.5 }}>
              Follow Us
            </Typography>
            <Stack direction="row" gap={1.2}>
              {socials.map(({ Icon, href, label, color }) => (
                <Box key={label} component="a" href={href} aria-label={label}
                  sx={{ width:38, height:38, borderRadius:'10px', bgcolor:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', display:'flex', alignItems:'center', justifyContent:'center', textDecoration:'none', color:'rgba(255,255,255,0.5)', transition:'all .25s ease',
                    '&:hover':{ bgcolor:color, borderColor:color, color:'white', transform:'translateY(-4px)', boxShadow:`0 8px 20px ${color}44` } }}>
                  <Icon sx={{ fontSize:17 }} />
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <Box key={title}>
              <Typography sx={{ fontFamily:typography.fontFamily.main, fontSize:'0.65rem', fontWeight:typography.fontWeight.bold, color:colors.secondary.main, letterSpacing:2.5, textTransform:'uppercase', mb:2.2, pb:1.2, borderBottom:`1px solid rgba(255,255,255,0.07)` }}>
                {title}
              </Typography>
              <Stack gap={0}>
                {links.map(link => (
                  <Box key={link.label} component={Link} to={link.path}
                    sx={{ fontFamily:typography.fontFamily.main, fontSize:typography.fontSize.sm, color:'rgba(255,255,255,0.45)', textDecoration:'none', display:'flex', alignItems:'center', gap:0, py:.85, borderBottom:'1px solid rgba(255,255,255,0.04)', transition:'all .2s ease',
                      '& .ft-arr':{ fontSize:8, opacity:0, transform:'translateX(-6px)', transition:'all .2s ease', color:colors.secondary.main, mr:0 },
                      '&:hover':{ color:colors.secondary.main, pl:.8, '& .ft-arr':{ opacity:1, transform:'translateX(0)', mr:.8 } } }}>
                    <ArrowForwardIosIcon className="ft-arr" />
                    {link.label}
                  </Box>
                ))}
              </Stack>
            </Box>
          ))}
        </Box>

        {/* ── Bottom bar ── */}
        <Stack direction={{ xs:'column', md:'row' }} justifyContent="space-between" alignItems="center" gap={1.5} sx={{ py:3 }}>
          <Typography sx={{ fontFamily:typography.fontFamily.main, fontSize:typography.fontSize.xs, color:'rgba(255,255,255,0.2)', textAlign:{ xs:'center', md:'left' } }}>
            © {new Date().getFullYear()} Pamsset School, Aliade. All rights reserved.
          </Typography>
          <Stack direction="row" gap={3}>
            {['Privacy Policy','Terms of Use','Sitemap'].map(label => (
              <Box key={label} component={Link} to="/"
                sx={{ fontFamily:typography.fontFamily.main, fontSize:typography.fontSize.xs, color:'rgba(255,255,255,0.2)', textDecoration:'none', transition:'color .2s', '&:hover':{ color:colors.secondary.main } }}>
                {label}
              </Box>
            ))}
          </Stack>
        </Stack>

      </Container>
    </Box>
  </>
);

export default Footer;