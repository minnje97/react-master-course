import {minuteState,hourSelector}from "./atoms";
import {useRecoilState} from "recoil";
import ReactApexChart from "react-apexcharts";

function App() {
  const [minutes, setMinutes]=useRecoilState(minuteState);
  const [hours, setHours]=useRecoilState(hourSelector);
  const onMinutesChange=(event:React.FormEvent<HTMLInputElement>)=>{
    setMinutes(+event.currentTarget.value);
  }
  const onHoursChange=(event:React.FormEvent<HTMLInputElement>)=>{
    setHours(+event.currentTarget.value);
  }
  return (
  <div>
    <input value={minutes} onChange={onMinutesChange} type="number" placeholder="Minutes"/>
    <input type="number" onChange={onHoursChange} value={hours} placeholder="Hours"/>
  </div>
  )
}

export default App;