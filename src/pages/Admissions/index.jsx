import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ChecklistIcon from '@mui/icons-material/Checklist';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { colors, typography } from '../../theme';
import {
    keyframes, heroWrapSx, shimmerLineSx, decoRingWrapSx, ring1Sx, ring2Sx,
    ringDotSx, glowBlobSx, watermarkSx, crumbHomeSx, crumbActiveSx,
    labelBarSx, labelTextSx, head1Sx, head2Sx, underlineSx, subtitleSx,
    statValueSx, statLabelSx, heroImgSx, heroImgFrameSx, deadlineBadgeSx,
    sectionWrapSx, sectionHeadSx, sectionSubSx, cardsWrapSx,
    cardWrapSx, cardOverlaySx, cardNumSx, cardTagSx, cardTagTextSx,
    cardStatBoxSx, cardTitleSx, cardDescSx, cardCtaTextSx,
} from './styles';

const getDaysLeft = () => {
    const diff = Math.ceil((new Date(2026, 6, 31) - new Date()) / 86400000);
    return diff > 0 ? diff : 0;
};

const cards = [
    { id: 'apply', icon: HowToRegIcon, number: '01', title: 'How to Apply', desc: 'A simple step-by-step guide to applying for a place at Pamsset School, Aliade.', img: '/image.jpg', tag: 'Get Started', color: colors.primary.main, path: '/admissions/apply', stat: { value: '4 Steps', label: 'Simple Process' }, highlight: false },
    { id: 'requirements', icon: ChecklistIcon, number: '02', title: 'Entry Requirements', desc: 'Find out exactly what documents and qualifications are needed to apply for each level.', img: '/admissions-requirement.jpg', tag: 'Requirements', color: colors.secondary.dark, path: '/admissions/requirements', stat: { value: 'JSS & SS', label: 'Entry Levels' }, highlight: false },
    { id: 'faqs', icon: HelpOutlineIcon, number: '03', title: 'FAQs', desc: 'Answers to the most common questions parents and students ask about joining Pamsset School.', img: '/admissions-faqs.jpg', tag: 'Questions?', color: colors.primary.dark, path: '/admissions/faqs', stat: { value: '20+', label: 'Questions Answered' }, highlight: false },
    { id: 'apply-now', icon: EditNoteIcon, number: '04', title: 'Apply Now', desc: "Ready to join the Pamsset family? Start your application for the 2026/2027 session today.", img: '/admissions-cta.jpg', tag: '2026/2027 Open', color: colors.secondary.main, path: '/admissions/apply', stat: { value: 'July 31', label: 'Deadline' }, highlight: true },
];

/* ── Single card ── */
const AdmissionCard = ({ card, index, visible }) => {
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();
    const Icon = card.icon;

    return (
        <Box onClick={() => navigate(card.path)}
            onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
            sx={{
                ...cardWrapSx(hovered, card.color),
                height: { xs: 320, md: index === 3 ? 420 : 360 },
                animation: visible ? `ad_cardIn .7s ease ${index * .1 + .2}s both` : 'none',
            }}>

            {/* bg image */}
            <Box component="img" src={card.img} alt={card.title}
                sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .6s ease', transform: hovered ? 'scale(1.07)' : 'scale(1)' }} />

            {/* calm overlay */}
            <Box sx={cardOverlaySx(card.color, hovered)} />

            {/* top: number + tag */}
            <Box sx={{ position: 'absolute', top: 20, left: 20, right: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={cardNumSx}>{card.number}</Typography>
                <Box sx={cardTagSx(card.highlight, card.color)}>
                    <Typography sx={cardTagTextSx(card.highlight)}>{card.tag}</Typography>
                </Box>
            </Box>

            {/* bottom: content */}
            <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: 3 }}>
                <Box sx={cardStatBoxSx(card.color, card.highlight, hovered)}>
                    <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.bold, color: card.highlight ? colors.primary.dark : 'white' }}>
                        {card.stat.value}
                    </Typography>
                    <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: '0.62rem', color: card.highlight ? `${colors.primary.dark}99` : 'rgba(255,255,255,0.75)', letterSpacing: 1 }}>
                        {card.stat.label}
                    </Typography>
                </Box>

                <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 1 }}>
                    <Box sx={{ width: 36, height: 36, borderRadius: '10px', bgcolor: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all .3s ease', transform: hovered ? 'rotate(8deg)' : 'none' }}>
                        <Icon sx={{ fontSize: 19, color: 'white' }} />
                    </Box>
                    <Typography sx={cardTitleSx}>{card.title}</Typography>
                </Stack>

                <Box sx={{ height: 2, bgcolor: card.highlight ? colors.primary.dark : colors.secondary.main, borderRadius: 1, mb: 1.5, width: hovered ? '60px' : '30px', transition: 'width .3s ease' }} />

                <Typography sx={{ ...cardDescSx, maxHeight: hovered ? '80px' : 0, overflow: 'hidden', opacity: hovered ? 1 : 0, transition: 'all .35s ease' }}>
                    {card.desc}
                </Typography>

                <Stack direction="row" alignItems="center" gap={1}
                    sx={{ transform: hovered ? 'translateX(4px)' : 'none', transition: 'transform .3s ease' }}>
                    <Typography sx={cardCtaTextSx}>{card.highlight ? 'Start Application' : 'Learn More'}</Typography>
                    <ArrowForwardIcon sx={{ fontSize: 14, color: colors.secondary.light }} />
                </Stack>
            </Box>
        </Box>
    );
};

