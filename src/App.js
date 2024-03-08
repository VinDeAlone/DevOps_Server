import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getAllDemos, createDemo } from './Redux/Actions/demoActions'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

function App() {

  let dispatch = useDispatch()

  const [data, setData] = useState({
    name: "",
    age: -1
  })

  let list = useSelector(state => state.demoReducer)

  useEffect(() => {
    dispatch(getAllDemos())
  },[])

  let refreshFun = () => {
    dispatch(getAllDemos())
  }

  let postDemo = () => {
    dispatch(createDemo(data))
  }

  return (
    <div>
      <div className='text-center' style={{ border: "2px solid black", margin: "20px" }}>
        Vinayak
      </div>
      <div style={{ margin: "20px" }}>
        <button className='btn btn-primary' onClick={refreshFun}>Refresh</button>
        <div>
          <div>
            <span style={{margin : "3px", color : "red"}}>Post New Demo : :</span>
            <b style={{margin : "3px"}}>Name : </b>
            <input style={{margin : "3px"}} type='text' placeholder='name' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
            <b style={{margin : "3px"}}>Age : </b>
            <input style={{margin : "3px"}} type='number' placeholder='age' value={data.age} onChange={(e) => setData({ ...data, age: e.target.value })} />
            <button style={{margin : "3px"}} className='btn btn-primary' onClick={postDemo}>post</button>
          </div>
        </div>
      </div>
      <div>
        <div className='text-center' style={{color : "red", fontSize : "40px"}}><b><em>All Demos</em></b></div>
        {list.map((e) => <div style={{ margin: "10px", border: "2px solid orange", padding: "5px" }}>
          <div className='text-center'><b>User : {e.id}</b></div>
          <div><b>Name</b> : {e.name}</div>
          <div><b>Age</b> : {e.age}</div>
        </div>
        )}
      </div>
    </div>
  );
}

export default App;
