import { useSelector, useStore } from 'react-redux';
import { IRootState } from '../../../store';

interface Props {}
const EmissionsChart = (props: Props) => {
  const { emissionsData } = useSelector((state: IRootState) => state.chartData);

  return <div>EmissionsChart</div>;
};
export default EmissionsChart;
