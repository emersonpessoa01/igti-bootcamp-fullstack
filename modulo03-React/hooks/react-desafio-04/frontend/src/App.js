import React from 'react';
import * as api from "./components/api/apiService"


export default function App() {
  const testApi = async()=>{
    const res = await api.getAllGrades();
    console.log(res);
  }
  testApi();

  return <p>Olá hooks</p>;
}
