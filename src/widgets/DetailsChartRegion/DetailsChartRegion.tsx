import { Box, Button, Dialog } from '@mui/material';
import { FC, useState } from 'react';
import { DisplayDataType, NasaParametersType } from '@/share/types';

interface DetailsChartRegionProps {
  data: DisplayDataType;
  parameters: NasaParametersType;
}
const DetailsChartRegion: FC<DetailsChartRegionProps> = ({ data , parameters}) => {
  const { details } = data;
  const [openDetails, setOpenDetails] = useState(false);
  console.log(parameters);

  return (
    <Box>
      <Button color="success" variant="contained">
        tes
      </Button>
    </Box>
  );
};
export default DetailsChartRegion;
