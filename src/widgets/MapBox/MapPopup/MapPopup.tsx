import { DisplayDataType, NasaParametersType } from '@/share/types';
import theme from '@/styles/muiTheme';
import { DetailsChartRegion } from '@/widgets';
import { Dialog, DialogContent, Link, ThemeProvider } from '@mui/material';
import { FC, useState } from 'react';
import { FaRegChartBar } from 'react-icons/fa';

interface MapPopupProps {
  description: string;
  data?: DisplayDataType;
  parameters: NasaParametersType;
}

const MapPopup: FC<MapPopupProps> = ({ description, data, parameters }) => {
  const [openDetails, setOpenDetails] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        {data?.details && (
          <>
            <Link
              component="button"
              // endIcon={<FaRegChartBar />}
              color="inherit"
              variant="body1"
              sx={{
                display: 'flex',
                gap: 1,
              }}
              onClick={() => setOpenDetails(true)}
            >
              Подробнее
              <FaRegChartBar size={22} />
            </Link>
            <Dialog
              open={openDetails}
              onClose={() => setOpenDetails(false)}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogContent>
                <DetailsChartRegion data={data} parameters={parameters} />
              </DialogContent>
            </Dialog>
          </>
        )}
      </div>
    </ThemeProvider>
  );
};
export default MapPopup;
