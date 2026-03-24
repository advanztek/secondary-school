import { colors, typography } from "../../../theme";

export const keyframes = `
  @keyframes ab_heroIn   { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:none} }
  @keyframes ab_lineGrow { from{width:0} to{width:100%} }
  @keyframes ab_spin     { to{transform:rotate(360deg)} }
  @keyframes ab_spinR    { to{transform:rotate(-360deg)} }
  @keyframes ab_shimmer  { 0%{background-position:-600px 0} 100%{background-position:600px 0} }
  @keyframes ab_float    { 0%,100%{transform:translateY(0) rotate(-1deg)} 50%{transform:translateY(-18px) rotate(1deg)} }
  @keyframes ab_pulse    { 0%,100%{opacity:.3;transform:scale(1)} 50%{opacity:.65;transform:scale(1.1)} }
  @keyframes ab_gradShift{ 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
  @keyframes ab_ringPop  { from{opacity:0;transform:scale(.7)} to{opacity:1;transform:scale(1)} }
  @keyframes ab_dotBlink { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.6)} }
  @keyframes ab_badgePop { from{opacity:0;transform:translateY(16px) scale(.85)} to{opacity:1;transform:none} }
`;

export const heroWrapSx = {
  position: "relative",
  overflow: "hidden",
  background: `linear-gradient(135deg, ${colors.primary.dark} 0%, ${colors.primary.main} 70%, ${colors.secondary.main}0F 100%)`,
  pt: { xs: 10, md: 14 },
  pb: { xs: 8, md: 10 },
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

export const glowBlob2Sx = {
  position: "absolute",
  top: "-5%",
  right: "20%",
  width: 260,
  height: 260,
  borderRadius: "50%",
  bgcolor: colors.secondary.main,
  opacity: 0.04,
  filter: "blur(50px)",
  pointerEvents: "none",
};

export const watermarkSx = {
  position: "absolute",
  top: "50%",
  left: "40%",
  transform: "translateY(-50%)",
  fontFamily: typography.fontFamily.main,
  fontSize: { xs: "8rem", md: "16rem" },
  fontWeight: typography.fontWeight.extraBold,
  color: "white",
  opacity: 0.03,
  whiteSpace: "nowrap",
  userSelect: "none",
  pointerEvents: "none",
  lineHeight: 1,
  zIndex: 0,
};

/* ── LEFT text ── */
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
  background: `linear-gradient(120deg,${colors.secondary.dark},${colors.secondary.main},${colors.secondary.light},${colors.secondary.main})`,
  backgroundSize: "200%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  animation: "ab_gradShift 4s ease infinite",
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
  color: "rgba(255,255,255,0.58)",
  lineHeight: 1.9,
  maxWidth: 480,
  mb: 4,
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

/* ── RIGHT side stat badges ── */
export const rightWrapSx = {
  display: { xs: "none", md: "flex" },
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
};

/* outer orbit ring */
export const orbitRingSx = (size, delay, reverse) => ({
  position: "absolute",
  width: size,
  height: size,
  borderRadius: "50%",
  border: `1px dashed rgba(255,255,255,${reverse ? "0.08" : "0.12"})`,
  animation: `${reverse ? "ab_spinR" : "ab_spin"} ${delay}s linear infinite`,
  animation: `ab_ringPop .8s ease both, ${reverse ? "ab_spinR" : "ab_spin"} ${delay}s linear infinite`,
});

export const logoBoxSx = {
  width: 160,
  height: 160,
  borderRadius: "28px",
  bgcolor: "white",
  p: "10px",
  boxShadow: `0 0 0 3px ${colors.secondary.main}55, 0 30px 70px rgba(0,0,0,0.4)`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  zIndex: 5,
  animation: "ab_float 5s ease-in-out infinite",
};

/* stat badge floating around the logo */
export const statBadgeSx = (top, left, right, bottom, delay) => ({
  position: "absolute",
  top,
  left,
  right,
  bottom,
  zIndex: 6,
  animation: `ab_badgePop .7s cubic-bezier(.34,1.2,.64,1) ${delay}s both`,
});
