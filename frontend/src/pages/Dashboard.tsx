import React, { useState } from 'react'
import { Unit } from "../components/dashboard/group";
import { HeaderDash } from "../components/dashboard/HeaderDash";
import { NewTransactionModal } from '../components/dashboard/NewTransactionModal';

import { GlobalStyle } from "../styles/global"
import { TransactionsProvider } from '../components/dashboard/hooks/useTransactions';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root')

export function Dashboard() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <HeaderDash onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Unit />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}

