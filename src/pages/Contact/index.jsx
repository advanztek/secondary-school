import { useEffect, useState } from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { colors, typography } from '../../theme';
import {
    keyframes, heroWrapSx, shimmerLineSx, decoRingWrapSx, ring1Sx, ring2Sx,
    ringDotSx, glowBlobSx, watermarkSx, crumbHomeSx, crumbActiveSx,
    labelBarSx, labelTextSx, heroTitleSx, heroSubSx, contentSx,
    infoTitleSx, infoIconBoxSx, infoLabelSx, infoValueSx,
    formCardSx, formTitleSx, formSubSx, inputLabelSx, inputSx,
    submitBtnSx, submitTextSx,
} from './styles';

const contactInfo = [
    { icon: LocationOnIcon, label: 'Our Address', value: 'Aliade, Benue State, Nigeria', color: colors.primary.main },
    { icon: PhoneIcon, label: 'Phone', value: '+234 800 000 0000', color: colors.secondary.dark },
    { icon: EmailIcon, label: 'Email', value: 'info@pamsset.edu.ng', color: colors.primary.dark },
    { icon: AccessTimeIcon, label: 'Office Hours', value: 'Monday – Friday: 7:30am – 4:30pm', color: '#2E7D32' },
];

const fields = [
    { name: 'name', label: 'Full Name *', type: 'text', placeholder: 'e.g. Amina Okafor' },
    { name: 'email', label: 'Email Address *', type: 'email', placeholder: 'you@example.com' },
    { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+234 800 000 0000' },
    { name: 'subject', label: 'Subject', type: 'text', placeholder: 'e.g. Admissions Enquiry' },
];

const ContactPage = () => {
    const [visible, setVisible] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = () => { if (form.name && form.email && form.message) setSubmitted(true); };

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
                <Typography sx={watermarkSx}>CONTACT</Typography>

                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                    <Stack direction="row" alignItems="center" gap={1} sx={{ mb: 3, animation: visible ? 'ct_fadeUp .6s ease .1s both' : 'none' }}>
                        <Box component={Link} to="/" sx={crumbHomeSx}>Home</Box>
                        <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: colors.secondary.main }} />
                        <Typography sx={crumbActiveSx}>Contact Us</Typography>
                    </Stack>

                    <Stack direction="row" alignItems="center" gap={1.5} sx={{ mb: 2, animation: visible ? 'ct_fadeUp .6s ease .2s both' : 'none' }}>
                        <Box sx={labelBarSx} />
                        <Typography sx={labelTextSx}>Get In Touch</Typography>
                    </Stack>

                    <Typography sx={{ ...heroTitleSx, animation: visible ? 'ct_fadeUp .6s ease .3s both' : 'none' }}>
                        We'd Love to<br />Hear From You.
                    </Typography>
                    <Typography sx={{ ...heroSubSx, animation: visible ? 'ct_fadeUp .6s ease .4s both' : 'none' }}>
                        Whether you have a question about admissions, want to arrange a school visit or just want to say hello — our team is ready to help.
                    </Typography>
                </Container>
            </Box>

            {/* ── Content ── */}
            <Box sx={contentSx}>
                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1.6fr' }, gap: { xs: 6, md: 8 }, alignItems: 'start' }}>

                        {/* Left — info */}
                        <Box sx={{ animation: visible ? 'ct_fadeLeft .8s ease .2s both' : 'none' }}>
                            <Typography sx={infoTitleSx}>Our Contact Details</Typography>
                            <Box sx={{ width: 36, height: 3, bgcolor: colors.secondary.main, mb: 3, borderRadius: 2 }} />

                            <Stack gap={3} sx={{ mb: 5 }}>
                                {contactInfo.map(({ icon: Icon, label, value, color }) => (
                                    <Stack key={label} direction="row" alignItems="flex-start" gap={2}>
                                        <Box sx={infoIconBoxSx(color)}>
                                            <Icon sx={{ fontSize: 20, color }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={infoLabelSx(color)}>{label}</Typography>
                                            <Typography sx={infoValueSx}>{value}</Typography>
                                        </Box>
                                    </Stack>
                                ))}
                            </Stack>

                            {/* Map */}
                            <Box sx={{ borderRadius: '16px', overflow: 'hidden', height: 220, border: `1.5px solid ${colors.divider}` }}>
                                <iframe title="Pamsset School Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7286483398!2d3.4212!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjUnNDEuMiJOIDPCsDI1JzE2LjMiRQ!5e0!3m2!1sen!2sng!4v1600000000000!5m2!1sen!2sng"
                                    width="100%" height="100%" style={{ border: 0, display: 'block' }}
                                    allowFullScreen loading="lazy" />
                            </Box>
                        </Box>

                        {/* Right — form */}
                        <Box sx={formCardSx(visible)}>
                            {submitted ? (
                                <Box sx={{ textAlign: 'center', py: 6 }}>
                                    <Box sx={{ width: 72, height: 72, borderRadius: '50%', bgcolor: `#2E7D3222`, border: '2px solid #2E7D32', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 3 }}>
                                        <CheckCircleIcon sx={{ fontSize: 36, color: '#2E7D32' }} />
                                    </Box>
                                    <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: typography.fontSize['2xl'], fontWeight: typography.fontWeight.bold, color: colors.primary.dark, mb: 1.5 }}>
                                        Message Sent! 🎉
                                    </Typography>
                                    <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: typography.fontSize.base, color: colors.text.secondary, lineHeight: 1.8, mb: 3 }}>
                                        Thank you for reaching out. A member of our team will get back to you within 1–2 business days.
                                    </Typography>
                                    <Box onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                                        sx={{ display: 'inline-block', px: 3, py: 1.5, bgcolor: colors.primary.main, color: 'white', borderRadius: '8px', cursor: 'pointer', fontFamily: typography.fontFamily.main, fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.bold, transition: 'all .25s ease', '&:hover': { bgcolor: colors.primary.light } }}>
                                        Send Another Message
                                    </Box>
                                </Box>
                            ) : (
                                <>
                                    <Typography sx={formTitleSx}>Send Us a Message</Typography>
                                    <Typography sx={formSubSx}>We typically respond within 1–2 business days.</Typography>

                                    <Stack gap={2.5}>
                                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                                            {fields.map(field => (
                                                <Box key={field.name}>
                                                    <Typography component="label" sx={inputLabelSx}>{field.label}</Typography>
                                                    <Box component="input" type={field.type} name={field.name}
                                                        value={form[field.name]} onChange={handleChange}
                                                        placeholder={field.placeholder} sx={inputSx} />
                                                </Box>
                                            ))}
                                        </Box>

                                        <Box>
                                            <Typography component="label" sx={inputLabelSx}>Message *</Typography>
                                            <Box component="textarea" name="message" value={form.message}
                                                onChange={handleChange} placeholder="Tell us how we can help you..."
                                                rows={5} sx={{ ...inputSx, resize: 'vertical' }} />
                                        </Box>

                                        <Box onClick={handleSubmit} sx={submitBtnSx}>
                                            <SendIcon sx={{ fontSize: 18, color: colors.primary.dark }} />
                                            <Typography sx={submitTextSx}>Send Message</Typography>
                                        </Box>

                                        <Typography sx={{ fontFamily: typography.fontFamily.main, fontSize: '0.7rem', color: colors.text.secondary, textAlign: 'center' }}>
                                            Your information is private and will never be shared.
                                        </Typography>
                                    </Stack>
                                </>
                            )}
                        </Box>

                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default ContactPage;