import { colors, typography } from "../../../theme";

export const keyframes = `
  @keyframes vm_fadeUp  { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:none} }
  @keyframes vm_scaleIn { from{opacity:0;transform:scale(0.9)}       to{opacity:1;transform:scale(1)} }
  @keyframes vm_shimmer { 0%{background-position:-400px 0} 100%{background-position:400px 0} }
  @keyframes vm_spin    { to{transform:rotate(360deg)} }
  @keyframes vm_spinR   { to{transform:rotate(-360deg)} }
  @keyframes vm_float   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  @keyframes vm_pulse   { 0%,100%{opacity:.35;transform:scale(1)} 50%{opacity:.7;transform:scale(1.08)} }
  @keyframes vm_lineGrow{ from{width:0} to{width:100%} }
`;

/* ── Quote banner ── */
export const bannerSx = {
  position: "relative",
  overflow: "hidden",
  background: `linear-gradient(135deg, ${colors.primary.dark} 0%, ${colors.primary.dark} 100%)`,
  py: { xs: 8, md: 11 },
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundImage: `radial-gradient(rgba(255,255,255,0.10) 1.5px, transparent 1.5px)`,
    backgroundSize: "26px 26px",
    pointerEvents: "none",
  },
};

export const bannerShimmerSx = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: 4,
  background: `linear-gradient(90deg,transparent,${colors.secondary.dark},${colors.secondary.main},${colors.secondary.light},${colors.secondary.main},${colors.secondary.dark},transparent)`,
  backgroundSize: "400px 100%",
  animation: "vm_shimmer 3s linear infinite",
};

export const bannerBottomLineSx = { display: "none" };

export const decoRingWrapSx = {
  position: "absolute",
  top: "-15%",
  right: "-5%",
  width: { xs: 0, md: 340 },
  height: { xs: 0, md: 340 },
  display: { xs: "none", md: "block" },
  pointerEvents: "none",
};

export const ring1Sx = {
  position: "absolute",
  inset: 0,
  borderRadius: "50%",
  border: `1px dashed rgba(255,255,255,0.1)`,
  animation: "vm_spin 30s linear infinite",
};

export const ring2Sx = {
  position: "absolute",
  inset: "20%",
  borderRadius: "50%",
  border: `1px dashed ${colors.secondary.main}30`,
  animation: "vm_spinR 20s linear infinite",
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

export const glowBlobSx = { display: "none" };

export const watermarkSx = {
  position: "absolute",
  bottom: "-5%",
  right: "-1%",
  fontFamily: typography.fontFamily.main,
  fontSize: { xs: "8rem", md: "14rem" },
  fontWeight: typography.fontWeight.extraBold,
  color: "white",
  opacity: 0.03,
  userSelect: "none",
  pointerEvents: "none",
  lineHeight: 1,
};

export const bannerLabelSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: typography.fontSize.xs,
  fontWeight: typography.fontWeight.bold,
  color: colors.secondary.main,
  letterSpacing: 3,
  textTransform: "uppercase",
  mb: 3,
};

export const quoteSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: { xs: typography.fontSize["2xl"], md: "2.8rem" },
  fontWeight: typography.fontWeight.bold,
  color: "white",
  lineHeight: 1.35,
  mb: 3,
  fontStyle: "italic",
};

export const quoteAuthorSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: typography.fontSize.xs,
  color: colors.secondary.main,
  letterSpacing: 2.5,
  textTransform: "uppercase",
};

export const quoteLineSx = {
  width: 60,
  height: 2,
  mx: "auto",
  mb: 3,
  background: `linear-gradient(90deg,transparent,${colors.secondary.main},transparent)`,
  animation: "vm_lineGrow .8s ease .4s both",
};

/* ── Grid section ── */
export const gridWrapSx = {
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

export const sectionHeadSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: { xs: typography.fontSize["2xl"], md: "2.6rem" },
  fontWeight: typography.fontWeight.bold,
  color: colors.primary.dark,
};

export const cardSx = (color, visible, delay) => ({
  position: "relative",
  overflow: "hidden",
  bgcolor: colors.background.paper,
  borderRadius: "18px",
  p: { xs: 3.5, md: 5 },
  border: `1px solid ${colors.divider}`,
  transition: "all 0.35s cubic-bezier(.34,1.2,.64,1)",
  animation: visible ? `vm_scaleIn 0.7s ease ${delay}s both` : "none",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: `0 24px 60px rgba(27,90,174,0.13), 0 0 0 1.5px ${color}44`,
    borderColor: `${color}44`,
    "& .pillar-icon-box": {
      bgcolor: color,
      transform: "rotate(8deg) scale(1.1)",
    },
    "& .pillar-icon": { color: "white" },
    "& .card-shimmer": { animation: "vm_shimmer .6s ease forwards" },
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    bgcolor: color,
  },
  /* shimmer overlay */
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "55%",
    left: "-80%",
    background:
      "linear-gradient(105deg,transparent 30%,rgba(255,255,255,0.45) 50%,transparent 70%)",
    zIndex: 5,
    pointerEvents: "none",
  },
  "&:hover::after": { animation: "vm_shimmer .6s ease forwards" },
});

export const cardNumSx = (color) => ({
  position: "absolute",
  bottom: -10,
  right: 10,
  fontFamily: typography.fontFamily.main,
  fontSize: "7rem",
  fontWeight: typography.fontWeight.extraBold,
  color,
  opacity: 0.06,
  lineHeight: 1,
  userSelect: "none",
});

export const iconBoxSx = (color) => ({
  width: 58,
  height: 58,
  borderRadius: "16px",
  bgcolor: `${color}18`,
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.3s ease",
});

export const cardTitleSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: typography.fontSize.lg,
  fontWeight: typography.fontWeight.bold,
  color: colors.primary.dark,
  mb: 0.6,
};

export const cardDescSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: typography.fontSize.sm,
  color: colors.text.secondary,
  lineHeight: 1.85,
};
