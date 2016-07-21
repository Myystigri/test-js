class repController {

    constructor(repService) {
        this.repService = repService;
        this.load();
    }

    load() {
        this.repService.getAll().then((res) => {
            this.contacts = res.data;
        })
    }

    create() {
        this.repService.create(this.contact.nom, this.contact.numero).then(() => {
            this.contact = '';
            this.load()
        })
    }

    update(contact) {
        this.repService.update(contact._id, contact.nom, contact.numero).then(() => {
            this.load()
        })
    }

    delete(contact) {
        this.repService.delete(contact._id).then(() => {
            this.load()
        })
    }

}