var app = new Vue({
    el: '#app',
    data: {
        test: 0,
        userdata: {
            username: null,
            password: null,
            user_id: null,
            error: null,
            logged_in: 0
        },

        top_musicians: [2, 7, 8],

        musicians: [],

        search: [],
        search_term: "",
        has_searched: null,

        view: {
            name: null,
            id: null,
            img: null,
            desc: null
        },

        favourites: [],
        favourite_ids: []

    },
    computed: {}
    ,
    mounted: function () {
        this.get_top_musicians();
    },
    methods: {
        login: function () {
            axios.get("login.php?username=" + this.userdata.username + "&password=" + this.userdata.password)
                .then(function (response) {
                    if (response["data"] !== 0) {
                        app.userdata.user_id = response.data;
                        app.userdata.username = null;
                        app.userdata.password = null;
                        app.userdata.error = null;
                        app.userdata.logged_in = 1;
                        app.get_favourite_musicians();
                        window.location.href = "#tab1";
                    } else {
                        app.userdata.error = "Sisselogimine ebaõnnestus";
                        console.log("fail");
                    }
                }).catch(function (error) {
            })
        },

        logout: function () {
            app.userdata.logged_in = 0;
        },

        get_top_musicians: function () {
            axios.get("get_top_musicians.php?id_array=" + this.top_musicians)
                .then(function (response) {
                    app.search = response.data;
                    app.has_searched = 0;
                    app.search.forEach(function (element) {
                        element.musician_img = "/mobiilirakendus/img/" + element.musician_img;
                    })
                })
        },

        search_fn: function () {
            axios.get("get_all.php").then(function (response) {
                app.musicians = response.data;
                app.search = [];
                app.has_searched = 1;
                app.musicians.forEach(function (element) {
                    element.musician_img = "/mobiilirakendus/img/" + element.musician_img;
                    if (-1 !== element.musician_name.toLowerCase().search(app.search_term.toLowerCase())) {
                        app.search.push(element);

                    }
                })
            })
        },

        view_musician: function (id) {
            axios.get("get_musician.php?id=" + id).then(function (response) {
                app.view.name = response.data.musician_name;
                app.view.desc = response.data.musician_description;
                app.view.id = response.data.musician_id;
                app.view.img = "/mobiilirakendus/img/" + response.data.musician_img;
            })
        },

        add_favourite_musician: function (musician_id) {
            axios.post("add_favourite_musician.php?user_id=" + this.userdata.user_id + "&musician_id=" + musician_id)
                .then(function (response) {
                    app.get_favourite_musicians();
                })
        },

        remove_favourite_musician: function (musician_id) {
            axios.post("remove_favourite_musician.php?user_id=" + this.userdata.user_id + "&musician_id=" + musician_id)
                .then(function (response) {
                    app.get_favourite_musicians();
                });
        },

        get_favourite_musicians: function () {
            axios.get("get_favourite_musicians.php?user_id=" + this.userdata.user_id).then(function (response) {
                app.favourites = (response.data);
                app.favourite_ids = [];
                app.favourites.forEach(function (element) {
                    element.musician_img = "/mobiilirakendus/img/" + element.musician_img;
                    app.favourite_ids.push(element.musician_id)
                });
            })
        },
    }
});