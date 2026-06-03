import { colors, typography } from "../../theme";

export const keyframes = `
  @keyframes ac_heroIn  { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:none} }
  @keyframes ac_lineGrow{ from{width:0} to{width:100%} }
  @keyframes ac_cardIn  { from{opacity:0;transform:translateY(48px)} to{opacity:1;transform:none} }
  @keyframes ac_shimmer { 0%{background-position:-400px 0} 100%{background-position:400px 0} }
  @keyframes ac_float   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
  @keyframes ac_spin    { to{transform:rotate(360deg)} }
  @keyframes ac_spinR   { to{transform:rotate(-360deg)} }
`;


export const heroWrapSx = {
  position: "relative",
  overflow: "hidden",
  background: `linear-gradient(135deg, ${colors.primary.dark} 0%, ${colors.primary.main} 100%, ${colors.secondary.main}0F 100%)`,
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
  animation: "ac_shimmer 4s linear infinite",
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
  animation: "ac_spin 28s linear infinite",
};

export const ring2Sx = {
  position: "absolute",
  inset: "22%",
  borderRadius: "50%",
  border: `1px dashed ${colors.secondary.main}28`,
  animation: "ac_spinR 18s linear infinite",
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
  bgcolor: colors.primary.light,
  opacity: 0.12,
  filter: "blur(70px)",
  pointerEvents: "none",
};

export const watermarkSx = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  fontFamily: typography.fontFamily.main,
  fontSize: { xs: "7rem", md: "14rem" },
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

/* label */
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

/* heading */
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

/* hero image */
export const heroImgSx = {
  width: "100%",
  height: 400,
  objectFit: "cover",
  borderRadius: "20px",
  display: "block",
  boxShadow: "0 24px 70px rgba(0,0,0,0.45)",
  animation: "ac_float 6s ease-in-out infinite",
};

export const heroImgFrameSx = {
  position: "absolute",
  top: 20,
  left: -20,
  right: 20,
  bottom: -20,
  border: `1.5px solid ${colors.secondary.main}33`,
  borderRadius: "20px",
  zIndex: -1,
};

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

export const cardsWrapSx = {
  bgcolor: colors.background.default,
  py: { xs: 6, md: 8 },
};
