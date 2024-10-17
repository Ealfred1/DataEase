import React from 'react'
import { transactions } from '../../constants/data.js'
import { format } from 'date-fns'

const TransactionSection = () => {
  return (
    <div className="mt-10 px-3">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Recent Transactions</h2>
      
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
        return { icon: 'pi pi-phone', bgColor: 'bg-red-200' }
      case 'Data':
        return { icon: 'pi pi-wifi', bgColor: 'bg-blue-200' }
      case 'Electricity':
        return { icon: 'pi pi-bolt', bgColor: 'bg-yellow-200' }
      case 'Cable TV':
        return { icon: 'pi pi-tv', bgColor: 'bg-green-200' }
      default:
        return { icon: 'pi pi-money-bill', bgColor: 'bg-gray-200' }
    }
  }

  const { icon, bgColor } = getTransactionIcon()

  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md">
      
      {/* Icon Section */}
      <div className={`w-16 h-16 flex items-center justify-center rounded-full ${bgColor}`}>
        <i className={`${icon} text-3xl text-gray-700 dark:text-white`}></i>
      </div>
      
      {/* Transaction Details */}
      <div className="flex-1 ml-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{type}</h3>
        <p className="text-sm text-gray-500">{format(time, 'MMM dd, h:mm a')}</p>
      </div>

      {/* Amount and Transaction Type */}
      <div className="text-right">
        <p className="text-lg font-bold text-red-600">{amount}</p>
        <p className="text-sm text-gray-500">{transactionType}</p>
      </div>
    </div>
  )
}

export default TransactionSection