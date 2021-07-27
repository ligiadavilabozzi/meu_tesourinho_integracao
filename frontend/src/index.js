import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Julho",
          type: "deposit",
          category: "mesada",
          amount: 200,
          createdAt: new Date("2021-07-01 09:00:00"),
        },
        {
          id: 2,
          title: "Donkey Kong",
          type: "withdraw",
          category: "games",
          amount: 100,
          createdAt: new Date("2021-07-10 09:00:00"),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });

    this.delete("/transactions/:id", (schema, request)=>{
      let id = request.params.id 

      return schema.transactions.find(id).destroy()

    })
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
