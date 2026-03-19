import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PeopleIcon from '@mui/icons-material/People';
import HotelIcon from '@mui/icons-material/Hotel';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { colors, typography } from '../../theme';
import {
    keyframes, heroWrapSx, shimmerLineSx, decoRingWrapSx, ring1Sx, ring2Sx,
    ringDotSx, glowBlobSx, watermarkSx, labelBarSx, labelTextSx,
    heroTitleSx, heroSubSx, contentSx, sectionLabelSx, sectionHeadSx,
    hlCardSx, hlIconBoxSx, hlTitleSx, hlDescSx,
    featureCardSx, featureIconSx, featureTitleSx, featureDescSx,
    statsStripSx, statValueSx, statLabelSx,
} from './styles';

const highlights = [
    { icon: PeopleIcon, color: colors.primary.main, title: 'Student Life', desc: 'A vibrant community where every student belongs, grows and thrives together.', path: '/campus-life/student-life' },
    { icon: HotelIcon, color: colors.secondary.dark, title: 'Boarding', desc: 'Safe, comfortable boarding facilities that feel like a home away from home.', path: '/campus-life/boarding' },
    { icon: HealthAndSafetyIcon, color: '#2E7D32', title: 'Health & Safety', desc: "Your child's wellbeing is our first priority — every hour of every day.", path: '/campus-life/health' },
];

const features = [
    { icon: SportsSoccerIcon, color: colors.primary.main, title: 'World-Class Sports', desc: 'Full-size football pitch, basketball courts, athletics track and a swimming pool.' },
    { icon: MenuBookIcon, color: colors.secondary.dark, title: 'Modern Library', desc: 'Over 12,000 volumes plus digital resources — open 7 days a week.' },
    { icon: EmojiEventsIcon, color: colors.primary.dark, title: 'Events & Competitions', desc: 'Inter-house sports, cultural day, science fairs, debate championships and more.' },
];

const stats = [
    { value: '15+', label: 'Clubs & Societies' },
    { value: '500', label: 'Boarding Students' },
    { value: '12k+', label: 'Library Volumes' },
    { value: '98%', label: 'Student Satisfaction' },
];

