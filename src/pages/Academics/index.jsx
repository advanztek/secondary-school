import { useEffect, useState } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScienceIcon from '@mui/icons-material/Science';
import { colors, typography } from '../../theme';
import {
    keyframes, heroWrapSx, shimmerLineSx, decoRingWrapSx,
    ring1Sx, ring2Sx, ringDotSx, glowBlobSx, watermarkSx,
    crumbHomeSx, crumbActiveSx, labelBarSx, labelTextSx,
    head1Sx, head2Sx, underlineSx, subtitleSx,
    statValueSx, statLabelSx, heroImgSx, heroImgFrameSx,
    sectionWrapSx, sectionHeadSx, sectionSubSx, cardsWrapSx,
} from './styles';

const cards = [
    { id: 'curriculum', icon: MenuBookIcon, number: '01', title: 'Curriculum Overview', desc: 'A rigorous blend of Nigerian and Cambridge frameworks designed to produce globally competitive graduates.', img: '/academics-curriculum.jpg', tag: 'Foundation', color: colors.primary.main, path: '/academics/curriculum', stat: { value: 'Cambridge', label: 'Accredited' } },
    { id: 'junior', icon: SchoolIcon, number: '02', title: 'Junior Secondary', desc: 'JSS1 – JSS3: Building a strong foundation across core subjects with nurturing, experienced teachers.', img: '/academics-junior.jpg', tag: 'JSS 1–3', color: colors.secondary.dark, path: '/academics/junior', stat: { value: '12', label: 'Core Subjects' } },
    { id: 'senior', icon: AutoStoriesIcon, number: '03', title: 'Senior Secondary', desc: 'SS1 – SS3: Deep specialisation in Sciences, Arts and Commercials preparing students for WAEC and beyond.', img: '/academics-senior.jpg', tag: 'SS 1–3', color: colors.primary.dark, path: '/academics/senior', stat: { value: '98%', label: 'WAEC Pass Rate' } },
    { id: 'subjects', icon: ScienceIcon, number: '04', title: 'Subject List', desc: 'Explore the full range of subjects offered across all arms — Sciences, Arts, and Commercial.', img: '/academics-subjects.jpg', tag: 'All Arms', color: colors.primary.light, path: '/academics/subjects', stat: { value: '30+', label: 'Subjects Offered' } },
    { id: 'calendar', icon: CalendarMonthIcon, number: '05', title: 'Academic Calendar', desc: 'Stay up to date with term dates, exam timetables, holidays and key school events all year round.', img: '/academics-calendar.jpg', tag: '2025/2026', color: '#2E7D32', path: '/academics/calendar', stat: { value: '3', label: 'Terms Per Year' } },
];

