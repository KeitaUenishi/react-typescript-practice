import React from "react";

type FormPropsType = {
  setCity : React.Dispatch<React.SetStateAction<string>>;
  getWeather : (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = (props: FormPropsType) => {

  return(
    <form onSubmit={props.getWeather}>
      {/* eは「イベントパラメーター」の略 */}
      {/* 下のコードは、eをsetCityへ=>を使って渡し、setCity内でvalueへアクセスしている */}
      <input type="text" name="city" placeholder="都市名" onChange={e=>props.setCity(e.target.value)}/>
      <button type="submit">Get Weather</button>
    </form>
  )
}


export default Form;
