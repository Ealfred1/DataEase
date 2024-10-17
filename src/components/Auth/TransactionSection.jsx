import React from 'react'
import { transactions } from '../../constants/data.js'
import { format } from 'date-fns'

const TransactionSection = () => {
  return (
    <div className="mt-20 px-3">
      <h2 className="text-2xl font-bold text-gray dark:text-white">Recent Transactions</h2>
      
      {/* Transaction List */}
      <div className="mt-4 space-y-4">
        {transactions.map(transaction => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  )
}

const TransactionItem = ({ transaction }) => {
  const { type, amount, transactionType, time } = transaction

  // Function to determine icon and background color for each transaction type
  const getTransactionIcon = () => {
    switch (type) {
      case 'Airtime':
        return { icon: 'pi pi-phone', bgColor: 'bg-red-500 bg-opacity-80' }
      case 'Data':
        return { icon: 'pi pi-wifi', bgColor: 'bg-blue-500 bg-opacity-80' }
      case 'Electricity':
        return { icon: 'pi pi-bolt', bgColor: 'bg-yellow-500 bg-opacity-80' }
      case 'Cable TV':
        return { icon: 'pi pi-video', bgColor: 'bg-green-500 bg-opacity-80' }
      default:
        return { icon: 'pi pi-money-bill', bgColor: 'bg-gray-500 bg-opacity-80' }
    }
  }

  const { icon, bgColor } = getTransactionIcon()

  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md shadow-slate-100 border border-neutral-300">
      
      {/* Icon Section */}
      <div className={`w-16 h-16 flex items-center justify-center rounded-full ${bgColor}`}>
        <i className={`${icon} text-3xl text-white dark:text-white`}></i>
      </div>
      
      {/* Transaction Details */}
      <div className="flex-1 ml-4">
        <h3 className="text-lg font-semibold text-black text-opacity-90 dark:text-white">{type}</h3>
        <p className="text-sm text-gray">{format(time, 'MMM dd, h:mm a')}</p>
      </div>

      {/* Amount and Transaction Type */}
      <div className="text-right">
        <p className="text-lg font-medium text-red-600">- {amount}</p>
        <p className="text-sm text-gray-500">{transactionType}</p>
      </div>
    </div>
  )
}

export default TransactionSection