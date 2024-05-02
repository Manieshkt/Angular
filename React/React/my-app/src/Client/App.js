import { useState, useEffect } from 'react';
import { Data } from './Data';
import { Items } from './Items';

function App() {

  const [data, setData] = useState([])
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/data')
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        else {
          const data = await response.json()
          setData(data)
          console.log(data)
        }
      }
      catch (err) {
        throw new Error("Error Fetchin Data" + err)
      }
    }
    fetchData()

    const fetchItems = async () => {
      const response = await fetch('http://localhost:5000/api/items')
      try {
        if (!response.ok) {
          throw new Error("Error fetching Items")
        }
        else {
          const item = await response.json()
          setItems(item)
          console.log(item)
        }
      }
      catch (err) {
        throw new Error("Error Fetchin Items" + err)
      }
    }
    fetchItems()
  }, [])

  const handleSend = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/sendmail', { method: 'POST' })
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
    }
    catch (error) {
      console.log('Error sending e-mail', error)
    }
  }

  return (
    <div className="App">
      <h1>Hello World !</h1>
      <h1>Hi</h1>
      <Data data={data} />
      <div>
        <Items items={items} />
      </div>
      <button onClick={handleSend} >Send Mail</button>
    </div>
  );
}

export default App;
