import { useState } from "react";
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import './App.css';

type ResultStateType = {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
}

function App() {
  // city = state(入力データを一時的に保管する場所)
  // setCity = stateにデータを書き込んだり操作したりする
  const [city, setCity] = useState<string>("");
  const [results, setResults] = useState<ResultStateType>({
    country:"",
    cityName:"",
    temperature:"",
    conditionText:"",
    icon:""
  });

  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`http://api.weatherapi.com/v1/current.json?key=1a4ecd8f9cdb482994d41706210210&q=${city}&aqi=noResponse Code`)
    .then(res => res.json())
    .then(data => {
      setResults({
        country: data.location.country,
        cityName: data.location.name,
        temperature: data.current.temp_c,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon
      })
    })
  }
  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form setCity={setCity} getWeather={getWeather} />
        <Results results={results} />
      </div>
    </div>
  );
}

export default App;
