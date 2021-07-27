import {
    createServer,
    Model
} from "miragejs"

createServer({
    models: {
        transaction: Model
    },
    seeds(server) {
        server.create("transaction", {
            description: "Jogo Donkey Kong",
            value: 100.00
        })
        server.create("transaction", {
            description: "Mesada de Julho",
            value: 200.00
        })
        server.create("transaction", {
            description: "Cinema com os amigos",
            value: 30.00
        })
    },
    routes() {
        this.namespace = "api"


        this.post("/transactions", (schema, request) => {
            let attrs = JSON.parse(request.requestBody)

            return schema.transactions.create(attrs)
        })

        this.patch("/transactions/:id", (schema, request) => {
            let newAttrs = JSON.parse(request.requestBody)
            let id = request.params.id
            let transaction = schema.transactions.find(id)

            return transaction.update(newAttrs)
        })

        this.get("/transactions")
        this.get("/transactions/:id")
        this.del("/transactions/:id")

    },
})