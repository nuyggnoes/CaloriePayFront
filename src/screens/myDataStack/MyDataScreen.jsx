import { Text, View } from 'react-native';
import MainWrapper from '../../components/commons/layout/wrapper/MainWrapper';
import {
  LineChart,
  BarChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

export default function MyDataScreen() {
  const chartConfig = {
    backgroundColor: 'white',
    backgroundGradientFrom: 'white',
    backgroundGradientTo: 'white',
    decimalPlaces: 1,
    color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };
  const data = {
    labels: ['11.09', '11.16', '11.23', '11.30', '12.7', '12.14'],
    datasets: [
      {
        data: [64.5, 64, 64, 63.6, 63, 65],
        strokeWidth: 4, // optional
      },
    ],
    legend: ['체중 변화'], // optional
  };
  return (
    <MainWrapper>
      <Text>MyDataScreen</Text>
      <View>
        <Text>Bezier Line Chart</Text>
        <LineChart
          data={data}
          width={350}
          height={220}
          yAxisSuffix="kg"
          chartConfig={chartConfig}
          // bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </MainWrapper>
  );
}
