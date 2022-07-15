import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import './InformationStyle.css'



class Information extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    render() { 
        // console.log(this.props)
        return ( <>
        <div className='TitleContainer'>
            <h3>{this.props.data.name}</h3>
            <p>{this.props.data.level}</p>
        </div>
        <div className='IconWrapper'>
            <div  >
            <FontAwesomeIcon className='crown icon' icon={solid('crown')} style={{color:'#21188c'}} />
               <span> {this.props.data.rank}</span>
            </div>
            <div  >
            <FontAwesomeIcon className='star icon' icon={solid('star')} style={{color:'#527d00'}}/>
          <span>  {this.props.data.point}</span>

            </div>
            <div  >
            <FontAwesomeIcon className='percent icon' icon={solid('percent')} style={{color:'#d7414e'}}/>

            <span>{this.props.data.profileCompleted}%</span>
            </div>
        </div>
        
        </> );
    }
}
 
export default Information;