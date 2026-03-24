import { useState, useEffect } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import SchoolIcon        from '@mui/icons-material/School';
import PeopleIcon        from '@mui/icons-material/People';
import EmojiEventsIcon   from '@mui/icons-material/EmojiEvents';
import MenuBookIcon      from '@mui/icons-material/MenuBook';
import PublicIcon        from '@mui/icons-material/Public';
import { colors, typography } from '../../../theme';
import {
  keyframes, heroWrapSx, topAccentSx, glowBlobSx, glowBlob2Sx, watermarkSx,
  labelBarSx, labelTextSx, headLine1Sx, headLine2Sx,
  underlineSx, subtitleSx, mottoSx, mottoTextSx,
  rightWrapSx, orbitRingSx, logoBoxSx, statBadgeSx,
} from './styles';

const StatBadge = ({ icon: Icon, value, label, color, top, left, right, bottom, delay }) => (
  <Box sx={statBadgeSx(top, left, right, bottom, delay)}>
    <Box sx={{
      bgcolor: colors.background.paper,
      borderRadius: '16px',
      px: 2, py: 1.5,
      boxShadow: `0 12px 36px rgba(13,58,122,0.25), 0 0 0 1.5px ${color}33`,
      display: 'flex', alignItems: 'center', gap: 1.3,
      minWidth: 120,
      backdropFilter: 'blur(8px)',
    }}>
      <Box sx={{ width: 36, height: 36, borderRadius: '10px', bgcolor: `${color}18`, border: `1.5px solid ${color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Icon sx={{ fontSize: 18, color }} />
      </Box>
      <Box>
        <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: typography.fontSize.lg, fontWeight: typography.fontWeight.extraBold, color: colors.primary.dark, lineHeight: 1 }}>
          {value}
        </Typography>
        <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: '0.62rem', fontWeight: typography.fontWeight.bold, color: colors.text.secondary, letterSpacing: 1, textTransform: 'uppercase' }}>
          {label}
        </Typography>
      </Box>
    </Box>
  </Box>
);

const AboutHero = ({ activeTab, onTabChange }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <>
      <style>{keyframes}</style>

      <Box sx={heroWrapSx}>
        <Box sx={topAccentSx} />
        <Box sx={glowBlobSx} />
        <Box sx={glowBlob2Sx} />
        <Typography sx={watermarkSx}>ABOUT</Typography>

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.1fr 1fr' }, gap: { xs: 6, md: 4 }, alignItems: 'center' }}>

            <Box>
              <Stack direction="row" alignItems="center" gap={1} sx={{ mb: 3, animation: visible ? 'ab_heroIn .6s ease .1s both' : 'none' }}>
                <Box component={Link} to="/" sx={{ fontFamily: 'inherit', fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', '&:hover': { color: colors.secondary.light } }}>Home</Box>
                <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: colors.secondary.main }} />
                <Typography sx={{ fontFamily: 'inherit', fontSize: '0.72rem', color: colors.secondary.main, fontWeight: 600 }}>About Us</Typography>
              </Stack>

              <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2, animation: visible ? 'ab_heroIn .6s ease .2s both' : 'none' }}>
                <Box sx={labelBarSx} />
                <Typography sx={labelTextSx}>Who We Are</Typography>
              </Stack>

              <Typography sx={{ ...headLine1Sx, animation: visible ? 'ab_heroIn .6s ease .3s both' : 'none' }}>
                The Story Behind
              </Typography>
              <Box sx={{ position: 'relative', display: 'inline-block', mb: 3, animation: visible ? 'ab_heroIn .6s ease .35s both' : 'none' }}>
                <Typography sx={headLine2Sx}>Pamsset School.</Typography>
                <Box sx={{ ...underlineSx, animation: visible ? 'ab_lineGrow .9s ease .7s both' : 'none', width: visible ? '100%' : 0 }} />
              </Box>

              <Box sx={{ display: 'block', mb: 2, animation: visible ? 'ab_heroIn .6s ease .38s both' : 'none' }}>
                <Box sx={mottoSx}>
                  <Typography sx={mottoTextSx}>Faith · Zeal · Aliade</Typography>
                </Box>
              </Box>

              <Typography sx={{ ...subtitleSx, animation: visible ? 'ab_heroIn .6s ease .45s both' : 'none' }}>
                For over 25 years, Pamsset School has stood as a beacon of academic excellence and character development in Benue State, Nigeria. Explore our story, values, people and world-class facilities.
              </Typography>

              <Stack direction="row" gap={4} sx={{ animation: visible ? 'ab_heroIn .6s ease .55s both' : 'none' }}>
                {[
                  { value: '25+', label: 'Years', color: colors.secondary.main    },
                  { value: '98%', label: 'Pass Rate', color: colors.secondary.light },
                  { value: '1000+',label: 'Graduates', color: 'rgba(255,255,255,0.7)' },
                ].map(s => (
                  <Box key={s.label}>
                    <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: typography.fontSize['2xl'], fontWeight: typography.fontWeight.extraBold, color: s.color, lineHeight: 1 }}>
                      {s.value}
                    </Typography>
                    <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: typography.fontSize.xs, color: 'rgba(255,255,255,0.4)', letterSpacing: 1, textTransform: 'uppercase', mt: .4 }}>
                      {s.label}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>

            <Box sx={rightWrapSx}>
              <Box sx={{ position: 'relative', width: 420, height: 380 }}>
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 320, height: 320, borderRadius: '50%', border: `1px dashed rgba(255,255,255,0.1)`, animation: 'ab_spin 30s linear infinite', pointerEvents: 'none' }} />
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 220, height: 220, borderRadius: '50%', border: `1px dashed ${colors.secondary.main}22`, animation: 'ab_spinR 20s linear infinite', pointerEvents: 'none' }} />

                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 180, height: 180, borderRadius: '50%', bgcolor: colors.secondary.main, opacity: .12, filter: 'blur(30px)', animation: 'ab_pulse 4s ease infinite', pointerEvents: 'none' }} />

                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', ...logoBoxSx }}>
                  <Box component="img" src="/logo1.png" alt="Pamsset School" sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </Box>

                <StatBadge icon={EmojiEventsIcon} value="25+" label="Years"     color={colors.secondary.main}  top="2%"   left="0"      delay={.6} />
                <StatBadge icon={PeopleIcon}       value="1k+" label="Graduates" color={colors.primary.light}  top="2%"   right="0"     delay={.75} />
                <StatBadge icon={MenuBookIcon}     value="98%" label="Pass Rate"  color={colors.secondary.dark} bottom="2%" left="0"     delay={.9} />
                <StatBadge icon={PublicIcon}       value="JSS–SS" label="All Levels" color={colors.primary.main} bottom="2%" right="0" delay={1.05} />
              </Box>
            </Box>

          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AboutHero;