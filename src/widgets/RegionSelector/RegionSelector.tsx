import { AccordionButton } from '@/share/UI';
import { useQueryParams } from '@/share/hooks';
import { useAppDispatch } from '@/store';
import { setChartsData } from '@/store/chartsDataSlice/chartsDataSlice';
import { FC, useEffect } from 'react';
import styles from './regionSelector.module.scss';
import { useTranslation } from 'react-i18next';

const RegionSelector: FC = () => {
  const dispatch = useAppDispatch();
  const { queryParams, updateQueryParam } = useQueryParams();
  const { t } = useTranslation();

  const handaleSelectRegion = (region: 'SFO' | 'DFO') => {
    dispatch(setChartsData(region));
    updateQueryParam('region', region);
  };

  useEffect(() => {
    handaleSelectRegion((queryParams?.region as 'SFO' | 'DFO') || 'SFO');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles['region-selector']}>
      <AccordionButton
        onClick={() => handaleSelectRegion('SFO')}
        disabled={queryParams?.region === 'SFO'}
      >
        {t('naigate.SFO')}
      </AccordionButton>
      <AccordionButton
        onClick={() => handaleSelectRegion('DFO')}
        disabled={queryParams?.region === 'DFO'}
      >
        {t('naigate.DFO')}
      </AccordionButton>
    </div>
  );
};
export default RegionSelector;
