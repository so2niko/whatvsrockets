import ModelDates from './modelDates.js';
import ViewDates from './viewDates.js';

export default class ControllerDates{
    constructor(Publisher){
        this.model = new ModelDates();
        this.view = new ViewDates(this.handleClickAddToFavorites, this.handleClickAddToForm);

        this.load();
        this.publisher = Publisher;
    }

    load(){
        this.model.load()
            .then(d => this.view.render(d));

    }

    handleClickAddToFavorites = ev => {
        const date = this.getDateByEvent(ev);
        this.publisher.notify('ADD_TO_FAVORITES', date);
    }

    handleClickAddToForm = ev => {
        const date = this.getDateByEvent(ev);
        this.publisher.notify('ADD_TO_FORM', date);
    }

    getDateByEvent(ev){
        const id = ev.target.dataset.id;
        return this.model.getDateById(id);
    }
}