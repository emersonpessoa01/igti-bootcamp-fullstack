import React from 'react';
import * as api from "./components/api/ApiService"

export default function App() {
  //console.log(api.getAllGrades())
  const testApi = async()=>{
    const res = await api.getAllGrades();
    console.log(res)
  }
    testApi()
  return (
    <div>
      Olá Hooks
    </div>
  )
}
