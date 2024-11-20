import React from 'react'
import { View, Text ,StyleSheet, Alert } from 'react-native'
import { PieChart } from "react-native-gifted-charts";

// the is no seperate import package to create a donut chart..we need to use piechart props to create donut charts        
const DonutCharts = () => {
  //the data for the donut chart
    const pieData = [
        {value: 30, color: '#b01ac4', text: '20%'},// here the value is the chart value...the text will show above on the chart
        {value: 50, color: '#449416', text: '60%'},// color will be the particular pie area color
        {value: 20, color: '#ad740a', text: '20%'},
        {value: 30, color: '#c21723', text: '20%'}
    ];
    
     // event function to handle click events...(alert)

    const handlePress = (data: { value: number;  text: string }) => {
      if (data) {
        Alert.alert('Alert Check',` Label: ${data.text}\nValue: ${data.value}`);
      } else {
        Alert.alert('No data found');
      }
    };
    return(
        <View style={styles.container}>
            <Text style={styles.styleee}>Cost Distribution</Text>
            <PieChart
            donut //simply call donut to get a donut design in ourchart
            showText //will allow to display the text label
            textColor="black" // denotes the color of the text
            radius={160}// there is no width and height props in donut charts..so we use radius to the adjust the height and width
            textSize={20}// to increase or decrease the text size inside the chart
            showTextBackground //to visible the text background
            textBackgroundRadius={26}    //adjust the text background area  
            data={pieData}// to call the pie chart design inside the view
            onPress={handlePress}// to handle click events
            />
    </View>
    )
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  
    styleee: {
      fontSize: 20,
      fontStyle: "italic",
      fontWeight: "bold",
      alignItems: "center",
      textAlign: "center",
    },
  });
  

export default DonutCharts;