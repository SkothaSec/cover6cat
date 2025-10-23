import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Box,
  Divider,
  Chip,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { contact, cta } from "../../data";
import logo from "../../images/logo.png";
import { Services } from "../Services/Services";

const featureItems = [
  "Rapid response teams ready day or night",
  "Licensed, insured, and certified professionals",
  "Insurance claim support from start to finish",
];

export const CTA = () => (
  <Card
    elevation={12}
    sx={{
      overflow: "hidden",
      borderRadius: 5,
      border: "1px solid rgba(15, 23, 42, 0.6)",
      background:
        "linear-gradient(160deg, rgba(8, 18, 41, 0.98) 0%, rgba(4, 9, 24, 0.96) 60%, rgba(8, 5, 23, 0.94) 100%)",
    }}
  >
    <Stack
      direction={{ xs: "column", lg: "row" }}
      spacing={{ xs: 4, lg: 6 }}
      sx={{ p: { xs: 4, lg: 6 } }}
    >
      <Stack spacing={3} flex={1} alignItems="center" textAlign="center">
        {cta.logo ? (
          <Box
            sx={{
              width: 220,
              maxWidth: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CardMedia
              component="img"
              image={logo}
              alt={`${cta.title} logo`}
              sx={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                filter: "drop-shadow(0 18px 28px rgba(15, 23, 42, 0.5))",
              }}
            />
          </Box>
        ) : null}

        <Typography variant="h6" color="#60a5fa" fontWeight={600}>
          {cta.header}
        </Typography>

        <Typography variant="body1" sx={{ maxWidth: 600, color: "#cbd5f5" }}>
          {cta.text}
        </Typography>

        <Stack
          spacing={1.5}
          alignSelf="stretch"
          textAlign="left"
          sx={{ color: "#e2e8f0" }}
        >
          {featureItems.map((item) => (
            <Stack direction="row" spacing={1.5} alignItems="center" key={item}>
              <CheckCircleIcon sx={{ color: "#38bdf8" }} fontSize="small" />
              <Typography variant="body1">{item}</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Box
        sx={{
          flex: { lg: 0.9 },
          p: 4,
          borderRadius: 4,
          background:
            "linear-gradient(140deg, rgba(15, 23, 42, 0.85), rgba(30, 64, 175, 0.55))",
          border: "1px solid rgba(59, 130, 246, 0.35)",
          color: "#f8fafc",
        }}
      >
        <Typography variant="h5" fontWeight={600} mb={1}>
          Need help right now?
        </Typography>
        <Typography variant="body1" color="#cbd5f5" mb={3}>
          Free Damage Assessment 24/7
        </Typography>
        <Typography variant="body1" color="#cbd5f5" mb={3}>
          Serving Texas and Surrounding Areas
        </Typography>
        <Stack spacing={2}>
          <Stack
            direction="row"
            spacing={1.5}
            alignItems="center"
            sx={{
              borderRadius: 2,
              px: 2.5,
              py: 1.5,
              background: "rgba(8, 15, 40, 0.9)",
              border: "1px solid rgba(59, 130, 246, 0.35)",
            }}
          >
            <PhoneIcon sx={{ color: "#38bdf8" }} />
            <Box>
              <Typography variant="overline" color="#60a5fa">
                Call or text
              </Typography>
              <Typography variant="h6" color="#f8fafc">
                {contact.phone}
              </Typography>
            </Box>
          </Stack>

          <Stack
            direction="row"
            spacing={1.5}
            alignItems="center"
            sx={{
              borderRadius: 2,
              px: 2.5,
              py: 1.5,
              background: "rgba(8, 15, 40, 0.9)",
              border: "1px solid rgba(59, 130, 246, 0.35)",
            }}
          >
            <EmailIcon sx={{ color: "#38bdf8" }} />

            <Box>
              <Typography variant="overline" color="#60a5fa">
                Email us
              </Typography>
              <Typography variant="h6" color="#f8fafc">
                {contact.email}
              </Typography>
            </Box>
          </Stack>
        </Stack>

      </Box>
    </Stack>

    <Divider sx={{ borderColor: "rgba(148,163,184,0.25)" }} />

    <CardContent
      sx={{
        py: { xs: 3, md: 4 },
        px: { xs: 3, md: 5 },
        backgroundColor: "rgba(15,23,42,0.6)",
      }}
    >
      <Services variant="embedded" />
    </CardContent>

    <Divider sx={{ borderColor: "rgba(148,163,184,0.2)" }} />

    <CardContent
      sx={{
        py: 3,
        backgroundColor: "rgba(15,23,42,0.6)",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        {/*<Typography variant="caption" color="text.disabled">
          Accredidations
        </Typography>*/}
      </Stack>
    </CardContent>
  </Card>
);
