import React, { useState, useEffect } from 'react';
import { SafeAreaView} from 'react-native';
import styles from './styles';
import * as Animatable from 'react-native-animatable';
import CurrentPrice from './CurrentPrice';
import HistoryGraphic from './HistoryGraphic';
import QuotationList from './QuotationsList';
import QuotationItems from './QuotationsList/QuotationsItems';


const addZeroLeft = (number) => {
  if(number <= 9){
    number = String(number).padStart(2, '0');
    return number; 
  }
  return number;
}

const url  = (qtdDays) => {
  const objDate = new Date(); // var to manipulate Dates format
  const listLastDays = qtdDays;

  // format api -> 2001-04-08
  const endDate = `${objDate.getFullYear()}-${addZeroLeft(objDate.getMonth()+1)}-${addZeroLeft(objDate.getDay())}`;
  
  objDate.setDate(objDate.getDate() - listLastDays);

  const startDate = `${objDate.getFullYear()}-${addZeroLeft(objDate.getMonth()+1)}-${addZeroLeft(objDate.getDay())}`;

  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`
}

async function getListCoins(url){
  let response = await fetch(url);
  let returnApi = await response.json();
  let selectListQuotations = returnApi.bpi;
  const queryCoinsList = Object.keys(selectListQuotations).map((key) => {
    return{
      data: key.split("-").reverse().join("/"), // changing - by /
      value: selectListQuotations[key]
    }
  })
  let data = queryCoinsList.reverse();
  return data;
}

async function getPriceCoinsGraphic(url){
  let responseG = await fetch(url);
  let returnApiG = await responseG.json();
  let selectListQuotationsG = returnApiG.bpi;
  const queryCoinsListG = Object.keys(selectListQuotationsG).map((key) => {
    return selectListQuotationsG[key];
  })
  let dataG = queryCoinsListG;
  return dataG;
}

const Main = () => {

    const [coinList, setCoinList] = useState([]);
    const [coinGraphicList, setCoinGraphicList] = useState([0]);
    const [days, setDays] = useState(30);
    const [updateData, setUpdateData] = useState(true);

    function updateDay(number){
      setDays(number);
      setUpdateData(true);
    }

    useEffect(() => {
      getListCoins(url(days)).then((data) => {setCoinList(data)});
      getPriceCoinsGraphic(url(days)).then((dataG) => {setCoinGraphicList(dataG)});

      if (updateData){
        setUpdateData(false);
      }
    }, [updateData])

    return(
      <SafeAreaView style={styles.mainContainer}>
        <Animatable.Image
          source={require("../../../assets/btc.png")}
          style={styles.mainLogo}
          resizeMode="contain"
        />
        <CurrentPrice/>
        <HistoryGraphic />
        <QuotationList />
        <QuotationItems />
      </SafeAreaView>
    )
}

export default Main;