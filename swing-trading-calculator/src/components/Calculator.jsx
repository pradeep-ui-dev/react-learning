import React, {useState} from "react";

export default function Calculator(){
    const [investmentAmount, setInvestmentAmount] = useState("");
    const [stockPrice, setStockPrice] = useState("");
    const [stopLossPercent, setStopLossPercent] = useState("");
    const [targetPercent, setTargetPercent] = useState("");
    const [desiredProfitAmount, setDesiredProfitAmount] = useState("");
    const [results, setResults] = useState({
        quantity: 0,
        stopLossPrice: 0,
        targetPrice: 0,
        totalReturnsWithoutFees:0,
        profitPercentage: 0,
        totalFees:0,
        totalReturnWithFees:0
    });
    
    const brokerageRate = 0.001; // 0.1%
    const sttRate = 0.001; // 0.1%
    const exchangeFeeRate = 0.00003; // 0.003%
    const gstRate = 0.18; // 18%
    const sebiFeeRate = 0.000001; // 0.0001%
    const stampDutyRate = 0.00015; // 0.015%
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const quantity = Math.floor(investmentAmount / stockPrice);
        const stopLossPrice = (stockPrice - (stockPrice * (stopLossPercent / 100))).toFixed(2);

        const targetPrice = desiredProfitAmount 
            ? (Number(stockPrice) + (desiredProfitAmount / quantity)).toFixed(2)
            : (Number(stockPrice) + (stockPrice * (targetPercent / 100))).toFixed(2);
        const totalReturnsWithoutFees = targetPrice * quantity;
        const profitPercentage = desiredProfitAmount
            ? ((desiredProfitAmount / (quantity * stockPrice)) * 100)
            : targetPercent;
        
        //
        const turnover = quantity * stockPrice;
        const brokerage = turnover * brokerageRate;
        const stt = turnover * sttRate;
        const exchangeFee = turnover * exchangeFeeRate;
        const sebiFee = turnover * sebiFeeRate;
        const stampDuty = turnover * stampDutyRate;
        const gst = (brokerage + exchangeFee) * gstRate;
        
        const totalFees = Number(brokerage + stt + exchangeFee + sebiFee + stampDuty + gst).toFixed(2);
        const totalReturnWithFees = totalReturnsWithoutFees - totalFees;

        //return { quantity, stopLossPrice, targetPrice, totalFees, profitPercentage: profitPercentage.toFixed(2) };
        

        //const { quantity, stopLossPrice, targetPrice, totalFees, profitPercentage } = calculateResults();

  //
        setResults({
            quantity,
            stopLossPrice,
            targetPrice,
            totalReturnsWithoutFees,
            profitPercentage,
            totalFees,
            totalReturnWithFees
        })
    }

    return(
        <>  
            <div className="space-y-8 md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center max-w-screen-md mx-auto">
                <div className="flex items-center justify-center w-full rounded dark:bg-gray-700">
                    <form onSubmit={handleSubmit} className="py-5 mx-auto w-full">
                        <div className="mb-5">
                            <label htmlFor="investmentamount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Investment Amount</label>
                            <input type="number" id="investmentamount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Investment Amount" value={investmentAmount} onChange={(e) => setInvestmentAmount(e.target.value)} required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="stockprice" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Current Stock Price</label>
                            <input type="number" id="stockprice" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Current Stock Price" value={stockPrice} onChange={(e) => setStockPrice(e.target.value)} required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="slpercentage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Stop Loss (in %)</label>
                            <input type="number" id="slpercentage" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Stop Loss" value={stopLossPercent} onChange={(e) => setStopLossPercent(e.target.value)} required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="targetpercentage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Target (in %)</label>
                            <input type="number" id="targetpercentage" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Target" value={targetPercent} onChange={(e) => setTargetPercent(e.target.value)} />
                        </div>
                        <p className="mb-5 text-gray-500 dark:text-gray-400 text-center font-semibold">OR</p>
                        <div className="mb-5">
                            <label htmlFor="desiredamount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Desired Profit Amount</label>
                            <input type="number" id="desiredamount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Desired Profit Amount" value={desiredProfitAmount} onChange={(e) => setDesiredProfitAmount(e.target.value)} />
                        </div>

                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Calculate</button>
                        <button onClick={() => window.location.reload()} className="text-black bg-slate-400 hover:bg-slate-300 hover:text-gray-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ml-2">Reset</button>
                    </form>
                </div>
                <div className="w-full">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <tbody>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        Quantity to Buy
                                    </th>
                                    <td className="px-6 py-4">
                                        {results.quantity}
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        Stop Loss Price
                                    </th>
                                    <td className="px-6 py-4">
                                        {results.stopLossPrice}
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        Target Price
                                    </th>
                                    <td className="px-6 py-4">
                                        {results.targetPrice}
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        Target Price
                                    </th>
                                    <td className="px-6 py-4">
                                        {results.totalReturnsWithoutFees}
                                    </td>
                                </tr>
                                
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        Profit Percentage
                                    </th>
                                    <td className="px-6 py-4">
                                        {results.profitPercentage}
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        Total Fees
                                    </th>
                                    <td className="px-6 py-4">
                                        {results.totalFees}
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        Returns (With Fees)
                                    </th>
                                    <td className="px-6 py-4">
                                        {results.totalReturnWithFees}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>



            

            

            

        </>
    )
}