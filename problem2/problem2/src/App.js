import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import './App.css';
import backgroundImage from './assets/imageBackground.png';
import { COLORS } from './shared/colors';
import { getData } from './shared/api';
import CoinList from './components/CoinList';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [data, setData] = useState(null);
  const [selectedInput, setSelectedInput] = useState(null);
  const [selectedOutput, setSelectedOutput] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const inputRef = useRef(null);

  const onInputChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) || value === '.') {
      setInputValue(value);
    }
  };

  const handleButtonClick = (value) => {
    if (value === 'AC') {
      setInputValue('');
      setOutputValue('');
    } else if (value === '=') {
      if (inputValue && selectedInput && selectedOutput) {
        const exchangeRate = selectedInput.price / selectedOutput.price;
        setOutputValue((parseFloat(inputValue) * exchangeRate).toFixed(8));
      }
    } else {
      setInputValue(prev => {
        const newValue = prev === '0' ? value : prev + value;
        return newValue;
      });
    }
  };

  const moveCursor = (direction) => {
    const input = inputRef.current;
    if (input) {
      const cursorPosition = input.selectionStart;
      if (direction === 'left' && cursorPosition > 0) {
        input.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
      } else if (direction === 'right' && cursorPosition < input.value.length) {
        input.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
      }
      input.focus();
    }
  };

  const getDataFromAPI = useCallback(() => {
    getData()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    getDataFromAPI();
  }, [getDataFromAPI]);

  const swapping = useMemo(() => {
    return () => {
      if (inputValue && selectedInput && selectedOutput) {
        const exchangeRate = selectedInput.price / selectedOutput.price;
        setOutputValue((parseFloat(inputValue) * exchangeRate).toFixed(8));
      }
    };
  }, [inputValue, selectedInput, selectedOutput]);

  useEffect(() => {
    swapping();
  }, [swapping]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='flex justify-center items-center flex-wrap gap-10' style={{ backgroundImage: `url(${backgroundImage})`, width: '100vw', height: '100vh' }}>
      <div style={{ backgroundColor: COLORS.backgroundColor }} className="p-5 rounded-md text-white flex flex-col min-h-[80%] min-w-[90%] md:min-w-[30%] gap-5">
        <div className='flex justify-between items-center'>
          <label className='font-semibold text-2xl md:text-6xl p-2'>Swapper</label>
          <button className='p-4 bg-black/70 rounded-md self-end md:hidden' onClick={openModal}>
            Open List
          </button>
        </div>
        <div className=' flex flex-col justify-center items-center gap-2 p-2 bg-black/40'>
          <div className='flex w-full gap-2'>
            <div className='flex justify-center items-center'>
              <select
                className='bg-black/60 w-full h-full'
                onChange={(e) => setSelectedInput(data.find(item => item.currency === e.target.value))}
              >
                {data &&
                  data.map((item, index) => (
                    <option key={index} value={item.currency}>
                      {index + ". " + item.currency}
                    </option>
                  ))}
              </select>
            </div>
            <input
              type='text'
              className='grow p-2 bg-black/30 text-white focus:outline-none md:text-2xl'
              value={inputValue}
              onChange={onInputChange}
              ref={inputRef}
              placeholder='0'
            />
          </div>
          <div className='flex w-full gap-2'>
            <div className='flex justify-center items-center'>
              <select
                className='bg-black/60 w-full h-full'
                onChange={(e) => setSelectedOutput(data.find(item => item.currency === e.target.value))}
              >
                {data &&
                  data.map((item, index) => (
                    <option key={index} value={item.currency}>
                      {index + ". " + item.currency}
                    </option>
                  ))}
              </select>
            </div>
            <input type='text' className='grow p-2 text-white md:text-2xl' disabled value={outputValue} placeholder='0' />
          </div>
        </div>
        <div className='grid grid-cols-3 gap-2 font-bold'>
          <button onClick={() => moveCursor('left')} className='p-4 bg-black/70 rounded-md'>
            {'<'}
          </button>
          <button onClick={() => moveCursor('right')} className='p-4 bg-black/70 rounded-md'>
            {'>'}
          </button>
          <button onClick={() => handleButtonClick('AC')} className='p-4 bg-black/70 rounded-md'>
            AC
          </button>
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '='].map((buttonValue) => (
            <button key={buttonValue} onClick={() => handleButtonClick(buttonValue)} className='p-4 bg-black/70 rounded-md'>
              {buttonValue}
            </button>
          ))}
        </div>
      </div>

      <div style={{ backgroundColor: COLORS.backgroundColor }} className="hidden md:flex p-5 rounded-md text-white flex-col max-h-[80%] min-h-[80%] min-w-[90%] md:min-w-[30%] gap-5 overflow-auto">
        <label className='font-semibold text-2xl md:text-6xl p-2'>List</label>
        <CoinList props={data} />
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/60 flex justify-center items-center z-50">
          <div style={{ backgroundColor: COLORS.backgroundColor }} className="p-5 rounded-md text-white flex flex-col max-h-[80%] min-h-[80%] min-w-[90%] md:min-w-[30%] gap-5 overflow-auto">
            <label className='font-semibold text-2xl md:text-6xl p-2'>List</label>
            <CoinList props={data} />
            <button onClick={closeModal} className='p-4 bg-black/70 rounded-md mt-5 self-center'>
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
