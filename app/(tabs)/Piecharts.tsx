import React from 'react';
import { View, Alert ,Text ,StyleSheet} from 'react-native';
import { PieChart } from 'react-native-gifted-charts';

const Piecharts = () => {
// pie data will be the datas to be shown in the piechart
  const pieData = [
    { value: 30, label: 'Refined Sugar', color: 'green' }, // value was an piechart value of each label
    { value: 41, label: 'Raw Sugar', color: 'red' },//label is to display the chat label
    { value: 45, label: 'Molasses', color: 'yellow' },//color denotes..the particular area color of the pie chart
  ];
  
  //function to handle the click events (alert)
  const handlePiePress = (item: any) => {
    Alert.alert(`Alert Check: ${item.label}`, `Value: ${item.value}`);
  };



  return (
    <View style={styles.container}>
         <Text style={styles.styleee}>Revenue Breakdown</Text>
      <PieChart
        data={pieData}// calling above pirchart data
        strokeWidth={2}//stoke width generate a clear line between the charts
        strokeColor='white'//color of the stoke line
        showText={true} //allow to show text inside the chart
        textColor='white'// color of the text inside the pie chat
        showTooltip //while clicking on the chart..will displays a little value popup
        textSize={20}   //text size of the chart label  
        showValuesAsLabels // to schow the values inside the charts
        // externalLabelComponent={}
        radius={150} //to adijust height and width..here we use radius
        innerRadius={60}//inside radius of the pie chart
        onPress={handlePiePress} //calling above function to perform click events
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
  

export default Piecharts;
