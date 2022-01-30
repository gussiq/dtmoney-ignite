import { useState } from 'react'
import Modal from 'react-modal'

import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { TransactionProvider } from './hooks/useTransactions'
import { NewTransactionModal } from './components/NewTransactionModal'

import { GloboStyles } from './styles/global'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GloboStyles />
    </TransactionProvider>
  )
}
