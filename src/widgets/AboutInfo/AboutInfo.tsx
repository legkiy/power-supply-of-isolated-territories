import { useTranslation } from 'react-i18next';
import { FC, useState } from 'react';
import { Stack, Typography, useMediaQuery } from '@mui/material';
import { IoInformationCircleOutline } from 'react-icons/io5';
import theme from '@/styles/muiTheme';

const AboutInfo: FC = () => {
  const { t } = useTranslation();
  const [showInfo, setShowInfo] = useState(false);

  const matchMD = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Stack spacing={2}>
      <Typography
        variant="h1"
        fontWeight={700}
        sx={({ palette, typography }) => ({
          color: palette.gold.main,
          cursor: matchMD ? 'pointer' : 'text',
          fontSize: matchMD ? 18 : typography.h1.fontSize,
        })}
        onClick={() => (matchMD ? setShowInfo((prev) => !prev) : null)}
      >
        {t('title')}
        {matchMD && (
          <sup>
            <IoInformationCircleOutline />
          </sup>
        )}
      </Typography>
      {(!matchMD || showInfo) && (
        <Typography
          variant="subtitle1"
          sx={({ typography }) => ({
            fontSize: matchMD ? 14 : typography.subtitle1.fontSize,
          })}
        >
          {t('description')}
        </Typography>
      )}
    </Stack>
  );
};
export default AboutInfo;
