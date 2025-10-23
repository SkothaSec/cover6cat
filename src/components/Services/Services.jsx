import {
  Box,
  Stack,
  Typography,
  Paper,
  Divider,
  Avatar,
} from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";
import OpacityIcon from "@mui/icons-material/Opacity";
import ShieldIcon from "@mui/icons-material/Shield";
import HealingIcon from "@mui/icons-material/Healing";
import EngineeringIcon from "@mui/icons-material/Engineering";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { services } from "../../data";

const accentPalette = ["#38bdf8", "#7c3aed", "#f59e0b"];
const iconMap = {
  pack: ConstructionIcon,
  moisture: OpacityIcon,
  mitigation: ShieldIcon,
  remediation: HealingIcon,
  restoration: EngineeringIcon,
  public: AssignmentTurnedInIcon,
};

export const Services = ({ variant = "standalone" }) => {
  const embedded = variant === "embedded";

  return (
    <Box
      sx={{
        background: embedded
          ? "transparent"
          : "linear-gradient(160deg, rgba(15,23,42,0.85), rgba(30,64,175,0.45))",
        borderRadius: embedded ? 0 : 4,
        border: embedded ? "none" : "1px solid rgba(148,163,184,0.25)",
        px: { xs: 2, md: embedded ? 0 : 4 },
        py: { xs: 2, md: embedded ? 0 : 4 },
      }}
    >
      <Stack
        spacing={1.25}
        textAlign="center"
        alignItems="center"
        sx={{ mb: { xs: 3, md: 4 } }}
      >
        <Typography
          variant="h5"
          fontWeight={700}
          letterSpacing="-0.02em"
          color="#f8fafc"
        >
          Emergency Services We Provide
        </Typography>
        <Typography variant="body2" color="#cbd5f5" sx={{ maxWidth: 540 }}>
          Call for more information
        </Typography>
      </Stack>

      <Box
        sx={{
          display: "grid",
          gap: { xs: 2, md: 3 },
          gridTemplateColumns: {
            xs: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(2, minmax(0, 1fr))",
            lg: "repeat(3, minmax(0, 1fr))",
          },
          justifyItems: "center",
        }}
      >
        {services.map((service, index) => {
          const accent = accentPalette[index % accentPalette.length];
          const Icon = iconMap[service.id] ?? ConstructionIcon;

          return (
            <Paper
              key={service.id}
              elevation={0}
              sx={{
                width: "100%",
                maxWidth: 360,
                minHeight: 220,
                px: { xs: 2.5, md: 3 },
                py: { xs: 2.5, md: 3 },
                borderRadius: 3,
                background: "rgba(8, 13, 31, 0.88)",
                border: `1px solid ${accent}33`,
                color: "#f1f5f9",
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
                transition: "transform 0.2s ease, border-color 0.2s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  borderColor: `${accent}66`,
                },
              }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Avatar
                  sx={{
                    width: 48,
                    height: 48,
                    bgcolor: `${accent}22`,
                    color: accent,
                  }}
                >
                  <Icon />
                </Avatar>
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  letterSpacing="-0.01em"
                >
                  {service.title}
                </Typography>
              </Stack>

              <Divider sx={{ borderColor: "rgba(148,163,184,0.2)" }} />

              <Typography variant="body2" color="#cbd5f5">
                {service.description}
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Box>
  );
};
