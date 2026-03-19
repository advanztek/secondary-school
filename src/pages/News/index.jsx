import { useEffect, useState, useRef } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { colors, typography } from '../../theme';
import {
    keyframes, heroWrapSx, shimmerLineSx, decoRingWrapSx, ring1Sx, ring2Sx,
    ringDotSx, glowBlobSx, watermarkSx, crumbHomeSx, crumbActiveSx,
    labelBarSx, labelTextSx, heroTitleSx, heroSubSx,
    articlesSectionSx, featuredCardSx, featuredTitleSx, featuredExcerptSx,
    cardSx, cardTitleSx, cardExcerptSx, metaTextSx, readMoreSx,
} from './styles';

export const newsData = [
    {
        slug: 'pamsset-wins-national-science-competition',
        tag: 'Achievement', tagColor: colors.primary.main,
        date: 'February 14, 2026', readTime: '3 min read',
        title: 'Pamsset Students Win National Science & Innovation Competition',
        excerpt: 'Our SS2 Science students took home the gold medal at the 2026 National Schools Science & Innovation Fair held in Abuja, defeating over 200 schools from across Nigeria.',
        img: '/news1.jpg', featured: true,
        body: [
            'Pamsset School is proud to announce that our SS2 Science team won first place at the 2026 National Schools Science & Innovation Fair, held in Abuja on February 10–12, 2026.',
            'The team presented a groundbreaking project on solar-powered water purification systems designed for rural Nigerian communities.',
            '"We are incredibly proud of these young scientists," said the Head of Sciences. "Their dedication is an inspiration to us all."',
            'The students will now represent Nigeria at the West African Schools Science Competition in Ghana in April 2026.',
        ],
    },
    {
        slug: 'inter-house-sports-day-2026',
        tag: 'Sports', tagColor: '#2E7D32',
        date: 'January 28, 2026', readTime: '4 min read',
        title: 'Electrifying Inter-House Sports Day 2026 — Red House Triumphs',
        excerpt: 'Thousands of students, parents and staff gathered at our sports complex for the annual Inter-House Sports Day. Red House emerged champions after a thrilling day of athletics and relay races.',
        img: '/news2.jpg', featured: false,
        body: ['Red House claimed the overall championship trophy with 1,240 points, narrowly defeating Blue House.'],
    },
    {
        slug: 'cultural-day-2026-celebration',
        tag: 'Culture', tagColor: colors.secondary.dark,
        date: 'December 5, 2025', readTime: '3 min read',
        title: "Cultural Day 2025: A Vibrant Celebration of Nigeria's Heritage",
        excerpt: 'Students from across Nigeria showcased traditional attire, food, music and dance in an unforgettable afternoon at Pamsset School, Aliade.',
        img: '/news3.jpg', featured: false,
        body: ['Students arrived dressed in the traditional attire of their home states — a vibrant showcase of Nigerian culture.'],
    },
    {
        slug: 'waec-accreditation-renewed-2025',
        tag: 'Academic', tagColor: colors.primary.dark,
        date: 'November 18, 2025', readTime: '2 min read',
        title: 'Pamsset Renews WAEC Accreditation for 2025–2028',
        excerpt: 'We are delighted to announce that Pamsset School has successfully renewed its WAEC accreditation, valid through 2028, recognising our high academic standards.',
        img: '/academics-curriculum.jpg', featured: false,
        body: ['The accreditation recognises Pamsset as a school that meets the highest standards in curriculum delivery and student support.'],
    },
    {
        slug: 'new-ict-centre-opened',
        tag: 'Facilities', tagColor: colors.primary.light,
        date: 'October 10, 2025', readTime: '3 min read',
        title: 'State-of-the-Art ICT Centre Officially Opened',
        excerpt: "Pamsset School's brand new 60-seat ICT Centre was officially commissioned, giving students access to the latest computers, high-speed internet and coding workstations.",
        img: '/facility-lab-front.png', featured: false,
        body: ['The facility features 60 high-specification desktop computers, fibre internet connectivity and a dedicated server room.'],
    },
    {
        slug: 'waec-results-2025-record-pass-rate',
        tag: 'Results', tagColor: colors.secondary.main,
        date: 'September 3, 2025', readTime: '2 min read',
        title: '2025 WAEC Results: Pamsset Records 98% Pass Rate',
        excerpt: 'For the third consecutive year, Pamsset School recorded a 98% WAEC pass rate. 85% of candidates achieved 5 credits and above including English and Mathematics.',
        img: '/news2.jpg', featured: false,
        body: ['These results reflect the relentless dedication of our students and the exceptional quality of our teaching staff.'],
    },
];

/* ── Meta row helper ── */
const MetaRow = ({ date, readTime }) => (
    <Stack direction="row" alignItems="center" gap={2} sx={{ mb: 1.5 }}>
        <Stack direction="row" alignItems="center" gap={0.6}>
            <CalendarTodayIcon sx={{ fontSize: 11, color: colors.text.secondary }} />
            <Typography sx={metaTextSx}>{date}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" gap={0.6}>
            <AccessTimeIcon sx={{ fontSize: 11, color: colors.text.secondary }} />
            <Typography sx={metaTextSx}>{readTime}</Typography>
        </Stack>
    </Stack>
);