const CampusLifePage = () => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold: 0.05 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <>
            <style>{keyframes}</style>
            <Box ref={ref}>

                {/* ── Hero ── */}
                <Box sx={heroWrapSx}>
                    <Box sx={shimmerLineSx} />
                    <Box sx={decoRingWrapSx}>
                        <Box sx={ring1Sx}><Box sx={ringDotSx('white', '-5px', undefined)} /></Box>
                        <Box sx={ring2Sx}><Box sx={ringDotSx(colors.secondary.main, undefined, '-4px')} /></Box>
                    </Box>
                    <Box sx={glowBlobSx} />
                    <Typography sx={watermarkSx}>CAMPUS</Typography>

                    <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                        <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2, animation: visible ? 'cl_fadeUp .6s ease both' : 'none' }}>
                            <Box sx={labelBarSx} />
                            <Typography sx={labelTextSx}>Campus Life</Typography>
                        </Stack>
                        <Typography sx={{ ...heroTitleSx, animation: visible ? 'cl_fadeUp .6s ease .1s both' : 'none' }}>
                            Life at Pamsset Is<br />More Than Academics
                        </Typography>
                        <Typography sx={{ ...heroSubSx, animation: visible ? 'cl_fadeUp .6s ease .2s both' : 'none' }}>
                            At Pamsset School, Aliade, the experience inside the classroom is only half the story. We nurture confident, well-rounded individuals through sport, culture, community and care.
                        </Typography>
                    </Container>
                </Box>

                {/* ── Content ── */}
                <Box sx={contentSx}>
                    <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>

                        {/* Section header */}
                        <Box sx={{ textAlign: 'center', mb: 6, animation: visible ? 'cl_fadeUp .6s ease .1s both' : 'none' }}>
                            <Stack direction="row" alignItems="center" justifyContent="center" gap={2} sx={{ mb: 2 }}>
                                <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: .45, flex: '1 1 0', maxWidth: 80 }} />
                                <Typography sx={sectionLabelSx}>Explore</Typography>
                                <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: .45, flex: '1 1 0', maxWidth: 80 }} />
                            </Stack>
                            <Typography sx={sectionHeadSx}>Three Pillars of Campus Life</Typography>
                        </Box>

                        {/* 3 highlight cards */}
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 3, mb: { xs: 8, md: 12 } }}>
                            {highlights.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <Box key={item.title} onClick={() => navigate(item.path)} sx={hlCardSx(item.color, visible, i * .12 + .2)}>
                                        <Box sx={{ height: 4, bgcolor: item.color }} />
                                        <Box sx={{ p: { xs: 3, md: 4 } }}>
                                            <Box sx={hlIconBoxSx(item.color)}>
                                                <Icon sx={{ fontSize: 28, color: item.color }} />
                                            </Box>
                                            <Typography sx={hlTitleSx}>{item.title}</Typography>
                                            <Box sx={{ width: 32, height: 2, bgcolor: item.color, mb: 2, borderRadius: 2 }} />
                                            <Typography sx={hlDescSx}>{item.desc}</Typography>
                                            <Stack direction="row" alignItems="center" gap={0.8}>
                                                <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: item.color, letterSpacing: 1, textTransform: 'uppercase' }}>
                                                    Learn More
                                                </Typography>
                                                <ArrowForwardIcon className="cl-arrow" sx={{ fontSize: 14, color: item.color, transition: 'all .25s ease', opacity: .6 }} />
                                            </Stack>
                                        </Box>
                                    </Box>
                                );
                            })}
                        </Box>

                        {/* Facilities header */}
                        <Box sx={{ textAlign: 'center', mb: 5, animation: visible ? 'cl_fadeUp .6s ease .2s both' : 'none' }}>
                            <Stack direction="row" alignItems="center" justifyContent="center" gap={2} sx={{ mb: 2 }}>
                                <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: .45, flex: '1 1 0', maxWidth: 80 }} />
                                <Typography sx={sectionLabelSx}>Facilities</Typography>
                                <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: .45, flex: '1 1 0', maxWidth: 80 }} />
                            </Stack>
                            <Typography sx={sectionHeadSx}>Built for a Full School Experience</Typography>
                        </Box>

                        {/* Feature cards */}
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 3, mb: { xs: 8, md: 12 } }}>
                            {features.map((f, i) => {
                                const Icon = f.icon;
                                return (
                                    <Stack key={f.title} direction="row" gap={2.5} sx={featureCardSx(f.color, visible, i * .1 + .3)}>
                                        <Box sx={featureIconSx(f.color)}>
                                            <Icon sx={{ fontSize: 22, color: f.color }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={featureTitleSx}>{f.title}</Typography>
                                            <Typography sx={featureDescSx}>{f.desc}</Typography>
                                        </Box>
                                    </Stack>
                                );
                            })}
                        </Box>

                        {/* Stats strip */}
                        {/* <Box sx={statsStripSx}>
                            <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,transparent,${colors.secondary.main},${colors.secondary.light},${colors.secondary.main},transparent)`, backgroundSize: '400px 100%', animation: 'cl_shimmer 3s linear infinite' }} />
                            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(4,1fr)' }, gap: { xs: 4, md: 0 }, position: 'relative', zIndex: 1, textAlign: 'center' }}>
                                {stats.map((s, i) => (
                                    <Box key={s.label} sx={{ borderRight: { sm: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }, px: { sm: 3 }, animation: visible ? `cl_fadeUp .6s ease ${i * .1 + .2}s both` : 'none' }}>
                                        <Typography sx={statValueSx}>{s.value}</Typography>
                                        <Typography sx={statLabelSx}>{s.label}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box> */}

                    </Container>
                </Box>
            </Box>
        </>
    );
};

export default CampusLifePage;