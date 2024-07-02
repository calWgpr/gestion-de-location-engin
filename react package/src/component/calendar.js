import { useState,useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import '../App.css';

function Calendars({rentType,setDatex}) {
      const [date, setDate] = useState(new Date());
  useEffect(() => {
//   // Code to use the updated nbrEngin value (e.g., calculations or console logs)
setDatex(date)
}, [date]);

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 14);
//    useEffect(() => {
// //     // Calculate 14 days from the selected date and update maxDate
//    const calculateDate = () => {
//       const newMaxDate = new Date(date[1]);
//       newMaxDate.setDate(newMaxDate.getDate() + 14);
//       setMaxDate(newMaxDate)

//       const newMinDate = new Date(date[0]);
//   setMinDate(newMinDate);
//    };

    // Run initially and whenever date changes

//     setDate((currentDate) => currentDate); // Trigger a re-render

  switch (rentType) {

    case "ReservationRadio":

return (
    <div className='container d-flex flex-column'>
      <h3 className=' ms-5 align-self-start text-center'>Reservation period</h3>
      <div className='calendar-container'>
        <Calendar
           onChange={setDate}
  value={date}
  selectRange={true}
   maxDate={maxDate} // will not allow date later than today
  minDate={new Date(    )} // will
        />
      </div>
      {date.length > 0 ? (
        <p className='ms-3 align-self-start   text-center'>
          <span className='bold'>Start:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className='ms-5 align-self-start  text-center'>
          <span className='bold'>Default selected date:</span>{' '}
          {date.toDateString()}
        </p>
      )}
    </div>
  );
        break;
        case "RentRadio":

            return (
    <div className='container d-flex flex-column'>
      <h3 id='h32' className=' align-self-center text-center'>Rent period</h3>
      <div className='    calendar-container'>
        <Calendar
           onChange={setDate}
  value={date}
   selectRange={true}
        />
      </div>
      {date.length > 0 ? (
        <p className='ms-3 align-self-start text-center'>
          <span className='bold'>Start:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className=' ms-5 align-self-start text-center'>
          <span className='  bold'>Default selected date:</span>{' '}
          {date.toDateString()}
        </p>
      )}
    </div>
  );

            break;
            default:break;
  }


  
}



export default Calendars;