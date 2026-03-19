import { useState, useEffect } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GroupsIcon from '@mui/icons-material/Groups';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { colors } from '../../../theme';
import {
    keyframes, heroWrapSx, topAccentSx, decoRingWrapSx, ring1Sx, ring2Sx,
    ringDotSx, glowBlobSx, watermarkSx, labelBarSx, labelTextSx,
    headLine1Sx, headLine2Sx, underlineSx, subtitleSx, mottoSx, mottoTextSx,
    tabsWrapSx, tabRowSx, tabSx, tabIconSx, tabLabelSx,
} from './styles';

export const tabs = [
    { id: 'history', label: 'Our History', icon: HistoryEduIcon },
    { id: 'vision', label: 'Vision & Mission', icon: VisibilityIcon },
    { id: 'staff', label: 'Meet the Staff', icon: GroupsIcon },
    { id: 'facilities', label: 'Facilities', icon: ApartmentIcon },
];

const AboutHero = ({ activeTab, onTabChange }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

    return (
        <>
            <style>{keyframes}</style>

            <Box sx={heroWrapSx}>

                {/* shimmer top line */}
                <Box sx={topAccentSx} />

                {/* deco rings */}
                <Box sx={decoRingWrapSx}>
                    <Box sx={ring1Sx}>
                        <Box sx={ringDotSx(colors.primary.main, '-5px', undefined)} />
                    </Box>
                    <Box sx={ring2Sx}>
                        <Box sx={ringDotSx(colors.secondary.main, undefined, '-4px')} />
                    </Box>
                </Box>

                {/* glow blob + watermark */}
                <Box sx={glowBlobSx} />
                <Typography sx={watermarkSx}>ABOUT</Typography>

                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>

                    {/* Breadcrumb */}
                    <Stack direction="row" alignItems="center" gap={1}
                        sx={{ mb: 3, animation: visible ? 'ab_heroIn 0.6s ease 0.1s both' : 'none' }}>
                        <Box component={Link} to="/" sx={{ fontFamily: 'inherit', fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', '&:hover': { color: colors.secondary.light } }}>
                            Home
                        </Box>
                        <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: colors.secondary.main }} />
                        <Typography sx={{ fontFamily: 'inherit', fontSize: '0.72rem', color: colors.secondary.main, fontWeight: 600 }}>
                            About Us
                        </Typography>
                    </Stack>

                    {/* Label */}
                    <Stack direction="row" alignItems="center" gap={1.5}
                        sx={{ mb: 2, animation: visible ? 'ab_heroIn 0.6s ease 0.2s both' : 'none' }}>
                        <Box sx={labelBarSx} />
                        <Typography sx={labelTextSx}>Who We Are</Typography>
                    </Stack>

                    {/* Heading */}
                    <Typography sx={{ ...headLine1Sx, animation: visible ? 'ab_heroIn 0.6s ease 0.3s both' : 'none' }}>
                        The Story Behind
                    </Typography>
                    <Box sx={{ position: 'relative', display: 'inline-block', mb: 3, animation: visible ? 'ab_heroIn 0.6s ease 0.35s both' : 'none' }}>
                        <Typography sx={headLine2Sx}>Pamsset School.</Typography>
                        <Box sx={{ ...underlineSx, animation: visible ? 'ab_lineGrow 0.9s ease 0.7s both' : 'none', width: visible ? '100%' : 0 }} />
                    </Box>

                    {/* Motto badge */}
                    <Box sx={{ display: 'block', mb: 2, animation: visible ? 'ab_heroIn 0.6s ease 0.38s both' : 'none' }}>
                        <Box sx={mottoSx}>
                            <Typography sx={mottoTextSx}>Faith · Zeal · Aliade</Typography>
                        </Box>
                    </Box>

                    {/* Subtitle */}
                    <Typography sx={{ ...subtitleSx, animation: visible ? 'ab_heroIn 0.6s ease 0.45s both' : 'none' }}>
                        For over 25 years, Pamsset School has stood as a beacon of academic excellence
                        and character development in Benue State, Nigeria. Explore our story, values,
                        people and world-class facilities.
                    </Typography>

                </Container>

                {/* ── Tabs ── */}
                <Box sx={tabsWrapSx}>
                    <Container maxWidth="xl">
                        <Box sx={{ ...tabRowSx, animation: visible ? 'ab_heroIn 0.6s ease 0.55s both' : 'none' }}>
                            {tabs.map((tab) => {
                                const Icon = tab.icon;
                                const isActive = activeTab === tab.id;
                                return (
                                    <Box key={tab.id} onClick={() => onTabChange(tab.id)} sx={tabSx(isActive)}>
                                        <Icon sx={tabIconSx(isActive)} />
                                        <Typography sx={tabLabelSx(isActive)}>{tab.label}</Typography>
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

export default AboutHero;