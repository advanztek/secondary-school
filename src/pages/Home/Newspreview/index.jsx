import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsIcon from '@mui/icons-material/Sports';
import CelebrationIcon from '@mui/icons-material/Celebration';
import { useNavigate } from 'react-router-dom';
import { colors, typography } from '../../../theme';

const keyframes = `
  @keyframes np_fadeUp {
    from { opacity: 0; transform: translateY(50px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes np_scaleIn {
    from { opacity: 0; transform: scale(0.92); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes np_headerIn {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes np_tagSlide {
    from { opacity: 0; transform: translateX(-12px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes np_pulse {
    0%, 100% { transform: scale(1);    opacity: 0.7; }
    50%       { transform: scale(1.08); opacity: 1; }
  }
  @keyframes np_shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position:  400px 0; }
  }
`;

const news = [
  {
    slug: 'pamsset-wins-national-science-competition',
    img: '/news1.jpg',
    tag: 'Achievement', tagIcon: EmojiEventsIcon,
    date: 'Feb 14, 2026', readTime: '3 min read',
    title: 'Pamsset Students Sweep National Science Olympiad',
    excerpt: 'Our SS2 students claimed gold, silver and bronze at the national competition held in Abuja — a historic first for the school.',
    featured: true,
  },
  {
    slug: 'inter-house-sports-day-2026',
    img: '/news2.jpg',
    tag: 'Sports', tagIcon: SportsIcon,
    date: 'Jan 30, 2026', readTime: '2 min read',
    title: 'Our Football Team Wins the State Championship',
    excerpt: 'After a thrilling final, Pamsset FC lifts the state cup for the third year running.',
  },
  {
    slug: 'cultural-day-2026-celebration',
    img: '/news3.jpg',
    tag: 'Events', tagIcon: CelebrationIcon,
    date: 'Jan 18, 2026', readTime: '4 min read',
    title: 'Annual Cultural Day: A Celebration of Heritage',
    excerpt: 'Students from 12 states showcased their rich cultural heritage in an unforgettable display.',
  },
];

/* tag color config — using theme colors */
const tagConfig = {
  Achievement: { bg: colors.secondary.dark,  text: 'white' },
  Sports:      { bg: colors.primary.main,    text: 'white' },
  Events:      { bg: colors.neutral?.umbra ?? '#2C3E50', text: 'white' },
};

/* ── Featured large card — keeps dark overlay since it's image-based ── */
const FeaturedCard = ({ item, visible }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const TagIcon = item.tagIcon;
  const tag = tagConfig[item.tag];

  return (
    <Box onClick={() => navigate(`/news/${item.slug}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        position: 'relative', height: { xs: 380, md: '100%' }, minHeight: { md: 520 },
        borderRadius: '20px', overflow: 'hidden', cursor: 'pointer',
        animation: visible ? 'np_scaleIn 0.8s ease 0.1s both' : 'none',
        boxShadow: hovered ? `0 32px 80px rgba(13,58,122,0.35)` : `0 8px 32px rgba(13,58,122,0.15)`,
        transition: 'box-shadow 0.4s ease, transform 0.4s ease',
        transform: hovered ? 'translateY(-6px)' : 'none',
        border: `2px solid ${hovered ? colors.secondary.main + '66' : 'transparent'}`,
      }}
    >
      <Box component="img" src={item.img} alt={item.title}
        sx={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
          transition: 'transform 6s ease',
          transform: hovered ? 'scale(1.06)' : 'scale(1)',
        }}
      />
      {/* overlay — blue tinted for school branding */}
      <Box sx={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(180deg,
          ${colors.primary.dark}22 0%,
          ${colors.primary.dark}66 40%,
          ${colors.primary.dark}F0 100%)`,
      }} />

      {/* Tag */}
      <Box sx={{
        position: 'absolute', top: 20, left: 20,
        display: 'flex', alignItems: 'center', gap: 0.8,
        bgcolor: tag.bg, px: 1.5, py: 0.6, borderRadius: '6px',
        animation: visible ? 'np_tagSlide 0.6s ease 0.4s both' : 'none',
      }}>
        <TagIcon sx={{ fontSize: 13, color: 'white' }} />
        <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: 'white', letterSpacing: 1, textTransform: 'uppercase' }}>
          {item.tag}
        </Typography>
      </Box>

      {/* Bottom content */}
      <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: { xs: 3, md: 4 } }}>
        <Stack direction="row" gap={2} alignItems="center" sx={{ mb: 1.5 }}>
          <Stack direction="row" alignItems="center" gap={0.6}>
            <CalendarTodayIcon sx={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }} />
            <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: typography.fontSize.xs, color: 'rgba(255,255,255,0.5)' }}>{item.date}</Typography>
          </Stack>
          <Box sx={{ width: 3, height: 3, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.3)' }} />
          <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: typography.fontSize.xs, color: 'rgba(255,255,255,0.5)' }}>{item.readTime}</Typography>
        </Stack>

        <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: { xs: typography.fontSize.xl, md: typography.fontSize['2xl'] }, fontWeight: typography.fontWeight.bold, color: 'white', lineHeight: 1.25, mb: 1.5 }}>
          {item.title}
        </Typography>
        <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: typography.fontSize.sm, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, mb: 2.5, display: { xs: 'none', md: 'block' } }}>
          {item.excerpt}
        </Typography>

        <Stack direction="row" alignItems="center" gap={1}
          sx={{ transform: hovered ? 'translateX(6px)' : 'none', transition: 'transform 0.3s ease' }}>
          <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.main, letterSpacing: 1.5, textTransform: 'uppercase' }}>
            Read Story
          </Typography>
          <ArrowForwardIcon sx={{ fontSize: 14, color: colors.secondary.main }} />
        </Stack>
      </Box>
    </Box>
  );
};

