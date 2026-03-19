import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { colors, typography } from '../../../theme';

const keyframes = `
  @keyframes ql_fadeUp {
    from { opacity: 0; transform: translateY(50px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes ql_headerIn {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes ql_iconSpin {
    from { transform: rotate(-15deg) scale(0.8); opacity: 0; }
    to   { transform: rotate(0deg)  scale(1);   opacity: 1; }
  }
  @keyframes ql_shimmer {
    0%   { background-position: -300px 0; }
    100% { background-position:  300px 0; }
  }
`;

const cards = [
  {
    icon: MenuBookIcon,
    number: '01',
    title: 'Academics',
    desc: 'Rigorous WAEC & Cambridge-aligned curriculum from JSS1 to SS3 — building the sharpest minds.',
    href: '/academics',
    tag: 'Learn More',
    highlight: false,
  },
  {
    icon: HowToRegIcon,
    number: '02',
    title: 'Admissions',
    desc: "Open for 2026/2027 session. Apply now and secure your child's place at Pamsset School.",
    href: '/admissions',
    tag: 'Apply Now',
    highlight: true,
  },
  {
    icon: EmojiEventsIcon,
    number: '03',
    title: 'Campus Life',
    desc: 'Sports, clubs, arts and boarding — a vibrant, full life beyond the classroom.',
    href: '/campus-life',
    tag: 'Explore',
    highlight: false,
  },
  {
    icon: CameraAltIcon,
    number: '04',
    title: 'News & Gallery',
    desc: 'Stay updated with the latest events, achievements and stories from our community.',
    href: '/news',
    tag: 'View All',
    highlight: false,
  },
];

const QuickCard = ({ card, index, visible }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = card.icon;

  return (
    <Box
      component="a" href={card.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        display: 'flex', flexDirection: 'column', textDecoration: 'none',
        position: 'relative', height: '100%',
        borderRadius: '16px', overflow: 'hidden', cursor: 'pointer',
        animation: visible ? `ql_fadeUp 0.7s ease ${index * 0.12 + 0.3}s both` : 'none',

        /* ── off-white base, primary.light overlay on hover ── */
        bgcolor: colors.background.paper,
        border: `1.5px solid ${hovered
          ? card.highlight ? colors.secondary.main : colors.primary.main
          : colors.divider}`,
        transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
        boxShadow: hovered
          ? `0 20px 56px rgba(27,90,174,0.15), 0 0 0 1px ${card.highlight ? colors.secondary.main : colors.primary.light}33`
          : '0 2px 12px rgba(27,90,174,0.07)',
        transform: hovered ? 'translateY(-10px)' : 'none',

        /* subtle blue overlay on hover via ::after */
        '&::after': {
          content: '""', position: 'absolute', inset: 0, borderRadius: '16px',
          background: card.highlight
            ? `${colors.secondary.main}08`
            : `${colors.primary.light}08`,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.35s ease',
          pointerEvents: 'none',
        },
      }}
    >
      {/* ── Top accent bar ── */}
      {card.highlight ? (
        /* shimmer gold bar for highlight card */
        <Box sx={{
          height: 4, flexShrink: 0,
          background: `linear-gradient(90deg,${colors.secondary.dark},${colors.secondary.main},${colors.secondary.light},${colors.secondary.main},${colors.secondary.dark})`,
          backgroundSize: '300px 100%',
          animation: 'ql_shimmer 2.5s linear infinite',
        }} />
      ) : (
        /* solid primary bar for normal cards */
        <Box sx={{
          height: 4, flexShrink: 0,
          background: `linear-gradient(90deg, ${colors.primary.main}, ${colors.primary.light})`,
          opacity: hovered ? 1 : 0.5,
          transition: 'opacity 0.35s ease',
        }} />
      )}

      {/* ── Glow circle behind icon ── */}
      <Box sx={{
        position: 'absolute', top: -30, right: -30,
        width: 140, height: 140, borderRadius: '50%',
        bgcolor: card.highlight ? colors.secondary.main : colors.primary.main,
        opacity: hovered ? 0.08 : 0.03,
        transition: 'opacity 0.4s ease', pointerEvents: 'none',
      }} />

      {/* ── Card body ── */}
      <Box sx={{ p: { xs: 3, md: 3.5 }, display: 'flex', flexDirection: 'column', flexGrow: 1, position: 'relative', zIndex: 1 }}>

        {/* Number + Icon row */}
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 3 }}>
          {/* Faded number */}
          <Typography sx={{
            fontFamily: typography.fontFamily.main,
            fontSize: '3.5rem', fontWeight: typography.fontWeight.extraBold,
            color: card.highlight ? colors.secondary.main : colors.primary.main,
            opacity: hovered ? 0.3 : 0.1,
            lineHeight: 1, transition: 'opacity 0.35s ease', userSelect: 'none',
          }}>
            {card.number}
          </Typography>

          {/* Icon box */}
          <Box sx={{
            width: 52, height: 52, borderRadius: '12px',
            bgcolor: card.highlight ? colors.secondary.main : `${colors.primary.main}12`,
            border: `1.5px solid ${card.highlight ? colors.secondary.dark : `${colors.primary.main}25`}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.35s ease',
            transform: hovered ? 'rotate(8deg) scale(1.1)' : 'none',
            animation: visible ? `ql_iconSpin 0.6s ease ${index * 0.12 + 0.5}s both` : 'none',
          }}>
            <Icon sx={{
              fontSize: 26,
              color: card.highlight ? colors.primary.dark : colors.primary.main,
            }} />
          </Box>
        </Stack>

        {/* Title */}
        <Typography sx={{
          fontFamily: typography.fontFamily.main,
          fontSize: typography.fontSize.lg, fontWeight: typography.fontWeight.bold,
          color: colors.text.primary, mb: 1.5,
          transition: 'color 0.3s ease',
          ...(hovered && { color: card.highlight ? colors.secondary.dark : colors.primary.main }),
        }}>
          {card.title}
        </Typography>

        {/* Animated underline */}
        <Box sx={{
          height: 2, borderRadius: 1, mb: 2,
          bgcolor: card.highlight ? colors.secondary.main : colors.primary.main,
          width: hovered ? '48px' : '24px',
          transition: 'width 0.35s ease',
        }} />

        {/* Description */}
        <Typography sx={{
          fontFamily: typography.fontFamily.main,
          fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.regular,
          color: colors.text.secondary, lineHeight: 1.75, flexGrow: 1, mb: 3,
        }}>
          {card.desc}
        </Typography>

        {/* CTA row */}
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{
          pt: 2, borderTop: `1px solid ${colors.divider}`,
        }}>
          <Typography sx={{
            fontFamily: typography.fontFamily.main,
            fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold,
            color: hovered
              ? card.highlight ? colors.secondary.dark : colors.primary.main
              : colors.text.secondary,
            letterSpacing: 1.5, textTransform: 'uppercase',
            transition: 'color 0.3s ease',
          }}>
            {card.tag}
          </Typography>

          <Box sx={{
            width: 32, height: 32, borderRadius: '50%',
            border: `1.5px solid ${hovered
              ? card.highlight ? colors.secondary.main : colors.primary.main
              : colors.divider}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.3s ease',
            bgcolor: hovered
              ? card.highlight ? colors.secondary.main : colors.primary.main
              : 'transparent',
            transform: hovered ? 'rotate(-45deg)' : 'none',
          }}>
            <ArrowForwardIcon sx={{
              fontSize: 14,
              color: hovered
                ? card.highlight ? colors.primary.dark : 'white'
                : colors.text.secondary,
              transition: 'color 0.3s ease',
            }} />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

