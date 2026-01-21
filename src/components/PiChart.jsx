import { PieChart } from '@mui/x-charts/PieChart';

export default function PieChartCom() {
  return (
    <PieChart
      series={[
        {
          data: [
            { value:10, label: 'HTML', labelMarkType: 'circle' },
            { value:10, label: 'CSS', labelMarkType: 'circle',},
            { value:6, label: 'JavaScript', labelMarkType: 'circle' },
            { value:5, label: 'ReactJs', labelMarkType: 'circle' },
            { value:5, label: 'ExpressJs', labelMarkType: 'circle' },
            { value:4, label: 'NextJs', labelMarkType: 'circle' },
            { value:4, label: 'Shopify', labelMarkType: 'circle'},
          ],
        },
      ]}
      width={320}
      height={320}
      className='w-40! h-40! lg:w-50! lg:h-50! xl:w-80! xl:h-80!'
    />
  );
}