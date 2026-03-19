import { colors, typography } from "../../theme";

export const keyframes = `
  @keyframes ct_fadeUp    { from{opacity:0;transform:translateY(36px)}  to{opacity:1;transform:none} }
  @keyframes ct_fadeLeft  { from{opacity:0;transform:translateX(-40px)} to{opacity:1;transform:none} }
  @keyframes ct_fadeRight { from{opacity:0;transform:translateX(40px)}  to{opacity:1;transform:none} }
  @keyframes ct_shimmer   { 0%{background-position:-400px 0} 100%{background-position:400px 0} }
  @keyframes ct_pulse     { 0%,100%{box-shadow:0 0 0 0 ${colors.secondary.main}44} 50%{box-shadow:0 0 0 10px ${colors.secondary.main}00} }
  @keyframes ct_spin      { to{transform:rotate(360deg)} }
  @keyframes ct_spinR     { to{transform:rotate(-360deg)} }
`;

/* ── Hero ── */
export const heroWrapSx = {
  position: "relative",
  overflow: "hidden",
  background: `linear-gradient(135deg, ${colors.primary.dark} 0%, ${colors.primary.main} 70%, ${colors.secondary.main}0F 100%)`,
  py: { xs: 10, md: 13 },
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
  animation: "ct_shimmer 4s linear infinite",
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
  animation: "ct_spin 28s linear infinite",
};

export const ring2Sx = {
  position: "absolute",
  inset: "22%",
  borderRadius: "50%",
  border: `1px dashed ${colors.secondary.main}28`,
  animation: "ct_spinR 18s linear infinite",
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
};

export const crumbActiveSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: typography.fontSize.xs,
  color: colors.secondary.main,
  fontWeight: typography.fontWeight.semiBold,
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
  fontSize: { xs: typography.fontSize["3xl"], md: "3.6rem" },
  fontWeight: typography.fontWeight.extraBold,
  color: "white",
  lineHeight: 1.15,
  mb: 1.5,
};

export const heroSubSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: typography.fontSize.base,
  color: "rgba(255,255,255,0.55)",
  lineHeight: 1.9,
  maxWidth: 500,
};

/* ── Content section ── */
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

/* ── Info side ── */
export const infoTitleSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: { xs: typography.fontSize.xl, md: typography.fontSize["2xl"] },
  fontWeight: typography.fontWeight.bold,
  color: colors.primary.dark,
  mb: 1,
};

export const infoIconBoxSx = (color) => ({
  width: 44,
  height: 44,
  borderRadius: "12px",
  bgcolor: `${color}18`,
  border: `1px solid ${color}33`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
});

export const infoLabelSx = (color) => ({
  fontFamily: typography.fontFamily.main,
  fontSize: typography.fontSize.xs,
  fontWeight: typography.fontWeight.bold,
  color,
  letterSpacing: 1,
  textTransform: "uppercase",
  mb: 0.3,
});

export const infoValueSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: typography.fontSize.sm,
  color: colors.text.primary,
  lineHeight: 1.6,
};

/* ── Form card ── */
export const formCardSx = (visible) => ({
  bgcolor: colors.background.paper,
  borderRadius: "20px",
  p: { xs: 3, md: 5 },
  border: `1.5px solid ${colors.divider}`,
  boxShadow: "0 8px 40px rgba(27,90,174,0.08)",
  animation: visible ? "ct_fadeRight .8s ease .3s both" : "none",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    /* gradient top bar instead of flat gold */
    background: `linear-gradient(90deg,${colors.primary.dark},${colors.primary.main},${colors.secondary.main})`,
  },
});

export const formTitleSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: typography.fontSize["2xl"],
  fontWeight: typography.fontWeight.bold,
  color: colors.primary.dark,
  mb: 0.5,
};

export const formSubSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: typography.fontSize.sm,
  color: colors.text.secondary,
  mb: 3.5,
};

export const inputLabelSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: typography.fontSize.xs,
  fontWeight: typography.fontWeight.semiBold,
  color: colors.text.primary,
  mb: 0.8,
  letterSpacing: 0.5,
  display: "block",
};

export const inputSx = {
  fontFamily: "inherit",
  fontSize: typography.fontSize.sm,
  color: colors.text.primary,
  bgcolor: colors.background.default,
  border: `1.5px solid ${colors.divider}`,
  borderRadius: "8px",
  px: 2,
  py: 1.5,
  width: "100%",
  outline: "none",
  display: "block",
  transition: "border-color .25s ease, box-shadow .25s ease",
  "&:focus": {
    borderColor: colors.primary.main,
    boxShadow: `0 0 0 3px ${colors.primary.main}18`,
  },
};

export const submitBtnSx = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 1.5,
  bgcolor: colors.secondary.main,
  borderRadius: "10px",
  py: 2,
  cursor: "pointer",
  transition: "all .25s ease",
  animation: "ct_pulse 2.5s ease infinite",
  "&:hover": {
    bgcolor: colors.secondary.light,
    transform: "translateY(-3px)",
    boxShadow: `0 12px 32px ${colors.secondary.main}44`,
  },
};

export const submitTextSx = {
  fontFamily: typography.fontFamily.main,
  fontSize: typography.fontSize.base,
  fontWeight: typography.fontWeight.bold,
  color: colors.primary.dark,
};
