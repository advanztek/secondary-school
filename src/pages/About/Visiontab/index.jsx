import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { colors, typography } from '../../../theme';
import {
    keyframes, bannerSx, bannerShimmerSx, bannerBottomLineSx,
    decoRingWrapSx, ring1Sx, ring2Sx, ringDotSx, glowBlobSx,
    watermarkSx, bannerLabelSx, quoteSx, quoteAuthorSx, quoteLineSx,
    gridWrapSx, sectionHeadSx, cardSx, cardNumSx, iconBoxSx,
    cardTitleSx, cardDescSx,
} from './styles';

const pillars = [
    { icon: VisibilityIcon, color: colors.primary.main, title: 'Our Vision', desc: 'To be the leading centre of academic excellence and holistic development in Benue State — producing graduates who are globally competitive and deeply rooted in Nigerian values.' },
    { icon: TrackChangesIcon, color: colors.secondary.dark, title: 'Our Mission', desc: "To nurture every student's intellectual, moral, creative and physical potential through a rigorous, inclusive and inspiring learning environment led by exceptional educators." },
    { icon: FavoriteIcon, color: colors.primary.dark, title: 'Our Promise', desc: 'Every child who walks through our gates is seen, heard and challenged to exceed their own expectations. We promise a school experience that shapes character for life.' },
    { icon: EmojiObjectsIcon, color: colors.primary.light, title: 'Our Approach', desc: 'We blend the WAEC framework with a uniquely Nigerian spirit — producing thinkers, leaders and innovators grounded in Faith and Zeal, ready for the 21st century.' },
];

const VisionTab = () => {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <style>{keyframes}</style>
            <Box ref={ref}>

                <Box sx={bannerSx}>
                    <Box sx={bannerShimmerSx} />
                    <Box sx={bannerBottomLineSx} />

                    <Box sx={decoRingWrapSx}>
                        <Box sx={ring1Sx}><Box sx={ringDotSx(colors.primary.main, '-5px', undefined)} /></Box>
                        <Box sx={ring2Sx}><Box sx={ringDotSx(colors.secondary.main, undefined, '-4px')} /></Box>
                    </Box>
                    <Box sx={glowBlobSx} />
                    <Typography sx={watermarkSx}>VISION</Typography>

                    <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                        <Box sx={{ animation: visible ? 'vm_fadeUp .7s ease both' : 'none' }}>

                            <FormatQuoteIcon sx={{ fontSize: 56, color: `${colors.primary.main}33`, mb: 1 }} />

                            <Typography sx={bannerLabelSx}>What We Stand For</Typography>
                            <Box sx={quoteLineSx} />

                            <Typography sx={quoteSx}>
                                "Education is not the filling of a pail,<br />but the lighting of a fire."
                            </Typography>

                            <Stack direction="row" alignItems="center" justifyContent="center" gap={1.5}>
                                <Box sx={{ width: 30, height: 1, bgcolor: `${colors.secondary.main}66` }} />
                                <Typography sx={quoteAuthorSx}>W.B. Yeats · The Pamsset Philosophy</Typography>
                                <Box sx={{ width: 30, height: 1, bgcolor: `${colors.secondary.main}66` }} />
                            </Stack>

                        </Box>
                    </Container>
                </Box>

                <Box sx={gridWrapSx}>
                    <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>

                        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 }, animation: visible ? 'vm_fadeUp .7s ease .1s both' : 'none' }}>
                            <Stack direction="row" alignItems="center" justifyContent="center" gap={2} sx={{ mb: 2 }}>
                                <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: .5, flex: 1, maxWidth: 60 }} />
                                <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: '0.68rem', fontWeight: 700, color: colors.secondary.dark, letterSpacing: 3, textTransform: 'uppercase' }}>
                                    Vision & Mission
                                </Typography>
                                <Box sx={{ height: 1, bgcolor: colors.secondary.main, opacity: .5, flex: 1, maxWidth: 60 }} />
                            </Stack>
                            <Typography sx={sectionHeadSx}>Our Purpose, Defined</Typography>
                        </Box>

                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
                            {pillars.map((p, i) => {
                                const Icon = p.icon;
                                return (
                                    <Box key={p.title} sx={cardSx(p.color, visible, .1 * i + .2)}>
                                        <Typography sx={cardNumSx(p.color)}>{String(i + 1).padStart(2, '0')}</Typography>
                                        <Stack direction="row" alignItems="flex-start" gap={2.5} sx={{ position: 'relative', zIndex: 1 }}>
                                            <Box className="pillar-icon-box" sx={iconBoxSx(p.color)}>
                                                <Icon className="pillar-icon" sx={{ fontSize: 26, color: p.color, transition: 'color .3s ease' }} />
                                            </Box>
                                            <Box>
                                                <Typography sx={cardTitleSx}>{p.title}</Typography>
                                                <Box sx={{ width: 32, height: 2, bgcolor: p.color, mb: 1.5, borderRadius: 2 }} />
                                                <Typography sx={cardDescSx}>{p.desc}</Typography>
                                            </Box>
                                        </Stack>
                                    </Box>
                                );
                            })}
                        </Box>

                    </Container>
                </Box>
            </Box>
        </>
    );
};

export default VisionTab;