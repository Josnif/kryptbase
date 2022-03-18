import React, { useContext } from "react";
import { TransactionContext } from '../Context/TransactionContext';
import dummyData from '../utils/dummyData'

import { shortenAddress } from '../utils/shortenAddress';
import useFetch from '../hooks/useFetch';

const TransactionCard = ({addressTo, addressFrom, timestamp, message, keyword, amount, url}) => {
    const gifUrl = useFetch({ keyword });
    const dummyGif = 'https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284';

    return (
        <div className="flex flex-1 dark:bg-[#181918] m-4
            2xl:min-w-[450px]
            2xl:max-w-[500px]    
            sm:min-w-[270px]
            sm:max-w-[300px] 
            shadow-xl
            flex-col p-3 rounded-md hover:shadow-2xl   
        ">
            <div className="flex flex-col items-center w-full mt-3">
                <div className="w-full mb-6 p-2">
                    <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noopener noreferrer">
                        <p className="dark:text-white text-base">From: {shortenAddress(addressFrom)}</p>    
                    </a> 
                    <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noopener noreferrer">
                        <p className="dark:text-white text-base">To: {shortenAddress(addressTo)}</p>    
                    </a> 
                    <p className="dark:text-white text-base">Amount: {amount} ETH</p>
                    {message && (
                        <>
                            <br />
                            <p className="dark:text-white text-base">Message: {message}</p>
                        </>
                    )}

                </div>
                
                <img 
                    src={gifUrl || dummyGif}
                    alt="gif"
                    className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
                />
                <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
                    <p className="text-[#37c7da] font-bold">{timestamp}</p>
                </div>
            </div>

        </div>
    )
}

const Transactions = () => {
    const { currentAccount, transactions } = useContext(TransactionContext);

    return (
        <div className="flex w-full items-center justify-center 2xl:px-20 gradient-bg-transactions">
            <div className="flex flex-col md:p-12 py-12 px-4">
                { currentAccount ? (
                    <h3 className="dark:text-white text-center text-3xl my-2">Latest Transactions</h3>
                ) : (
                    <h3 className="dark:text-white text-center text-3xl my-2">Connect your accounts to see your transactions.</h3>
                )}

                <div className="flex flex-wrap items-center justify-center mt-10">
                    {(transactions.length > 0) && 
                        (
                            transactions.reverse().map((transaction, i) => (
                                <TransactionCard key={i} { ...transaction} />
                            ))
                        )
                    }
                    {/* { (currentAccount & transactions ) && 
                        (
                            <div className="text-center -mt-5">
                                <p className="dark:text-white text-base">No Transactions yet!</p>
                            </div>

                        )
                    } */}
                </div>
            </div>
        </div>
    );
}

export default Transactions;