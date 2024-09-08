import { DisplayDataType, NasaParametersType } from '@/share/types';
import theme from '@/styles/muiTheme';
import { DetailsChartRegion } from '@/widgets';
import { Button, Dialog, DialogContent, ThemeProvider } from '@mui/material';
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
        {!!parameters && (
          <>
            <Button
              variant="contained"
              color="info"
              endIcon={<FaRegChartBar size={22} />}
              onClick={() => setOpenDetails(true)}
            >
              Подробнее
            </Button>
            <Dialog
              open={openDetails}
              onClose={() => setOpenDetails(false)}
              maxWidth="lg"
              PaperProps={{
                sx: {
                  overflowY: 'clip',
                },
              }}
            >
              <DialogContent
                sx={({ breakpoints }) => ({
                  overflowY: 'hidden',

                  width: '90vw',
                  [breakpoints.up('md')]: {
                    width: '40vw',
                  },
                  [breakpoints.down('md')]: {
                    height: '400px',
                  },
                  height: '500px',
                  p: 3,
                })}
              >
                <DetailsChartRegion parameters={parameters} />
              </DialogContent>
            </Dialog>
          </>
        )}
      </div>
    </ThemeProvider>
  );
};
export default MapPopup;
