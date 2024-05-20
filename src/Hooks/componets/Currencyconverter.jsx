// import React from 'react'
import { useState } from 'react'


import UseCurrencyInfo from './Hooks/UseCurrencyInfo'
import InputBox from './Hooks/componets/Inputbox'
function Currencyconverter() {
    const [Amount, setAmount] = useState(0)
    const [From, setFrom] = useState("usd")
    const [To, setTo] = useState("inr")
    const [ConvertAmount, setConvertAmount] = useState(0)
    const currencyInfo = UseCurrencyInfo(From)
    const options = Object.keys(currencyInfo.conversion_rates)

    // swap 
    const swap = () => {
        setFrom(To)
        setTo(From)
        setConvertAmount(Amount)
        setAmount(ConvertAmount)
    }
    const convert = () => {
        setConvertAmount(Amount * currencyInfo[To])
    }
  return (
    <div>
      <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/259191/pexels-photo-259191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()

                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                Amount={Amount}
                                currencyoptions={options} onCurrencyChange={(currency) => setAmount(Amount)}
                                selectcurrency={From}

                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>

                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                Amount={ConvertAmount}
                                currencyoptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectcurrency={From}
                                AmountDisable

                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {From.toUpperCase()} to {To.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Currencyconverter