/* ── Main page ── */
const AdmissionsPage = () => {
    const [visible, setVisible] = useState(false);
    const [daysLeft] = useState(getDaysLeft());
    useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

    return (
        <>
            <style>{keyframes}</style>

            {/* ── Hero ── */}
            <Box sx={heroWrapSx}>
                <Box sx={shimmerLineSx} />

                <Box sx={decoRingWrapSx}>
                    <Box sx={ring1Sx}><Box sx={ringDotSx('white', '-5px', undefined)} /></Box>
                    <Box sx={ring2Sx}><Box sx={ringDotSx(colors.secondary.main, undefined, '-4px')} /></Box>
                </Box>
                <Box sx={glowBlobSx} />
                <Typography sx={watermarkSx}>ADMISSIONS</Typography>

                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>

                    {/* breadcrumb */}
                    <Stack direction="row" alignItems="center" gap={1} sx={{ mb: 3, animation: visible ? 'ad_heroIn .6s ease .1s both' : 'none' }}>
                        <Box component={Link} to="/" sx={crumbHomeSx}>Home</Box>
                        <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: colors.secondary.main }} />
                        <Typography sx={crumbActiveSx}>Admissions</Typography>
                    </Stack>

                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6, alignItems: 'center' }}>

                        {/* LEFT */}
                        <Box>
                            <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2.5, animation: visible ? 'ad_heroIn .6s ease .2s both' : 'none' }}>
                                <Box sx={labelBarSx} />
                                <Typography sx={labelTextSx}>Admissions 2026/2027</Typography>
                            </Stack>

                            <Typography sx={{ ...head1Sx, animation: visible ? 'ad_heroIn .6s ease .3s both' : 'none' }}>
                                Your Child's Future
                            </Typography>
                            <Box sx={{ position: 'relative', display: 'inline-block', mb: 3, animation: visible ? 'ad_heroIn .6s ease .35s both' : 'none' }}>
                                <Typography sx={head2Sx}>Starts Here.</Typography>
                                <Box sx={{ ...underlineSx, animation: visible ? 'ad_lineGrow .9s ease .7s both' : 'none', width: visible ? '100%' : 0 }} />
                            </Box>

                            <Typography sx={{ ...subtitleSx, animation: visible ? 'ad_heroIn .6s ease .45s both' : 'none' }}>
                                Applications are now open for the 2026/2027 academic session. Limited spaces available — secure your child's place at Pamsset School, Aliade today.
                            </Typography>

                            <Stack direction="row" gap={4} sx={{ animation: visible ? 'ad_heroIn .6s ease .55s both' : 'none' }}>
                                {[
                                    { value: 'Open', label: 'Applications' },
                                    { value: 'July 31', label: 'Deadline' },
                                    { value: 'JSS & SS', label: 'Entry Levels' },
                                ].map(s => (
                                    <Box key={s.label}>
                                        <Typography sx={statValueSx}>{s.value}</Typography>
                                        <Typography sx={statLabelSx}>{s.label}</Typography>
                                    </Box>
                                ))}
                            </Stack>
                        </Box>

                        {/* RIGHT — image */}
                        <Box sx={{ position: 'relative', display: { xs: 'none', md: 'block' }, animation: visible ? 'ad_heroIn .8s ease .3s both' : 'none' }}>
                            <Box component="img" src="/admissions-hero.jpg" alt="Admissions at Pamsset" sx={heroImgSx} />
                            <Box sx={heroImgFrameSx} />

                            {/* countdown badge */}
                            <Box sx={deadlineBadgeSx}>
                                <Stack direction="row" alignItems="center" gap={1.2}>
                                    <AccessTimeIcon sx={{ color: colors.primary.dark, fontSize: 20 }} />
                                    <Box>
                                        <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.extraBold, color: colors.primary.dark, lineHeight: 1 }}>
                                            {daysLeft}
                                        </Typography>
                                        <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: '0.6rem', fontWeight: typography.fontWeight.bold, color: `${colors.primary.dark}AA`, letterSpacing: 1, textTransform: 'uppercase' }}>
                                            Days Left
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* ── Section label ── */}
            <Box sx={sectionWrapSx}>
                <Container maxWidth="xl">
                    <Box sx={{ textAlign: 'center', animation: visible ? 'ad_heroIn .7s ease .6s both' : 'none' }}>
                        <Stack direction="row" alignItems="center" justifyContent="center" gap={2} sx={{ mb: 2 }}>
                            <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: .45, flex: 1, maxWidth: 60 }} />
                            <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.bold, color: colors.secondary.dark, letterSpacing: 3, textTransform: 'uppercase' }}>
                                How It Works
                            </Typography>
                            <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: .45, flex: 1, maxWidth: 60 }} />
                        </Stack>
                        <Typography sx={sectionHeadSx}>Everything You Need to Know</Typography>
                        <Typography sx={sectionSubSx}>Click any card to get the full details on that part of our admissions process.</Typography>
                    </Box>
                </Container>
            </Box>

            {/* ── Cards grid ── */}
            <Box sx={cardsWrapSx}>
                <Container maxWidth="xl">
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
                        gap: 3,
                        '& > :last-child': { gridColumn: { xs: '1', sm: '1 / span 2', md: '4 / span 1' } },
                    }}>
                        {cards.map((card, i) => (
                            <AdmissionCard key={card.id} card={card} index={i} visible={visible} />
                        ))}
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default AdmissionsPage;