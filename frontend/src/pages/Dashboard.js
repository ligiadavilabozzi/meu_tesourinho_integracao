import React, { useEffect, useState } from 'react';
import { Navbar } from "../components/homepage/Navbar";


function Dashboard() {
  const [transactions, setTransactions] = useState(null)
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [transactionId, setTransactionId] = useState(null)
  const [updating, setUpdating] = useState(false)
  useEffect(() => {
    fetch('/api/transactions')
      .then(res => res.json())
      .then(json => setTransactions(json.transactions))
      .catch(err => console.log(err))
  }, [])

  const createTransaction = async () => {
    try {
      const res = await fetch('/api/transactions', {
        method: 'POST',
        body: JSON.stringify({ description, value }),
      })
      const json = await res.json()

      setTransactions([...transactions, json.transaction])
      setDescription('')
      setValue('')

    } catch (err) {
      console.log(err)
    }
  }

  const updateTransaction = async () => {
    try {
      const res = await fetch(`/api/transactions/${transactionId}`, {
        method: 'PATCH',
        body: JSON.stringify({ description, value }),
      })
      const json = await res.json()

      const transactionsCopy = [...transactions]
      const index = transactions.findIndex(m => m.id === transactionId)
      transactionsCopy[index] = json.transaction

      setTransactions(transactionsCopy)
      setDescription('')
      setValue('')
      setUpdating(false)
      setTransactionId(null)
    } catch (err) {
      console.log(err)
    }
  }



  const submitForm = async (event) => {
    event.preventDefault()
    if (updating) {
      updateTransaction()
    } else {
      createTransaction()
    }

  }

  const deleteTransaction = async (id) => {
    try {
      await fetch(`/api/transactions/${id}`, { method: 'DELETE' })

      setTransactions(transactions.filter(m => m.id !== id))
    } catch (err) {
      console.log(err)
    }
  }

  const setTransactiontoUpdate = (id) => {
    const transaction = transactions.find(m => m.id === id)
    if (!transaction) return
    setUpdating(true)
    setTransactionId(transaction.id)
    setDescription(transaction.description)
    setValue(transaction.value)
  }
  return (
    <div className="container">
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="row justify-content-center create">
        <div className="col body">
          <div className="header">
            <img
              src="img/logo/logo-tesourinhocolorido.png"
              className = "imgDash"
              width="200px"
              alt="Logo Meu Tesourinho"
            />
          </div>
          <div className="my-4 ">

            <form onSubmit={submitForm} >
              <div className="row">
                <div className="col-5">
                  <input type="text"
                    className="form-control border-warning"
                    placeholder="Descrição"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />
                </div>

                <div className="col-5">
                  <input type="number"
                    className="form-control border-success"
                    placeholder="Entrada ou Saída em R$"
                    value={value}
                    onChange={(e) => setValue(e.target.value)} />
                </div>
                <div className="col-2">
                  <button type="submit" className="btn btn-success">
                    {updating ? 'Atualizar' : 'Criar'}
                  </button>
                </div>
              </div>
            </form>
          </div>
          {transactions?.length > 0 ? (
            <table className="table">
              <thead>
                <tr>
                  <th>Descrição</th>
                  <th>R$ </th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map(({ id, description, value }) => (
                  <tr key={id}>
                    <td className="col-4">{description}</td>
                    <td className="col-4">{value}</td>
                    <td>
                      <button className="btn btn-danger"
                        onClick={() => setTransactiontoUpdate(id)}>
                        Atualizar
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-danger "
                        onClick={() => deleteTransaction(id)}>
                        Deletar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Sem entradas ou saídas</p>
          )}

        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>&copy; LOVELACE CODE</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
