import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { colors, typography } from '../../../theme';

const slides = [
  {
    src: '/hero1.jpg',
    tag: 'Welcome to Pamsset School',
    heading: 'Shaping Leaders\nof Tomorrow',
    sub: 'A world-class secondary school committed to academic excellence, character, and purpose.',
  },
  // {
  //   src: '/hero2.jpg',
  //   tag: 'Academic Excellence',
  //   heading: 'Where Knowledge\nMeets Ambition',
  //   sub: 'Our curriculum nurtures critical thinking, creativity, and a passion for lifelong learning.',
  // },
  {
    src: '/life.png',
    tag: 'Beyond the Classroom',
    heading: 'Grow Beyond\nEvery Boundary',
    sub: 'Sports, arts, clubs and culture — we build well-rounded students ready for the world.',
  },
  {
    src: '/hero4.jpg',
    tag: 'Our Community',
    heading: 'Together We\nBuild Greatness',
    sub: 'A thriving community of students, teachers and families united by one vision — excellence.',
  },
];

const keyframes = `
  @keyframes kenBurns {
    0%   { transform: scale(1)    translateX(0px); }
    50%  { transform: scale(1.08) translateX(-12px); }
    100% { transform: scale(1)    translateX(0px); }
  }
  @keyframes slideUpFade {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes expandWidth {
    from { width: 0; }
    to   { width: 60px; }
  }
  @keyframes pulse {
    0%, 100% { opacity: 0.6; transform: scaleX(1); }
    50%       { opacity: 1;   transform: scaleX(1.15); }
  }
`;

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  const goTo = (index) => {
    if (index === current) return;
    setCurrent(index);
    setAnimKey((k) => k + 1);
    clearInterval(timerRef.current);
    startTimer();
  };

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
      setAnimKey((k) => k + 1);
    }, 8000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <>
      <style>{keyframes}</style>

      <Box sx={{ position: 'relative', height: '100vh', minHeight: 640, overflow: 'hidden' }}>

        {slides.map((slide, i) => (
          <Box key={i} sx={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${slide.src})`,
            backgroundSize: 'cover', backgroundPosition: 'center top',
            opacity: i === current ? 1 : 0,
            transition: 'opacity 1.1s ease',
            zIndex: i === current ? 1 : 0,
            animation: i === current ? 'kenBurns 14s ease-in-out infinite' : 'none',
          }} />
        ))}

        <Box sx={{
          position: 'absolute', inset: 0, zIndex: 2,
          background: `linear-gradient(
            115deg,
            ${colors.primary.dark}D6 0%,
            ${colors.primary.main}AA 35%,
            ${colors.neutral?.umbra ?? '#2C3E50'}66 65%,
            ${colors.background.default}22 100%
          )`,
        }} />
        <Box sx={{
          position: 'absolute', left: { md: 60 }, top: '18%', bottom: '18%',
          width: '1px', zIndex: 3, display: { xs: 'none', md: 'block' },
          background: `linear-gradient(180deg, transparent, ${colors.secondary.main}99, transparent)`,
        }} />
        <Typography sx={{
          position: 'absolute', right: { xs: '-10%', md: '2%' }, bottom: '-5%',
          fontFamily: typography.fontFamily.main,
          fontSize: { xs: '18rem', md: '24rem' },
          fontWeight: typography.fontWeight.extraBold,
          color: colors.background.default, opacity: 0.05,
          lineHeight: 1, userSelect: 'none', zIndex: 2, pointerEvents: 'none',
        }}>
          P
        </Typography>

        <Box sx={{
          position: 'absolute', inset: 0, zIndex: 4,
          display: 'flex', alignItems: 'center',
          pl: { xs: 3, sm: 6, md: 10, lg: 14 },
          pr: { xs: 3, md: 0 },
        }}>
          <Box sx={{ maxWidth: { xs: '100%', md: 580 } }}>
            <Box key={`tag-${animKey}`} sx={{
              display: 'inline-flex', alignItems: 'center', gap: 1,
              mb: 3, px: 2, py: 0.7,
              bgcolor: `${colors.background.default}18`,
              border: `1px solid ${colors.secondary.main}66`,
              borderLeft: `3px solid ${colors.secondary.main}`,
              borderRadius: '0 6px 6px 0',
              backdropFilter: 'blur(8px)',
              animation: 'fadeIn 0.6s ease 0.1s both',
            }}>
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: colors.secondary.main, animation: 'pulse 2s ease infinite' }} />
              <Typography sx={{
                fontFamily: typography.fontFamily.main,
                fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.semiBold,
                color: colors.secondary.light, letterSpacing: 2.5, textTransform: 'uppercase',
              }}>
                {slides[current].tag}
              </Typography>
            </Box>

            <Typography key={`heading-${animKey}`} sx={{
              fontFamily: typography.fontFamily.main,
              fontSize: { xs: typography.fontSize['3xl'], md: '3.2rem', lg: '3.8rem' },
              fontWeight: typography.fontWeight.extraBold,
              color: colors.text.light,
              lineHeight: 1.14, mb: 1,
              whiteSpace: 'pre-line',
              textShadow: '0 2px 20px rgba(0,0,0,0.3)',
              animation: 'slideUpFade 0.7s ease 0.2s both',
            }}>
              {slides[current].heading}
            </Typography>
            <Box key={`line-${animKey}`} sx={{
              height: 3, bgcolor: colors.secondary.main,
              mb: 3, borderRadius: 2,
              animation: 'expandWidth 0.6s ease 0.5s both',
            }} />

            <Typography key={`sub-${animKey}`} sx={{
              fontFamily: typography.fontFamily.main,
              fontSize: { xs: typography.fontSize.base, md: typography.fontSize.md },
              fontWeight: typography.fontWeight.regular,
              color: `${colors.background.default}CC`,
              lineHeight: 1.9, mb: 4.5, maxWidth: 460,
              animation: 'slideUpFade 0.7s ease 0.4s both',
            }}>
              {slides[current].sub}
            </Typography>

            <Stack key={`cta-${animKey}`}
              direction={{ xs: 'column', sm: 'row' }} gap={2}
              sx={{ animation: 'slideUpFade 0.7s ease 0.55s both' }}
            >
              <Button variant="contained"
                onClick={() => navigate('/admissions')}
                sx={{
                  fontFamily: typography.fontFamily.main,
                  fontSize: typography.fontSize.sm,
                  fontWeight: typography.fontWeight.semiBold,
                  bgcolor: colors.secondary.main,
                  color: colors.primary.dark,
                  px: 3.5, py: 1.5, borderRadius: '6px',
                  textTransform: 'none',
                  boxShadow: `0 6px 24px ${colors.secondary.main}50`,
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    bgcolor: colors.secondary.light,
                    transform: 'translateY(-3px)',
                    boxShadow: `0 10px 32px ${colors.secondary.main}66`,
                  },
                }}
              >
                Apply for Admission
              </Button>

              <Button variant="outlined"
                onClick={() => navigate('/about/history')}
                sx={{
                  fontFamily: typography.fontFamily.main,
                  fontSize: typography.fontSize.sm,
                  fontWeight: typography.fontWeight.semiBold,
                  borderColor: `${colors.background.default}55`,
                  color: colors.background.default,
                  bgcolor: `${colors.background.default}12`,
                  backdropFilter: 'blur(8px)',
                  px: 3.5, py: 1.5, borderRadius: '6px',
                  textTransform: 'none',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    borderColor: colors.secondary.main,
                    color: colors.secondary.light,
                    bgcolor: `${colors.secondary.main}14`,
                    transform: 'translateY(-3px)',
                    boxShadow: 'none',
                  },
                }}
              >
                Explore the School
              </Button>
            </Stack>
          </Box>
        </Box>

        <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, bgcolor: `${colors.background.default}18`, zIndex: 5 }}>
          <Box key={`progress-${animKey}`} sx={{
            height: '100%', bgcolor: colors.secondary.main,
            animation: 'expandWidth 8s linear both', width: '100%',
          }} />
        </Box>

        <Stack direction="row" gap={1.2} alignItems="center" sx={{
          position: 'absolute',
          bottom: 28,
          left: { xs: '50%', md: 'auto' },
          right: { xs: 'auto', md: 52 },
          transform: { xs: 'translateX(-50%)', md: 'none' },
          zIndex: 5,
        }}>
          {slides.map((_, i) => (
            <Box key={i} onClick={() => goTo(i)} sx={{
              width: i === current ? 32 : 8, height: 8,
              borderRadius: '4px',
              bgcolor: i === current ? colors.secondary.main : `${colors.background.default}44`,
              cursor: 'pointer',
              transition: 'all 0.35s ease',
              '&:hover': { bgcolor: colors.secondary.light },
            }} />
          ))}
        </Stack>

        <Box sx={{ position: 'absolute', bottom: 26, left: { xs: 20, md: 80 }, zIndex: 5 }}>
          <Typography sx={{
            fontFamily: typography.fontFamily.main,
            fontSize: typography.fontSize.xs,
            color: `${colors.background.default}55`,
            letterSpacing: 3,
          }}>
            {String(current + 1).padStart(2, '0')}
            <Box component="span" sx={{ color: colors.secondary.main, mx: 0.5 }}>—</Box>
            {String(slides.length).padStart(2, '0')}
          </Typography>
        </Box>

      </Box>
    </>
  );
};

export default HeroSection;