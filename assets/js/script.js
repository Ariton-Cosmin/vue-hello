const app = new Vue({
    el: "#root",
    data: {
        messaggio: "Hello",
        colore: "str",
        immagine: "",
    },

    methods: {
        cambiaColore(classe) {
            this.colore = classe;
        },
        addImage(img) {
            this.immagine = img;
        }
    }
});