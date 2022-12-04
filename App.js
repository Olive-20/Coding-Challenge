import { useEffect, useState } from "react";
import "./style.css";

export default function App() {
 const [quotes, setQuotes] = useState([]);
 
 useEffect(() => {
   const fetchQuotes = async () => {
 
       const response = await fetch(
         'https://type.fit/api/quotes');
          const data = await response.json();

          //use only some quotes as the array has over a thousand items and it would be hard to display
          setQuotes(data.slice(0,50))
      
   }
 
   fetchQuotes();
}, []);
 
 return (
   <div className="App">
     <h1>List of Quotes</h1>
     <table>
       <thead>
         <tr>
           <th>Quote ID</th>
           <th>Quote</th>
           <th>Author</th>
         </tr>   
       </thead>   
       <tbody>
         {
         quotes.map( (quote,key) =>
         <tr key={key}>
             <td className='table-data'>{key+1}</td>
             <td className='table-data'>{quote.text}</td>
             <td className='table-data'>{quote.author}</td>
         </tr>
         )
       }
       </tbody>
     </table>
   </div>
 );
}
