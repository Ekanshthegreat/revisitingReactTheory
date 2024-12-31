import {useState, React} from 'react'
import './card.css'





 



function Card({title}) {

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);


const buttonStyle = {
  backgroundColor: 'black',
    color: 'white',
    border: isHovered ? '1px solid rgba(253, 253, 253, 0.91)' : 'none',
    padding: '0', 
    margin: '0',  
    cursor: 'pointer',
    borderRadius: '25px', 
    fontSize: '16px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s, border 0.2s',
    height: '50px',    
    width: '100px',    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box', 
};
  
  
  return (
    <div className="cardcontainer">
      <button 
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={()=>setIsHovered(false)}
        onMouseDown={(e)=>{
          e.currentTarget.style.transform = 'scale(0.95)'
        }}
        onMouseUp={(e)=>{
          e.currentTarget.style.transform = 'scale(1)'
        }}
        >

{title}
      </button>
      
      
    </div>
  );
}

export default Card;
