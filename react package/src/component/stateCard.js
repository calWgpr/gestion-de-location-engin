import { Link } from 'react-router-dom';
import '../My styles/stateCard.css';
import {Popup,pubEmail,emailx} from './popup';
import { useEffect, useState } from 'react';

var portm="http://localhost:8083"
var ok=false
const StateCard = ({row}) => {
    console.log(pubEmail);
const [isLoading, setIsLoading] = useState(true);
const [user,setUser]=useState(null)

    const phone=row.phone
    const mail=row.mail
    const totalFee=row.totalPrice
    const reqDate=row.requestDate
    const address=row.enginDetails[0].address
    const distance=row.enginDetails[0].distance
    const Payment=row.payment
    const cardHeaderColor = `text-bg-${row.state === 'waiting' ? 'warning' : row.state === 'Accepted' ? 'success' : 'danger'}`;
const color = row.state === 'waiting' ? 'text-warning' : row.state === 'Accepted' ? 'text-success' : 'text-danger';

//    const [carouselData, setCarouselData] = useState([
//     {
//       imageUrl: 'compacteur/compacteurMono-bille.png',
//       altText: 'Image 1 Description',
//       nbrEngin: 5,
//       enginName: 'monobile',
//       coutEngin: '50000 Ar',
//     },
//   ]);
  var carouselData=[
    {
    //   imageUrl: 'compacteur/compacteurMono-bille.png',
    //   altText: 'Image 1 Description',
    //   nbrEngin: 5,
    //   enginName: 'monobile',
    //   coutEngin: '50000 Ar',
    },
  ]
for (let i = 0; i < row.enginDetails.length; i++) {
  const newObject = {
  imageUrl: row.enginDetails[i].enginDetails.photoEngin,
  altText: 'New Image Description',
  nbrEngin: row.enginDetails[i].nbrEngins,
  enginName: row.enginDetails[i].enginDetails.nomEngin,
  coutEngin: row.enginDetails[i].enginDetails.coutEngin,
};

// Push the new object using push()
 carouselData.push(newObject);
// v.push(newObject);
// setCarouselData([...carouselData, newObject]);
}

 useEffect(()=>{
 fetch(portm+"/")
     .then(res => res.json()) // Convert response to JSON
    .then(data => {
		setUser(data)	
        console.log(data);
        	setIsLoading(false)


 

    });
 },[]) 
//  if(ok){
  
 return ( 
        <div id="container" className=" container-fluid  " >
            <div id='container2' class="card bg-white mb-3  thicker-shadow rounded-4 ">
                <div className={' card-header '+cardHeaderColor}>
                        {row.state}
                        
                </div>
                  <div id="demo" class="carousel slide d-flex flex-column flex-shrink-0" data-bs-ride="carousel" data-bs-interval="2000">
                            
                    <div class="carousel-inner   ">

                    {row.enginDetails.map((item,index) => (
                        
                            <div
                            key={index}
                            className={`carousel-item ${index === 0 ? 'active' : ''}`} // Set 'active' class for first slide
                            >
                              
                            <img
                                className="d-block w-100" // Adjust styling as needed
                                src={item.enginDetails.photoEngin} // Access URL from object
                                alt="fsdaf" // Set alt text for accessibility
                            />
                            
                        
                       <div>
                        <div className=' ms-5 d-flex flex-column '>
                                    <h6 className={'  align-self-start '+color}><i class="fas fa-circle "></i>
                     <span className='text-dark'><b> Engin:</b> {item.enginDetails.nomEngin} </span></h6>
                     
                     <h6 className={'  align-self-start '+color}><i class="fas fa-circle "></i>
                     <span className='text-dark'><b> Nbr of engin:</b> {item.nbrEngins}</span></h6>
                      <h6 className={'  align-self-start '+color}><i class="fas fa-circle "></i>
                     <span className='text-dark'><b> Cost:</b> {item.enginDetails.coutEngin}</span></h6>
                        </div>
                            
                            </div> 
                            </div>
                            
                        ))}

                    </div>
  {/* <div className='  '> 
     <button className="carousel-control-prev" data-bs-target="#demo"  data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  </button>
  <button className="carousel-control-next " data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    </button>
 </div>  */}
                    </div>
                <div class="card-body d-flex flex-column ">
                    
                    

                        
                  
<div>

                  <div id="start" className=' d-flex flex-column align-content-center '>
                     <span className={'  align-self-start '+color}><i class="fas fa-circle "></i>
                     <span className='text-dark'><b> Request date:</b> </span></span>{reqDate}<br /><br />
                    <span className={'  align-self-start '+color}><i class="fas fa-circle "></i>
                     <span className='text-dark '><b> Factory address:</b> </span></span>{address}<br /><br />
                      <span className={'  align-self-start '+color}><i class="fas fa-circle "></i> 
                 <span className='text-dark'><b> Distance:</b> </span></span>{distance}<br /><br />
                     <span className={'  align-self-start '+color}><i class="fas fa-circle "></i> 
                 <span className='text-dark'><b> Phone:</b> </span></span> {phone}<br /><br />
                 <span className={'  align-self-start '+color}><i class="fas fa-circle "></i> 
                 <span className='text-dark'><b> Payment method:</b> </span></span>{Payment}<br /><br />
                  <span className={'  align-self-start '+color}><i class="fas fa-circle "></i> 
                 <span className='text-dark'><b> Mail: </b> </span></span>{mail}


                  </div>
</div>
                    
                </div>

                <div className={' card-footer   '+color}>
                 <i class="fas fa-tag    "></i><span className='text-dark'><b> Total fee:</b> {totalFee}</span>
                </div>
                        {/* <button type="button" className="ms-auto m-2 rounded-2  btn">Details</button>  */}
            </div>
           
        </div>
     );
 
   
}
 
export {StateCard} ;