/* ── Tag badge ── */
const TagBadge = ({ tag, tagColor, top, left, right }) => (
    <Box sx={{ position: 'absolute', top, left, right, bgcolor: tagColor, px: 1.5, py: .5, borderRadius: '5px', width: 'fit-content' }}>
        <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: '0.62rem', fontWeight: typography.fontWeight.bold, color: 'white', letterSpacing: 1.2, textTransform: 'uppercase' }}>
            {tag}
        </Typography>
    </Box>
);

/* ── Featured card ── */
const FeaturedCard = ({ article, visible }) => {
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();

    return (
        <Box onClick={() => navigate(`/news/${article.slug}`)}
            onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
            sx={{ ...featuredCardSx(hovered, article.tagColor), animation: visible ? 'nw_cardIn .7s ease .2s both' : 'none' }}>

            {/* image side */}
            <Box sx={{ position: 'relative', height: { xs: 260, md: 'auto' }, minHeight: { md: 380 }, overflow: 'hidden' }}>
                <Box component="img" src={article.img} alt={article.title}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .6s ease', transform: hovered ? 'scale(1.05)' : 'scale(1)' }} />
                <TagBadge tag={article.tag} tagColor={article.tagColor} top={16} left={16} />
                <Box sx={{ position: 'absolute', top: 16, right: 16, bgcolor: colors.secondary.main, px: 1.5, py: .5, borderRadius: '5px' }}>
                    <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: '0.62rem', fontWeight: typography.fontWeight.bold, color: colors.primary.dark, letterSpacing: 1 }}>Featured</Typography>
                </Box>
            </Box>

            {/* content side */}
            <Box sx={{ p: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <MetaRow date={article.date} readTime={article.readTime} />
                <Typography sx={featuredTitleSx}>{article.title}</Typography>
                <Box sx={{ width: 36, height: 3, bgcolor: article.tagColor, mb: 2, borderRadius: 2 }} />
                <Typography sx={featuredExcerptSx}>{article.excerpt}</Typography>
                <Stack direction="row" alignItems="center" gap={1}
                    sx={{ transform: hovered ? 'translateX(6px)' : 'none', transition: 'transform .3s ease' }}>
                    <Typography sx={readMoreSx(article.tagColor)}>Read Full Story</Typography>
                    <ArrowForwardIcon sx={{ fontSize: 14, color: article.tagColor }} />
                </Stack>
            </Box>
        </Box>
    );
};

/* ── Regular card ── */
const NewsCard = ({ article, index, visible }) => {
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();

    return (
        <Box onClick={() => navigate(`/news/${article.slug}`)}
            onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
            sx={{ ...cardSx(hovered, article.tagColor), animation: visible ? `nw_cardIn .7s ease ${index * .1 + .3}s both` : 'none' }}>

            <Box sx={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                <Box component="img" src={article.img} alt={article.title}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .6s ease', transform: hovered ? 'scale(1.07)' : 'scale(1)' }} />
                <TagBadge tag={article.tag} tagColor={article.tagColor} top={12} left={12} />
            </Box>

            <Box sx={{ p: 2.5 }}>
                <MetaRow date={article.date} readTime={article.readTime} />
                <Typography sx={cardTitleSx}>{article.title}</Typography>
                <Box sx={{ width: hovered ? 36 : 20, height: 2, bgcolor: article.tagColor, mb: 1.5, transition: 'width .3s ease', borderRadius: 2 }} />
                <Typography sx={cardExcerptSx}>{article.excerpt}</Typography>
                <Stack direction="row" alignItems="center" gap={0.8}
                    sx={{ transform: hovered ? 'translateX(4px)' : 'none', transition: 'transform .3s ease' }}>
                    <Typography sx={readMoreSx(article.tagColor)}>Read More</Typography>
                    <ArrowForwardIcon sx={{ fontSize: 13, color: article.tagColor }} />
                </Stack>
            </Box>
        </Box>
    );
};

/* ── Main page ── */
const NewsPage = () => {
    const [visible, setVisible] = useState(false);
    useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

    const featured = newsData[0];
    const rest = newsData.slice(1);

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
                <Typography sx={watermarkSx}>NEWS</Typography>

                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                    <Stack direction="row" alignItems="center" gap={1} sx={{ mb: 3, animation: visible ? 'nw_heroIn .6s ease .1s both' : 'none' }}>
                        <Box component={Link} to="/" sx={crumbHomeSx}>Home</Box>
                        <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: colors.secondary.main }} />
                        <Typography sx={crumbActiveSx}>News & Events</Typography>
                    </Stack>

                    <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2, animation: visible ? 'nw_heroIn .6s ease .2s both' : 'none' }}>
                        <Box sx={labelBarSx} />
                        <Typography sx={labelTextSx}>Latest Stories</Typography>
                    </Stack>

                    <Typography sx={{ ...heroTitleSx, animation: visible ? 'nw_heroIn .6s ease .3s both' : 'none' }}>
                        News & Events
                    </Typography>
                    <Typography sx={{ ...heroSubSx, animation: visible ? 'nw_heroIn .6s ease .4s both' : 'none' }}>
                        Stay up to date with the latest stories, achievements, events and announcements from the Pamsset School community.
                    </Typography>
                </Container>
            </Box>

            {/* ── Articles ── */}
            <Box sx={articlesSectionSx}>
                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                    <FeaturedCard article={featured} visible={visible} />
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 3 }}>
                        {rest.map((article, i) => (
                            <NewsCard key={article.slug} article={article} index={i} visible={visible} />
                        ))}
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default NewsPage;