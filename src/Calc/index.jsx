import React from "react";
import css from './Calc.module.css'

let data = {
    btn:[
       {val:'7'},
       {val:'8'},
       {val:'9'},
       {val:'/',bg: 'orange'},
       {val:'4'},
       {val:'5'},
       {val:'6'},
       {val:'-',bg: 'orange'},
       {val:'1'},
       {val:'2'},
       {val:'3'},
       {val:'+',bg: 'orange'},
       {val:'0', width:'120px'},
       {val:'%'},
       
    
    ],
    opr:[
        
        {val:'C',bg: 'orange'},
        {val:'X',width:'120px',bg: 'orange'},
        {val:'=',width:'120px',bg: 'orange'},
       
    ]
}

export class Calc extends React.Component{
    constructor(){
        super()
        this.state ={
         btnVal :0
        }
        this.refInput = React.createRef()
    }

    tapNum(value){
        let innerValue = value
        let input = this.refInput.current
        this.setState((state)=> ({
            btnVal:innerValue
        }))
    if(input.value === '0'){input.value = ''}

      input.value += innerValue

    }
    tapOpr(value){
        let input = this.refInput.current 

        if(value=== 'X'){
            if(input.value.length === 1){
        input.value ='0'} else{
            input.value = input.value.substring(0,input.value.length  -1)
        }
           
        }
        else if(value === 'C'){
            input.value = '0'
        }
        else if(value === '='){
            try{input.value = eval(input.value)}
            catch {
                input.value = 'Ошибка!'
            setTimeout(() => {
                input.value = '0'
            }, 1500 );}
    }
    }
render(){
    return (
        <div className={css.container}>
            <div className={css.output}>
                <input ref={this.refInput} type="text"defaultValue={this.state.btnVal} />
            </div>
            <div className={css.btn}>
                {
                data.btn.map(item=> <button style={{backgroundColor:item.bg, width: item.width}} onClick={()=>{this.tapNum(item.val)}}
                 className={css.knop}>{item.val}</button>)
                 }
                 {
                data.opr.map(item=> <button style={{backgroundColor:item.bg, width: item.width}} onClick={()=>{this.tapOpr(item.val)}}
                 className={css.knop}>{item.val}</button>)
                 }
            </div>

        </div>
    )
}
}