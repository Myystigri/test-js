class repService {

    constructor($http) {
        this.$http = $http;
    }

    create(nom, numero) {
        return this.$http.post('/api/contacts', {
            nom: nom,
            numero: numero
        })
    }

    getAll() {
        return this.$http.get('/api/contacts')
    }

    getOne(id) {
        return this.$http.get('/api/contacts/' + id)
    }

    update(id, nom, numero) {
        return this.$http.put('/api/contacts/' + id, {
            nom: nom,
            numero: numero
        })
    }

    delete(id) {
        return this.$http.delete('/api/contacts/' + id)
    }

}
