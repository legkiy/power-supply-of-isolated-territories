import { useActions, useAppSelector } from '@/store';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@mui/material';
import { FC, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown } from 'react-icons/fa6';

const MapControlLayers: FC = () => {
  const { t } = useTranslation();
  const layers = useAppSelector((store) => store.map.layers);
  const actions = useActions();

  const handaleToggleLayer = (
    e: MouseEvent<HTMLElement, globalThis.MouseEvent>,
    name: string
  ) => {
    e.stopPropagation();
    e.preventDefault();
    actions.toggleLayer(name);
  };

  return (
    <Card
      sx={{ position: 'absolute', zIndex: 1000, right: 60, top: 10 }}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <Accordion disableGutters elevation={0}>
        <AccordionSummary
          sx={{
            margin: '0 !important',
            minHeight: 0,
            '& .MuiAccordionSummary-content': {
              my: '10px !important',
            },
          }}
          expandIcon={<FaChevronDown />}
        >
          <Typography fontSize={14}>{t('map.layers')}</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: 'flex',
            flexDirection: 'column',
            py: 1,
            pt: 0,
          }}
        >
          {layers.map((el) => (
            <FormControlLabel
              key={el.name}
              label={t(`map.${el.name}`, {
                defaultValue: el.name,
              })}
              sx={{
                fontSize: 14,
              }}
              onClick={(e) => handaleToggleLayer(e, el.name)}
              control={
                <Checkbox
                  checked={el.active}
                  sx={{
                    p: 0.8,
                  }}
                />
              }
            />
          ))}
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};
export default MapControlLayers;
