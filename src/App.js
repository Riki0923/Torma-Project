import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Makuka from './images/makuka.jpg'

function App() {
  return (
   <> <nav className='border-b-2  flex-row justify-end' style={{fontFamily:"cursive"}}>
      <ul className='flex m-2 space-x-7'>
        <li className='flex-grow-1'><a className='hover:bg-slate-200 rounded-md no-underline text-black'> Torma Gellért </a></li>
        <li className='
         hover:bg-slate-200 rounded-md'>Főoldal</li>
        <li className=' hover:bg-slate-200 rounded-md'>Írásaim</li>
        <li className=' hover:bg-slate-200 rounded-md'>Tanfolyamok</li>
        <li className=' hover:bg-slate-200 rounded-md'>Rólam</li>
      </ul>
    </nav>
    <img src={Makuka} alt='makuka' style={{width: "100%", height:"450px"}}/>

    <div className='flex m-2 justify-center text-3xl'>Újdonságok, Hírek</div>
    </>
  );
}

export default App;
