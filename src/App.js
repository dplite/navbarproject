import React from "react";
import "./style.css";

export default class Layout extends React.Component{
  constructor(props)
  {
    super(props)
  }
  render(){
    return(
      <>
      <div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        border: '1px solid black',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        backgroundColor:'grey',
        borderRadius:'7px'
      }}>
        <div style={{
          display: 'flex',
          display: 'inline-block',
          width: '30px',
          height: '30px',
          background: 'black',
          borderRadius:'7px'
          
        }}>

        </div>
        <div className="circle">

        </div>
        

      </div>
      <div className="parent2">
    <div className="c2">
      <div className="b1">
        
        <div className="circle1">
            
        </div>
        <div className="hello">Hello</div>
          </div>

          <div className="b1">
            <div className="circle1">

            </div>
            <div className="hello">Hello</div>
          </div>
          <div className="b1">
            <div className="circle1">

            </div>
            <div className="hello">Hello</div>
          </div>
          <div className="b1">
            <div className="circle1">

            </div>
            <div className="hello">Hello</div>
          </div>
          <div className="b1">
            <div className="circle1">

            </div>
            <div className="hello">Hello</div>
          </div>
        
      </div>

        <div className="bigrectangle">
          <div className="heading">
           hello
          <div className="coverhello">

          </div>
          </div>
          <div className="bottomtwo">

            <div className="small1"></div>
            <div className="small1"></div>


          </div>
        </div>



      </div>
      </div>
      </>
    )
  }
}

export default function App() {
  return (
    <div>
      <Layout />
    </div>
  );
}
