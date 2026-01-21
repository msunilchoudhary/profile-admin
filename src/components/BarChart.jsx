import Box from '@mui/material/Box';
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [.6, 3000, 2000, 2780, 1890, 2390, 3490];
// const pData = ["", 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'E-Trade',
  'Centaur Web',
  'Afycon',
  'Marg ERP',
  'OM Logic ',
  'Digics',
  'Marg Books',
];

export default function BarChartCom() {
  return (
    <Box sx={{ width: '100%', height: 300 }}>
      <BarChart
        series={[
          // { data: pData, label: 'pv', id: 'pvId', stack: 'total' },
          { data: uData, label: 'uv', id: 'uvId', stack: 'total' },
        ]}
        xAxis={[{ data: xLabels, height: 28 }]}
        yAxis={[{ width: 50 }]}
      />
    </Box>
  );
}