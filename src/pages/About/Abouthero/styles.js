import { colors, typography } from "../../../theme";

export const keyframes = `
  @keyframes ab_heroIn  { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:none} }
  @keyframes ab_lineGrow{ from{width:0} to{width:100%} }
  @keyframes ab_spin    { to{transform:rotate(360deg)} }
  @keyframes ab_spinR   { to{transform:rotate(-360deg)} }
  @keyframes ab_glow    { 0%,100%{opacity:.3;transform:scale(1)} 50%{opacity:.65;transform:scale(1.08)} }
  @keyframes ab_shimmer { 0%{background-position:-600px 0} 100%{background-position:600px 0} }
`;

export const heroWrapSx = {
  position: "relative",
  background: `linear-gradient(135deg, ${colors.primary.dark} 0%, ${colors.primary.main} 70%, ${colors.secondary.main}0F 100%)`,
  overflow: "hidden",
  pt: { xs: 10, md: 14 },
  pb: { xs: 0, md: 0 },
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundImage: `radial-gradient(rgba(255,255,255,0.12) 1.5px, transparent 1.5px)`,
    backgroundSize: "26px 26px",
    pointerEvents: "none",
  },
};

export const topAccentSx = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: 4,
  background: `linear-gradient(90deg,${colors.primary.dark},${colors.primary.main},${colors.secondary.main},${colors.secondary.light},${colors.secondary.main},${colors.primary.main},${colors.primary.dark})`,
  backgroundSize: "600px 100%",
  animation: "ab_shimmer 4s linear infinite",
};

export const decoRingWrapSx = {
  position: "absolute",
  top: "-8%",
  right: "-4%",
  width: { xs: 0, md: 320 },
  height: { xs: 0, md: 320 },
  display: { xs: "none", md: "block" },
  pointerEvents: "none",
};

export const ring1Sx = {
  position: "absolute",
  inset: 0,
  borderRadius: "50%",
  border: `1.5px dashed ${colors.primary.main}20`,
  animation: "ab_spin 28s linear infinite",
};

export const ring2Sx = {
  position: "absolute",
  inset: "18%",
  borderRadius: "50%",
  border: `1px dashed ${colors.secondary.main}30`,
  animation: "ab_spinR 18s linear infinite",
};

export const ringDotSx = (color, top, bottom) => ({
  position: "absolute",
  top,
  bottom,
  left: "46%",
  width: 10,
  height: 10,
  borderRadius: "50%",
  bgcolor: color,
  boxShadow: `0 0 12px ${color}`,
});

export const glowBlobSx = {
  position: "absolute",
  bottom: "-10%",
  left: "-6%",
  width: 380,
  height: 380,
  borderRadius: "50%",
  bgcolor: colors.primary.main,
  opacity: 0.05,
  filter: "blur(60px)",
  pointerEvents: "none",
};

export const watermarkSx = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  fontFamily: typography.fontFamily.main,
  fontSize: { xs: "8rem", md: "16rem" },
  fontWeight: typography.fontWeight.extraBold,
  color: colors.primary.main,
  opacity: 0.04,
  whiteSpace: "nowrap",
  userSelect: "none",
  pointerEvents: "none",
  lineHeight: 1,
  zIndex: 0,
};

export const labelBarSx = {
  width: 36,
  height: 2,
  bgcolor: colors.secondary.main,
};

export const labelTextSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: typography.fontSize.xs,
  fontWeight: typography.fontWeight.bold,
  color: colors.secondary.light,
  letterSpacing: 3,
  textTransform: "uppercase",
};

export const headLine1Sx = {
  fontFamily: typography.fontFamily.main,
  fontSize: { xs: typography.fontSize["3xl"], md: "3.8rem" },
  fontWeight: typography.fontWeight.extraBold,
  color: "white",
  lineHeight: 1.12,
  mb: 0.5,
};

export const headLine2Sx = {
  fontFamily: typography.fontFamily.main,
  fontSize: { xs: typography.fontSize["3xl"], md: "3.8rem" },
  fontWeight: typography.fontWeight.extraBold,
  color: colors.secondary.main,
  lineHeight: 1.12,
};

export const underlineSx = {
  position: "absolute",
  bottom: -3,
  left: 0,
  height: 3,
  bgcolor: colors.secondary.main,
  borderRadius: 2,
};

export const subtitleSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: typography.fontSize.base,
  color: "rgba(255,255,255,0.6)",
  lineHeight: 1.9,
  maxWidth: 560,
  mb: 6,
};

export const mottoSx = {
  display: "inline-flex",
  alignItems: "center",
  gap: 1,
  border: `1px solid ${colors.secondary.main}44`,
  borderLeft: `3px solid ${colors.secondary.main}`,
  px: 2,
  py: 0.9,
  borderRadius: "0 8px 8px 0",
  bgcolor: `${colors.secondary.main}12`,
  mb: 3,
};

export const mottoTextSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: "0.65rem",
  fontWeight: typography.fontWeight.bold,
  color: colors.secondary.light,
  letterSpacing: 2.5,
  textTransform: "uppercase",
};

export const tabsWrapSx = { position: "relative", zIndex: 2, mt: 2 };

export const tabRowSx = {
  display: "flex",
  gap: 0,
  overflowX: "auto",
  "&::-webkit-scrollbar": { display: "none" },
};

export const tabSx = (isActive) => ({
  display: "flex",
  alignItems: "center",
  gap: 1,
  px: { xs: 2.5, md: 3.5 },
  py: 2.2,
  cursor: "pointer",
  position: "relative",
  flexShrink: 0,
  transition: "all .25s ease",
  bgcolor: isActive ? colors.background.paper : "transparent",
  borderRadius: isActive ? "12px 12px 0 0" : 0,
  boxShadow: isActive ? `0 -2px 12px ${colors.primary.main}14` : "none",
  border: isActive ? `1px solid ${colors.divider}` : "1px solid transparent",
  borderBottom: "none",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    bgcolor: isActive ? colors.secondary.main : "transparent",
    borderRadius: "12px 12px 0 0",
    transition: "background .25s ease",
  },
  "&:hover": {
    bgcolor: isActive ? colors.background.paper : `${colors.primary.main}08`,
  },
});

export const tabIconSx = (isActive) => ({
  fontSize: 16,
  color: isActive ? colors.secondary.dark : "rgba(255,255,255,0.5)",
  transition: "color .25s ease",
});

export const tabLabelSx = (isActive) => ({
  fontFamily: typography.fontFamily.main,
  fontSize: typography.fontSize.sm,
  fontWeight: isActive
    ? typography.fontWeight.semiBold
    : typography.fontWeight.regular,
  color: isActive ? colors.primary.dark : "rgba(255,255,255,0.65)",
  whiteSpace: "nowrap",
  transition: "color .25s ease",
});
