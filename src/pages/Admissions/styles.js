import { colors, typography } from "../../theme";

export const keyframes = `
  @keyframes ad_heroIn  { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:none} }
  @keyframes ad_lineGrow{ from{width:0} to{width:100%} }
  @keyframes ad_cardIn  { from{opacity:0;transform:translateY(48px)} to{opacity:1;transform:none} }
  @keyframes ad_shimmer { 0%{background-position:-400px 0} 100%{background-position:400px 0} }
  @keyframes ad_float   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
  @keyframes ad_pulse   { 0%,100%{box-shadow:0 0 0 0 ${colors.secondary.main}44} 50%{box-shadow:0 0 0 12px ${colors.secondary.main}00} }
  @keyframes ad_spin    { to{transform:rotate(360deg)} }
  @keyframes ad_spinR   { to{transform:rotate(-360deg)} }
`;

/* ── Hero ── */
export const heroWrapSx = {
  position: "relative",
  overflow: "hidden",
  /* silent — gold barely there at 0F = 6% */
  background: `linear-gradient(135deg, ${colors.primary.dark} 0%, ${colors.primary.main} 70%, ${colors.secondary.main}0F 100%)`,
  py: { xs: 10, md: 14 },
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundImage: `radial-gradient(rgba(255,255,255,0.12) 1.5px, transparent 1.5px)`,
    backgroundSize: "26px 26px",
    pointerEvents: "none",
  },
};

export const shimmerLineSx = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: 4,
  background: `linear-gradient(90deg,transparent,${colors.secondary.dark},${colors.secondary.main},${colors.secondary.light},${colors.secondary.main},${colors.secondary.dark},transparent)`,
  backgroundSize: "400px 100%",
  animation: "ad_shimmer 4s linear infinite",
};

export const decoRingWrapSx = {
  position: "absolute",
  top: "-10%",
  right: "-4%",
  width: { xs: 0, md: 300 },
  height: { xs: 0, md: 300 },
  display: { xs: "none", md: "block" },
  pointerEvents: "none",
};

export const ring1Sx = {
  position: "absolute",
  inset: 0,
  borderRadius: "50%",
  border: `1px dashed rgba(255,255,255,0.1)`,
  animation: "ad_spin 28s linear infinite",
};

export const ring2Sx = {
  position: "absolute",
  inset: "22%",
  borderRadius: "50%",
  border: `1px dashed ${colors.secondary.main}28`,
  animation: "ad_spinR 18s linear infinite",
};

export const ringDotSx = (color, top, bottom) => ({
  position: "absolute",
  top,
  bottom,
  left: "46%",
  width: 9,
  height: 9,
  borderRadius: "50%",
  bgcolor: color,
  boxShadow: `0 0 10px ${color}`,
});

export const glowBlobSx = {
  position: "absolute",
  bottom: "-15%",
  left: "-6%",
  width: 380,
  height: 380,
  borderRadius: "50%",
  bgcolor: colors.secondary.dark,
  opacity: 0.08,
  filter: "blur(70px)",
  pointerEvents: "none",
};

export const watermarkSx = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  fontFamily: typography.fontFamily.main,
  fontSize: { xs: "6rem", md: "13rem" },
  fontWeight: typography.fontWeight.extraBold,
  color: "white",
  opacity: 0.03,
  whiteSpace: "nowrap",
  userSelect: "none",
  pointerEvents: "none",
  lineHeight: 1,
};

export const crumbHomeSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: typography.fontSize.xs,
  color: "rgba(255,255,255,0.38)",
  letterSpacing: 1,
};

export const crumbActiveSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: typography.fontSize.xs,
  color: colors.secondary.main,
  fontWeight: typography.fontWeight.semiBold,
  letterSpacing: 1,
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

export const head1Sx = {
  fontFamily: typography.fontFamily.main,
  fontSize: { xs: typography.fontSize["3xl"], md: "3.6rem" },
  fontWeight: typography.fontWeight.extraBold,
  color: "white",
  lineHeight: 1.15,
  mb: 0.5,
};

export const head2Sx = {
  fontFamily: typography.fontFamily.main,
  fontSize: { xs: typography.fontSize["3xl"], md: "3.6rem" },
  fontWeight: typography.fontWeight.extraBold,
  color: colors.secondary.main,
  lineHeight: 1.15,
};

export const underlineSx = {
  position: "absolute",
  bottom: -2,
  left: 0,
  height: 3,
  bgcolor: colors.secondary.main,
  borderRadius: 2,
};

export const subtitleSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: typography.fontSize.base,
  color: "rgba(255,255,255,0.55)",
  lineHeight: 1.9,
  maxWidth: 480,
  mb: 4,
};

