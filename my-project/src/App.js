import scanner from './svgs/scanner.svg';

function App() {
  return (
    <div className="bg-slate-300 w-screen h-screen flex items-center justify-center">
      <div className="bg-white w-1/5 h-fit rounded-2xl">
        <div className="p-4 rounded-lg">
          <img src={scanner} alt="account" title="account" className="img-fluid rounded-lg" />
        </div>
        <div className='p-3 text-center'>
        <div className='head'>
          <p className='text-2xl font-bold text-black'>Improve your front-end</p>
          <p className='text-2xl font-bold text-black'>Skills by building project</p>
          </div>
          <div className='bod mt-4'>
            <p className='text-lg text-slate-500'>Scan this QR code to visit Frontend</p>
            <p className='text-lg  text-slate-500'>Mentor and take coding skills to</p>
            <p className='text-lg  text-slate-500'>next level</p>


          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