const AcademicCard = ({ card, index, visible }) => {
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();
    const Icon = card.icon;

    return (
        <Box onClick={() => navigate(card.path)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{
                position: 'relative', borderRadius: '20px', overflow: 'hidden', cursor: 'pointer',
                height: { xs: 320, md: index === 0 ? 440 : 360 },
                animation: visible ? `ac_cardIn 0.7s ease ${index * 0.1 + 0.2}s both` : 'none',
                transform: hovered ? 'translateY(-10px)' : 'none',
                boxShadow: hovered ? `0 28px 70px rgba(0,0,0,0.28), 0 0 0 2px ${card.color}55` : '0 8px 30px rgba(0,0,0,0.14)',
                transition: 'transform .35s ease, box-shadow .35s ease',
            }}>
            <Box component="img" src={card.img} alt={card.title}
                sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .6s ease', transform: hovered ? 'scale(1.07)' : 'scale(1)' }} />
            <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(160deg,${card.color}BB 0%,${card.color}77 30%,rgba(10,20,50,0.6) 60%,rgba(10,20,50,0.95) 100%)`, opacity: hovered ? .92 : .85, transition: 'opacity .35s ease' }} />

            {/* top: number + tag */}
            <Box sx={{ position: 'absolute', top: 20, left: 20, right: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: '3.5rem', fontWeight: typography.fontWeight.extraBold, color: 'rgba(255,255,255,0.1)', lineHeight: 1, userSelect: 'none' }}>
                    {card.number}
                </Typography>
                <Box sx={{ bgcolor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)', px: 1.5, py: .5, borderRadius: '6px' }}>
                    <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: '0.62rem', fontWeight: typography.fontWeight.bold, color: 'white', letterSpacing: 1.5, textTransform: 'uppercase' }}>
                        {card.tag}
                    </Typography>
                </Box>
            </Box>

            {/* bottom: content */}
            <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: 3 }}>
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, bgcolor: card.color, px: 1.5, py: .5, borderRadius: '6px', mb: 1.5, transform: hovered ? 'translateY(0)' : 'translateY(6px)', opacity: hovered ? 1 : .8, transition: 'all .3s ease' }}>
                    <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.bold, color: 'white' }}>{card.stat.value}</Typography>
                    <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: '0.62rem', color: 'rgba(255,255,255,0.8)', letterSpacing: 1 }}>{card.stat.label}</Typography>
                </Box>
                <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 1 }}>
                    <Box sx={{ width: 36, height: 36, borderRadius: '10px', bgcolor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all .3s ease', transform: hovered ? 'rotate(8deg)' : 'none' }}>
                        <Icon sx={{ fontSize: 19, color: 'white' }} />
                    </Box>
                    <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: typography.fontSize.lg, fontWeight: typography.fontWeight.bold, color: 'white', lineHeight: 1.2 }}>
                        {card.title}
                    </Typography>
                </Stack>
                <Box sx={{ height: 2, bgcolor: colors.secondary.main, borderRadius: 1, mb: 1.5, width: hovered ? '60px' : '30px', transition: 'width .3s ease' }} />
                <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: typography.fontSize.sm, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, mb: 2, maxHeight: hovered ? '80px' : 0, overflow: 'hidden', opacity: hovered ? 1 : 0, transition: 'all .35s ease' }}>
                    {card.desc}
                </Typography>
                <Stack direction="row" alignItems="center" gap={1} sx={{ transform: hovered ? 'translateX(4px)' : 'none', transition: 'transform .3s ease' }}>
                    <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.light, letterSpacing: 1.5, textTransform: 'uppercase' }}>Explore</Typography>
                    <ArrowForwardIcon sx={{ fontSize: 14, color: colors.secondary.light }} />
                </Stack>
            </Box>
        </Box>
    );
};

const AcademicsPage = () => {
    const [visible, setVisible] = useState(false);
    useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

    return (
        <>
            <style>{keyframes}</style>

            <Box sx={heroWrapSx}>
                <Box sx={shimmerLineSx} />

                <Box sx={decoRingWrapSx}>
                    <Box sx={ring1Sx}><Box sx={ringDotSx('white', '-5px', undefined)} /></Box>
                    <Box sx={ring2Sx}><Box sx={ringDotSx(colors.secondary.main, undefined, '-4px')} /></Box>
                </Box>

                <Box sx={glowBlobSx} />
                <Typography sx={watermarkSx}>ACADEMICS</Typography>

                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>

                    <Stack direction="row" alignItems="center" gap={1} sx={{ mb: 3, animation: visible ? 'ac_heroIn .6s ease .1s both' : 'none' }}>
                        <Box component={Link} to="/" sx={crumbHomeSx}>Home</Box>
                        <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: colors.secondary.main }} />
                        <Typography sx={crumbActiveSx}>Academics</Typography>
                    </Stack>

                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6, alignItems: 'center' }}>

                        <Box>
                            <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2.5, animation: visible ? 'ac_heroIn .6s ease .2s both' : 'none' }}>
                                <Box sx={labelBarSx} />
                                <Typography sx={labelTextSx}>Academic Excellence</Typography>
                            </Stack>

                            <Typography sx={{ ...head1Sx, animation: visible ? 'ac_heroIn .6s ease .3s both' : 'none' }}>
                                Learning That
                            </Typography>
                            <Box sx={{ position: 'relative', display: 'inline-block', mb: 3, animation: visible ? 'ac_heroIn .6s ease .35s both' : 'none' }}>
                                <Typography sx={head2Sx}>Goes Beyond.</Typography>
                                <Box sx={{ ...underlineSx, animation: visible ? 'ac_lineGrow .9s ease .7s both' : 'none', width: visible ? '100%' : 0 }} />
                            </Box>

                            <Typography sx={{ ...subtitleSx, animation: visible ? 'ac_heroIn .6s ease .45s both' : 'none' }}>
                                Our academic programme is built to challenge, inspire and equip every student with the knowledge and skills to thrive — in Nigeria and across the world.
                            </Typography>

                            <Stack direction="row" gap={4} sx={{ animation: visible ? 'ac_heroIn .6s ease .55s both' : 'none' }}>
                                {[{ value: '98%', label: 'WAEC Pass Rate' }, { value: '30+', label: 'Subjects' }, { value: '3', label: 'Academic Arms' }].map(s => (
                                    <Box key={s.label}>
                                        <Typography sx={statValueSx}>{s.value}</Typography>
                                        <Typography sx={statLabelSx}>{s.label}</Typography>
                                    </Box>
                                ))}
                            </Stack>
                        </Box>

                        <Box sx={{ position: 'relative', display: { xs: 'none', md: 'block' }, animation: visible ? 'ac_heroIn .8s ease .3s both' : 'none' }}>
                            <Box component="img" src="/academics11.png" alt="Academics at Pamsset" sx={heroImgSx} />
                            <Box sx={heroImgFrameSx} />
                        </Box>

                    </Box>
                </Container>
            </Box>
            <Box sx={sectionWrapSx}>
                <Container maxWidth="xl">
                    <Box sx={{ textAlign: 'center', animation: visible ? 'ac_heroIn .7s ease .6s both' : 'none' }}>
                        <Stack direction="row" alignItems="center" justifyContent="center" gap={2} sx={{ mb: 2 }}>
                            <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: .45, flex: 1, maxWidth: 60 }} />
                            <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.dark, letterSpacing: 3, textTransform: 'uppercase' }}>
                                Explore Academics
                            </Typography>
                            <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: .45, flex: 1, maxWidth: 60 }} />
                        </Stack>
                        <Typography sx={sectionHeadSx}>Choose What You Want to Explore</Typography>
                        <Typography sx={sectionSubSx}>Click any card to dive deeper into that area of our academic programme.</Typography>
                    </Box>
                </Container>
            </Box>
            <Box sx={cardsWrapSx}>
                <Container maxWidth="xl">
                    <Box sx={{
                        display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 3,
                        '& > :first-of-type': { gridColumn: { xs: '1', sm: '1 / span 2', md: '1 / span 2' } }
                    }}>
                        {cards.map((card, i) => (
                            <AcademicCard key={card.id} card={card} index={i} visible={visible} />
                        ))}
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default AcademicsPage;