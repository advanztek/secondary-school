import { colors, typography } from "../../theme";

export const keyframes = `
  @keyframes cl_fadeUp    { from{opacity:0;transform:translateY(36px)} to{opacity:1;transform:none} }
  @keyframes cl_shimmer   { 0%{background-position:-400px 0} 100%{background-position:400px 0} }
  @keyframes cl_spin      { to{transform:rotate(360deg)} }
  @keyframes cl_spinR     { to{transform:rotate(-360deg)} }
`;

export const heroWrapSx = {
  position: "relative",
  overflow: "hidden",
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
  animation: "cl_shimmer 4s linear infinite",
};

export const decoRingWrapSx = {
  position: "absolute",
  top: "-10%",
  right: "-4%",
  width: { xs: 0, md: 280 },
  height: { xs: 0, md: 280 },
  display: { xs: "none", md: "block" },
  pointerEvents: "none",
};

export const ring1Sx = {
  position: "absolute",
  inset: 0,
  borderRadius: "50%",
  border: `1px dashed rgba(255,255,255,0.1)`,
  animation: "cl_spin 28s linear infinite",
};

export const ring2Sx = {
  position: "absolute",
  inset: "22%",
  borderRadius: "50%",
  border: `1px dashed ${colors.secondary.main}28`,
  animation: "cl_spinR 18s linear infinite",
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
  left: "-5%",
  width: 360,
  height: 360,
  borderRadius: "50%",
  bgcolor: colors.primary.light,
  opacity: 0.1,
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

export const heroTitleSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: { xs: "2.4rem", md: "3.8rem" },
  fontWeight: typography.fontWeight.extraBold,
  color: "white",
  lineHeight: 1.1,
  mb: 2,
};

export const heroSubSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: typography.fontSize.base,
  color: "rgba(255,255,255,0.55)",
  lineHeight: 1.9,
  maxWidth: 580,
};

/* content section */
export const contentSx = {
  bgcolor: colors.background.default,
  py: { xs: 8, md: 12 },
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundImage: `radial-gradient(${colors.primary.main}10 1px, transparent 1px)`,
    backgroundSize: "24px 24px",
    pointerEvents: "none",
  },
};

export const sectionLabelSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: typography.fontSize.xs,
  fontWeight: typography.fontWeight.bold,
  color: colors.secondary.dark,
  letterSpacing: 3,
  textTransform: "uppercase",
};

export const sectionHeadSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: { xs: typography.fontSize["2xl"], md: "2.4rem" },
  fontWeight: typography.fontWeight.bold,
  color: colors.primary.dark,
};

/* highlight card */
export const hlCardSx = (color, visible, delay) => ({
  bgcolor: colors.background.paper,
  borderRadius: "20px",
  overflow: "hidden",
  border: `1.5px solid ${colors.divider}`,
  cursor: "pointer",
  transition: "all .3s ease",
  animation: visible ? `cl_fadeUp .7s ease ${delay}s both` : "none",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: `0 24px 60px rgba(27,90,174,0.12)`,
    borderColor: `${color}44`,
    "& .cl-arrow": { transform: "translateX(4px)", opacity: 1 },
  },
});

export const hlIconBoxSx = (color) => ({
  width: 56,
  height: 56,
  borderRadius: "14px",
  bgcolor: `${color}18`,
  border: `1px solid ${color}33`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mb: 2.5,
});

export const hlTitleSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: typography.fontSize["2xl"],
  fontWeight: typography.fontWeight.bold,
  color: colors.primary.dark,
  mb: 1,
};

export const hlDescSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: typography.fontSize.sm,
  color: colors.text.secondary,
  lineHeight: 1.8,
  mb: 3,
};

/* feature row card */
export const featureCardSx = (color, visible, delay) => ({
  p: 3,
  bgcolor: colors.background.paper,
  borderRadius: "14px",
  border: `1.5px solid ${colors.divider}`,
  animation: visible ? `cl_fadeUp .6s ease ${delay}s both` : "none",
  transition: "all .3s ease",
  "&:hover": {
    borderColor: `${color}44`,
    boxShadow: `0 12px 32px rgba(27,90,174,0.08)`,
  },
});

export const featureIconSx = (color) => ({
  width: 44,
  height: 44,
  borderRadius: "10px",
  bgcolor: `${color}18`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
});

export const featureTitleSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: typography.fontSize.base,
  fontWeight: typography.fontWeight.bold,
  color: colors.primary.dark,
  mb: 0.5,
};

export const featureDescSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: typography.fontSize.sm,
  color: colors.text.secondary,
  lineHeight: 1.7,
};

/* stats strip */
export const statsStripSx = {
  background: `linear-gradient(135deg, ${colors.primary.dark} 0%, ${colors.primary.main} 70%, ${colors.secondary.main}0F 100%)`,
  borderRadius: "20px",
  p: { xs: 4, md: 5 },
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundImage: `radial-gradient(rgba(255,255,255,0.08) 1.5px, transparent 1.5px)`,
    backgroundSize: "24px 24px",
    pointerEvents: "none",
  },
};

export const statValueSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: { xs: typography.fontSize["2xl"], md: "2.6rem" },
  fontWeight: 900,
  color: colors.secondary.main,
  lineHeight: 1,
  mb: 0.5,
};

export const statLabelSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: typography.fontSize.xs,
  color: "rgba(255,255,255,0.45)",
  letterSpacing: 1,
  textTransform: "uppercase",
};
