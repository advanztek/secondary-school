import { useState } from "react";
import { Box, Container, Typography, Stack, IconButton } from "@mui/material";
import FacebookIcon        from "@mui/icons-material/Facebook";
import InstagramIcon       from "@mui/icons-material/Instagram";
import YouTubeIcon         from "@mui/icons-material/YouTube";
import PersonOutlinedIcon  from "@mui/icons-material/PersonOutlined";
import MenuIcon            from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { topLinks, socials } from "../navbarData";
import { colors, typography } from "../../theme";

const socialIcons = { Facebook: FacebookIcon, Instagram: InstagramIcon, YouTube: YouTubeIcon };

const PortalLink = ({ label, path }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={path}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: '7px',
        padding: '6px 16px', borderRadius: '6px',
        background: hovered ? colors.secondary.main : 'rgba(27,90,174,0.08)',
        color: hovered ? colors.primary.dark : colors.primary.main,
        textDecoration: 'none', cursor: 'pointer',
        border: `1px solid ${hovered ? colors.secondary.main : 'rgba(27,90,174,0.2)'}`,
        transform: hovered ? 'translateY(-2px)' : 'none',
        boxShadow: hovered ? `0 6px 18px ${colors.secondary.main}44` : 'none',
        transition: 'all 0.25s ease',
      }}
    >
      <PersonOutlinedIcon style={{ fontSize: 14, color: hovered ? colors.primary.dark : colors.primary.main }} />
      <span style={{ fontSize: '0.75rem', fontWeight: 600, fontFamily: typography.fontFamily.main }}>{label}</span>
    </a>
  );
};

const SocialBtn = ({ href, Icon, label }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={href} aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: 30, height: 30, borderRadius: '7px',
        color: hovered ? colors.secondary.main : colors.primary.main,
        background: hovered ? `${colors.secondary.main}20` : 'rgba(27,90,174,0.06)',
        border: `1px solid ${hovered ? `${colors.secondary.main}40` : 'rgba(27,90,174,0.15)'}`,
        transform: hovered ? 'translateY(-2px)' : 'none',
        transition: 'all 0.25s ease', textDecoration: 'none', cursor: 'pointer',
      }}
    >
      <Icon style={{ fontSize: 15 }} />
    </a>
  );
};

const TopBar = ({ onMobileOpen }) => (
  <Box sx={{
    bgcolor: colors.background.default,
    borderBottom: `1px solid ${colors.divider}`,
    position: 'relative',
    '&::after': {
      content: '""', position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
      background: `linear-gradient(90deg, transparent, ${colors.secondary.main}88, ${colors.secondary.light}, ${colors.secondary.main}88, transparent)`,
    },
  }}>
    <Container maxWidth="xl">
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ py: 1.2 }}>

        {/* ── Logo ── */}
        <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 1.5, textDecoration: 'none', flexShrink: 0 }}>
          <Box sx={{
            width: 50, height: 50, borderRadius: '10px', overflow: 'hidden',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 4px 14px rgba(0,0,0,0.35), 0 0 0 2px ${colors.secondary.main}66`,
            bgcolor: 'white', p: '3px', flexShrink: 0,
          }}>
            <Box component="img" src="/logo2.png" alt="Pamsset School"
              sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </Box>
          <Box>
            <Typography sx={{
              fontFamily: typography.fontFamily.main,
              fontSize: { xs: '1rem', md: '1.1rem' },
              fontWeight: 800, color: colors.primary.dark, lineHeight: 1.15, letterSpacing: '0.5px',
            }}>
              PAMSSET SCHOOL
            </Typography>
            <Typography sx={{
              fontFamily: typography.fontFamily.main,
              fontSize: '0.58rem', fontWeight: 700,
              color: colors.secondary.main,
              letterSpacing: 2.5, textTransform: 'uppercase',
            }}>
              Aliade · Faith &amp; Zeal
            </Typography>
          </Box>
        </Box>

        {/* ── Desktop links + socials ── */}
        <Stack direction="row" alignItems="center" sx={{ gap: 1, display: { xs: 'none', md: 'flex' } }}>
          {topLinks.map((link, i) => (
            <Stack key={link.label} direction="row" alignItems="center">
              <PortalLink label={link.label} path={link.path} />
              {i < topLinks.length - 1 && (
                <Box sx={{ width: '1px', height: 14, bgcolor: 'rgba(255,255,255,0.15)', mx: 1 }} />
              )}
            </Stack>
          ))}
          <Box sx={{ width: '1px', height: 20, bgcolor: 'rgba(255,255,255,0.1)', mx: 2 }} />
          {socials.map((s) => (
            <SocialBtn key={s.label} href={s.href} Icon={socialIcons[s.label]} label={s.label} />
          ))}
        </Stack>

        {/* ── Mobile hamburger ── */}
        <IconButton onClick={onMobileOpen}
          sx={{ display: { xs: 'flex', md: 'none' }, color: colors.primary.main, '&:hover': { color: colors.secondary.main } }}>
          <MenuIcon />
        </IconButton>

      </Stack>
    </Container>
  </Box>
);

export default TopBar;