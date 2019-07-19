import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


class Calc extends React.Component{ 
constructor(){
		super();
		this.state = {question: "", 
		results: "", 
		display: "",
		log: "off",
		sin:"off",
		cos:"off",
		mode:"fas fa-toggle-off"};
	}
change= () =>{
	if(this.state.mode==="fas fa-toggle-off")
		this.setState({mode:"fas fa-toggle-on"});
	if(this.state.mode==="fas fa-toggle-on")
		this.setState({mode:"fas fa-toggle-off"});
}
display= (a) =>{
	var str=this.state.question;
	if(a==="÷")
		{	
			this.setState({display:this.state.display+a});
			a="/";
			this.setState({question:this.state.question+a});
		}
	else if(a==="cl")
		{	
			var str=this.state.display.substring(0,this.state.display.length-1);
			this.setState({display:str});
			this.setState({question:str});
		}
		else if(a==="e")
		{	
			
			this.setState({display:a});
			this.setState({question:"2.71828"});
		}
	else if(a==="%")
		{	
			this.setState({display:this.state.display+a});
			a="*.01";
			this.setState({question:this.state.question+a});
		}

	else if(a==="C")
		{
			this.setState({display:""});
			this.setState({question:""});
			this.setState({results:""});
		}
		else if(a==="x")
		{
			this.setState({display:this.state.display+a});
			a="*";
			this.setState({question:this.state.question+a});
		}
		else if(a==="log")
		{
			this.setState({display:this.state.display+a});
			
			this.setState({log:"on"});
		}
		else if(a==="sin")
		{
			this.setState({display:this.state.display+a});
			
			this.setState({sin:"on"});
		}else if(a==="cos")
		{
			this.setState({display:this.state.display+a});
			
			this.setState({cos:"on"});
		}
	else if(a==="=")
		{	var f=-1;
                
                try
                {
                	var strs = eval(this.state.question);
                }
                catch(err)
                {
                	this.setState({results:"Error In Input"});
                	document.getElementsByClassName("ans").innerHTML = err.message;
                	f=1;
                }
                if(f!=1)
                {
                	this.setState({results:strs});
                }
		}
		else if(this.state.log==="on")
		{	
			var b=Math.log(parseInt(a));
			this.setState({question:this.state.question+ b});
			this.setState({display:this.state.display+a});
			this.setState({log:"off"});
		}
		else if(this.state.sin==="on")
		{	
			var b=Math.sin(parseInt(a));
			this.setState({question:this.state.question+ b});
			this.setState({display:this.state.display+a});
			this.setState({sin:"off"});
		}
		else if(this.state.cos==="on")
		{	
			var b=Math.cos(parseInt(a));
			this.setState({question:this.state.question+b});
			this.setState({display:this.state.display+a});
			this.setState({cos:"off"});
		}
		else
		{
			this.setState({display:this.state.display+a});
			this.setState({question:this.state.question+a});
		}
	}

	render() {
		return ( 

		<div><h1 class="head">Calculator</h1>
    <div class="Calci">

    <div className="qs">
              
              {this.state.display}
     </div>
       <div className="ans">
              
              {this.state.results}
     </div>

   <table>  
<tr id="scientific" class="collapse">
    <th>
      <button onClick={() => this.display("log")}>log</button>
    </th>
    <th>
      <button onClick={() => this.display("e")}>e</button>
    </th>
    <th>
      <button  onClick={() => this.display("sin")}>sin</button>
    </th>
    <th>
      <button onClick={() => this.display("cos")}>cos</button>
    </th>
  </tr>
  <tr>
    <th>
      <button data-toggle="collapse" data-target="#scientific" onClick={() => this.change()}><i id="yo" class={this.state.mode}></i></button>
    </th>
    <th>
      <button onClick={() => this.display("%")}>%</button>
    </th>
    <th>
      <button onClick={() => this.display("cl")}><i class="fas fa-backspace"></i></button>
    </th>
    <th>
      <button onClick={() => this.display("C")}>AC</button>
    </th>
  </tr>
  <tr>
    <th>
      <button onClick={() => this.display("1")}>1</button>
    </th>
    <th>
      <button onClick={() => this.display("2")}>2</button>
    </th>
    <th>
      <button onClick={() => this.display("3")}>3</button>
    </th>
    <th>
      <button onClick={() => this.display("+")}>+</button>
    </th>
  </tr>
  <tr>
    <th>
      <button onClick={() => this.display("4")}>4</button>
    </th>
    <th>
      <button onClick={() => this.display("5")}>5</button>
    </th>
    <th>
      <button onClick={() => this.display("6")}>6</button>
    </th>
    <th>
      <button onClick={() => this.display("-")}>-</button>
    </th>
  </tr>
  <tr>
    <th>
      <button onClick={() => this.display("7")}>7</button>
    </th>
    <th>
      <button onClick={() => this.display("8")}>8</button>
    </th>
    <th>
      <button onClick={() => this.display("9")}>9</button>
    </th>
    <th>
      <button onClick={() => this.display("x")}>x</button>
    </th>
  </tr>
  <tr>
    <th>
      <button onClick={() => this.display(".")}>.</button>
    </th>
    <th>
      <button onClick={() => this.display("0")}>0</button>
    </th>
    <th>
      <button class="eq" onClick={() => this.display("=")}>=</button>
    </th>
    <th>
      <button onClick={() => this.display("÷")}>÷</button>
    </th>
  </tr>
   
  </table>
    </div></div>

  );
}
}
ReactDOM.render(<Calc/>, document.getElementById('root'));