/* ── Small side card — light background ── */
const SmallCard = ({ item, index, visible }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const tag = tagConfig[item.tag];

  return (
    <Box onClick={() => navigate(`/news/${item.slug}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        display: 'flex', gap: 2,
        bgcolor: colors.background.paper,
        borderRadius: '14px', overflow: 'hidden', cursor: 'pointer',
        border: `1.5px solid ${hovered ? tag.bg + '55' : colors.divider}`,
        boxShadow: hovered ? `0 12px 40px rgba(27,90,174,0.12)` : `0 2px 12px rgba(27,90,174,0.05)`,
        transform: hovered ? 'translateX(6px)' : 'none',
        transition: 'all 0.3s ease',
        animation: visible ? `np_fadeUp 0.7s ease ${0.2 + index * 0.15}s both` : 'none',
        flexShrink: 0,
      }}
    >
      {/* Left color bar */}
      <Box sx={{
        width: hovered ? 6 : 4, flexShrink: 0,
        bgcolor: tag.bg, borderRadius: '14px 0 0 14px',
        transition: 'width 0.3s ease',
      }} />

      {/* Thumbnail */}
      <Box sx={{ width: { xs: 90, md: 110 }, flexShrink: 0, overflow: 'hidden', my: 2, borderRadius: '8px' }}>
        <Box component="img" src={item.img} alt={item.title}
          sx={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 90, transition: 'transform 0.5s ease', transform: hovered ? 'scale(1.08)' : 'scale(1)' }}
        />
      </Box>

      {/* Content */}
      <Box sx={{ py: 2, pr: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1 }}>
        <Stack direction="row" alignItems="center" gap={0.6} sx={{ mb: 1 }}>
          <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: tag.bg, animation: 'np_pulse 2.5s ease infinite' }} />
          <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: '0.68rem', fontWeight: typography.fontWeight.bold, color: tag.bg, letterSpacing: 1, textTransform: 'uppercase' }}>
            {item.tag}
          </Typography>
        </Stack>
        <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.semiBold, color: hovered ? colors.primary.main : colors.text.primary, lineHeight: 1.4, mb: 1, transition: 'color 0.3s ease' }}>
          {item.title}
        </Typography>
        <Stack direction="row" alignItems="center" gap={0.6}>
          <CalendarTodayIcon sx={{ fontSize: 10, color: colors.text.muted ?? colors.text.secondary }} />
          <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: '0.7rem', color: colors.text.muted ?? colors.text.secondary }}>{item.date}</Typography>
        </Stack>
      </Box>
    </Box>
  );
};

/* ── Main ── */
const NewsPreview = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();

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

      {/* ── Section bg: off-white so it breathes between dark sections ── */}
      <Box ref={ref} sx={{ position: 'relative', bgcolor: colors.background.default, py: { xs: 8, md: 12 }, overflow: 'hidden' }}>

        {/* subtle dot grid */}
        <Box sx={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          backgroundImage: `radial-gradient(${colors.primary.main}14 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }} />

        {/* faded watermark */}
        <Typography sx={{
          position: 'absolute', top: '50%', left: '-2%',
          transform: 'translateY(-50%)',
          fontFamily: typography.fontFamily.main,
          fontSize: { xs: '8rem', md: '14rem' },
          fontWeight: typography.fontWeight.extraBold,
          color: colors.primary.main, opacity: 0.04,
          lineHeight: 1, userSelect: 'none', pointerEvents: 'none', zIndex: 0,
        }}>
          NEWS
        </Typography>

        {/* top gold shimmer line */}
        <Box sx={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 3,
          background: `linear-gradient(90deg, transparent, ${colors.secondary.main}88, ${colors.secondary.light}, ${colors.secondary.main}88, transparent)`,
          animation: 'np_shimmer 3s linear infinite',
          backgroundSize: '400px 100%',
        }} />

        <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 1400, mx: 'auto', px: { xs: 3, md: 6 } }}>

          {/* Section Header */}
          <Box sx={{
            display: 'flex', alignItems: { xs: 'flex-start', sm: 'center' },
            justifyContent: 'space-between', flexDirection: { xs: 'column', sm: 'row' },
            gap: 2, mb: { xs: 5, md: 7 },
            animation: visible ? 'np_headerIn 0.7s ease both' : 'none',
          }}>
            <Box>
              <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 1.5 }}>
                <Box sx={{ width: 36, height: 2, bgcolor: colors.secondary.main }} />
                <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.dark, letterSpacing: 3, textTransform: 'uppercase' }}>
                  Latest News
                </Typography>
              </Stack>
              <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: { xs: typography.fontSize['2xl'], md: '2.6rem' }, fontWeight: typography.fontWeight.bold, color: colors.primary.dark, lineHeight: 1.2 }}>
                Stories from the{' '}
                <Box component="span" sx={{ color: colors.secondary.dark }}>Pamsset</Box>{' '}
                Community
              </Typography>
            </Box>

            <Button endIcon={<ArrowForwardIcon />} onClick={() => navigate('/news')}
              sx={{
                fontFamily: typography.fontFamily.main, fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.semiBold,
                color: colors.primary.main,
                border: `1.5px solid ${colors.primary.main}55`,
                px: 2.5, py: 1, borderRadius: '8px', textTransform: 'none',
                whiteSpace: 'nowrap', flexShrink: 0,
                transition: 'all 0.25s ease',
                '&:hover': {
                  bgcolor: colors.primary.main, color: 'white',
                  borderColor: colors.primary.main,
                  boxShadow: `0 6px 20px ${colors.primary.main}33`,
                },
                '& .MuiButton-endIcon': { transition: 'transform 0.2s' },
                '&:hover .MuiButton-endIcon': { transform: 'translateX(4px)' },
              }}
            >
              View All News
            </Button>
          </Box>

          {/* Cards grid */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3, alignItems: 'stretch' }}>

            {/* Featured card */}
            <FeaturedCard item={news[0]} visible={visible} />

            {/* Small cards + CTA */}
            <Stack gap={3} justifyContent="space-between">
              {news.slice(1).map((item, i) => (
                <SmallCard key={item.title} item={item} index={i} visible={visible} />
              ))}

              {/* Bottom CTA strip */}
              <Box onClick={() => navigate('/news')} sx={{
                borderRadius: '14px',
                bgcolor: colors.primary.main,
                border: `1px solid ${colors.primary.light}44`,
                p: 3, display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', gap: 2, flexWrap: 'wrap',
                animation: visible ? 'np_fadeUp 0.7s ease 0.5s both' : 'none',
                transition: 'all 0.3s ease', cursor: 'pointer',
                '&:hover': {
                  bgcolor: colors.secondary.main,
                  '& .cta-text': { color: colors.primary.dark },
                  '& .cta-sub': { color: `${colors.primary.dark}88` },
                  '& .cta-arrow': { bgcolor: colors.primary.dark, color: colors.secondary.main },
                },
              }}>
                <Box>
                  <Typography className="cta-text" sx={{ fontFamily: typography.fontFamily.main, fontSize: typography.fontSize.md, fontWeight: typography.fontWeight.bold, color: 'white', mb: 0.4, transition: 'color 0.3s ease' }}>
                    Never miss a story
                  </Typography>
                  <Typography className="cta-sub" sx={{ fontFamily: typography.fontFamily.main, fontSize: typography.fontSize.xs, color: 'rgba(255,255,255,0.6)', transition: 'color 0.3s ease' }}>
                    Click to see all our latest news &amp; events
                  </Typography>
                </Box>
                <Box className="cta-arrow" sx={{
                  width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                  bgcolor: `${colors.secondary.main}22`,
                  border: `1px solid ${colors.secondary.main}55`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.3s ease',
                }}>
                  <ArrowForwardIcon sx={{ fontSize: 16, color: colors.secondary.main }} />
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NewsPreview;