import { AppBar, Box, Toolbar } from '@mui/material';
import { useTranslation } from 'react-i18next';

const MuiLayout = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <AppBar position="absolute" sx={{ height: 60 }}>
        <Toolbar>
          {t('ISEM')}</Toolbar>
      </AppBar>
    </Box>
  );
};
export default MuiLayout;