const QuickLinks = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{keyframes}</style>

      <Box ref={ref} sx={{
        position: 'relative',
        bgcolor: colors.background.section ?? colors.background.default,
        py: { xs: 8, md: 12 }, overflow: 'hidden',
      }}>

        {/* dot pattern */}
        <Box sx={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          backgroundImage: `radial-gradient(${colors.primary.main}18 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }} />

        {/* faded watermark */}
        <Typography sx={{
          position: 'absolute', bottom: '-5%', right: '-2%',
          fontFamily: typography.fontFamily.main,
          fontSize: { xs: '10rem', md: '16rem' },
          fontWeight: typography.fontWeight.extraBold,
          color: colors.primary.main, opacity: 0.04,
          lineHeight: 1, userSelect: 'none', pointerEvents: 'none', zIndex: 0,
        }}>
          EXPLORE
        </Typography>

        <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 1400, mx: 'auto', px: { xs: 3, md: 6 } }}>

          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 }, animation: visible ? 'ql_headerIn 0.7s ease both' : 'none' }}>
            <Stack direction="row" alignItems="center" justifyContent="center" gap={2} sx={{ mb: 2.5 }}>
              <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: 0.5, flex: 1, maxWidth: 80 }} />
              <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.dark, letterSpacing: 3, textTransform: 'uppercase' }}>
                Explore Pamsset
              </Typography>
              <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: 0.5, flex: 1, maxWidth: 80 }} />
            </Stack>

            <Typography sx={{
              fontFamily: typography.fontFamily.main,
              fontSize: { xs: typography.fontSize['2xl'], md: '2.8rem' },
              fontWeight: typography.fontWeight.bold,
              color: colors.primary.dark, lineHeight: 1.2, mb: 1.5,
            }}>
              Everything We Have to Offer
            </Typography>

            <Typography sx={{
              fontFamily: typography.fontFamily.main,
              fontSize: typography.fontSize.base,
              color: colors.text.secondary, maxWidth: 480, mx: 'auto', lineHeight: 1.8,
            }}>
              From world-class academics to vibrant campus life — Pamsset is built for greatness.
            </Typography>
          </Box>

          {/* Cards grid */}
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4,1fr)' },
            gap: 3,
          }}>
            {cards.map((card, i) => (
              <QuickCard key={card.title} card={card} index={i} visible={visible} />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default QuickLinks;