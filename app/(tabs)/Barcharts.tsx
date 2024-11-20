import React from 'react';
import { View, StyleSheet, Alert ,Text} from 'react-native';
import { BarChart } from 'react-native-gifted-charts';

const Barcharts = () => {
  //data for bar chart
  const barData = [
    { value: 50, label: 'Line 1', frontColor: '#fac907' },//value uwas taken by y axis in the chart. label will be the x axis
    { value: 80, label: 'Line 2', frontColor: '#20c72b' },//the fontcolor will be the colour of the each bars in barchart
    { value: 60, label: 'Line 3', frontColor: '#F44336' },
    { value: 90, label: 'Line 4', frontColor: '#20c72b' },
    { value: 70, label: 'Line 5', frontColor: '#fac907' },
  ];

  // This is the fuction to handle click events..altert the values of the chart while clicking the bar
  const handlePress = (data: { value: number;  label: string }) => {
    if (data) {
      Alert.alert('Alert Check',` Label: ${data.label}\nValue: ${data.value}`);
    } else {
      Alert.alert('No data found');
    }
  };

  return (
    <View style={styles.container}>
        <Text style={styles.styleee}>Capacity Utilization</Text>
      <BarChart
        data={barData}//calling above bar data here
        barWidth={32}//to adjust the width of the bar
        noOfSections={4}//it will be the background lines..if 4 there will be 4 lines
        barBorderRadius={5}//the radius of the whole bar
        yAxisThickness={1} //thickness of y axis line
        xAxisThickness={1} //thickness of x asis line
        yAxisLabelSuffix='%' //to include the percentage symbol in y axis
        onPress={handlePress} //calling click event function
        
        isAnimated// give formal basic animation to barchart
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  styleee: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
  }
});

export default Barcharts;