export const statValueSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: typography.fontSize["2xl"],
  fontWeight: typography.fontWeight.bold,
  color: colors.secondary.main,
  lineHeight: 1,
};

export const statLabelSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: typography.fontSize.xs,
  color: "rgba(255,255,255,0.38)",
  letterSpacing: 1,
  textTransform: "uppercase",
  mt: 0.4,
};

export const heroImgSx = {
  width: "100%",
  height: 420,
  objectFit: "cover",
  borderRadius: "20px",
  display: "block",
  boxShadow: "0 24px 70px rgba(0,0,0,0.45)",
  animation: "ad_float 6s ease-in-out infinite",
};

export const heroImgFrameSx = {
  position: "absolute",
  top: 20,
  left: -20,
  right: 20,
  bottom: -20,
  /* subtle gold frame — reduced opacity */
  border: `1.5px solid ${colors.secondary.main}28`,
  borderRadius: "20px",
  zIndex: -1,
};

export const deadlineBadgeSx = {
  position: "absolute",
  bottom: -16,
  left: -16,
  bgcolor: colors.secondary.main,
  borderRadius: "14px",
  px: 3,
  py: 2,
  boxShadow: `0 10px 28px ${colors.secondary.main}44`,
  animation: "ad_pulse 2.5s ease infinite",
};

/* ── Section label ── */
export const sectionWrapSx = {
  bgcolor: colors.background.default,
  pt: { xs: 8, md: 10 },
  pb: 2,
};

export const sectionHeadSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: { xs: typography.fontSize["2xl"], md: "2.6rem" },
  fontWeight: typography.fontWeight.bold,
  color: colors.primary.dark,
  mb: 1.5,
};

export const sectionSubSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: typography.fontSize.base,
  color: colors.text.secondary,
  maxWidth: 480,
  mx: "auto",
  lineHeight: 1.8,
};

/* ── Cards ── */
export const cardsWrapSx = {
  bgcolor: colors.background.default,
  py: { xs: 6, md: 8 },
};

export const cardWrapSx = (hovered, color, delay) => ({
  position: "relative",
  borderRadius: "20px",
  overflow: "hidden",
  cursor: "pointer",
  transform: hovered ? "translateY(-10px)" : "none",
  boxShadow: hovered
    ? `0 28px 60px rgba(13,58,122,0.22), 0 0 0 1.5px ${color}44`
    : "0 6px 24px rgba(13,58,122,0.12)",
  transition: "transform .35s ease, box-shadow .35s ease",
});

/* card gradient overlay — calmer than before */
export const cardOverlaySx = (color, hovered) => ({
  position: "absolute",
  inset: 0,
  background: `linear-gradient(165deg,
    ${color}99 0%,
    ${color}55 35%,
    rgba(10,20,50,0.55) 65%,
    rgba(10,20,50,0.92) 100%)`,
  opacity: hovered ? 0.95 : 0.88,
  transition: "opacity .35s ease",
});

export const cardNumSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: "3.5rem",
  fontWeight: typography.fontWeight.extraBold,
  color: "rgba(255,255,255,0.1)",
  lineHeight: 1,
  userSelect: "none",
};

export const cardTagSx = (highlight, color) => ({
  bgcolor: highlight ? colors.secondary.main : "rgba(255,255,255,0.14)",
  backdropFilter: "blur(8px)",
  border: `1px solid ${highlight ? colors.secondary.dark : "rgba(255,255,255,0.18)"}`,
  px: 1.5,
  py: 0.5,
  borderRadius: "6px",
  animation: highlight ? "ad_pulse 2.2s ease infinite" : "none",
});

export const cardTagTextSx = (highlight) => ({
  fontFamily: typography.fontFamily.main,
  fontSize: "0.62rem",
  fontWeight: typography.fontWeight.bold,
  color: highlight ? colors.primary.dark : "white",
  letterSpacing: 1.5,
  textTransform: "uppercase",
});

export const cardStatBoxSx = (color, highlight, hovered) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: 1,
  bgcolor: color,
  px: 1.5,
  py: 0.5,
  borderRadius: "6px",
  mb: 1.5,
  opacity: hovered ? 1 : 0.75,
  transform: hovered ? "none" : "translateY(6px)",
  transition: "all .3s ease",
});

export const cardTitleSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: typography.fontSize.lg,
  fontWeight: typography.fontWeight.bold,
  color: "white",
  lineHeight: 1.2,
};

export const cardDescSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: typography.fontSize.sm,
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.7,
  mb: 2,
};

export const cardCtaTextSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: typography.fontSize.xs,
  fontWeight: typography.fontWeight.bold,
  color: colors.secondary.light,
  letterSpacing: 1.5,
  textTransform: "uppercase",
};
