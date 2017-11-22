app.factory("Movie", function(convert){
    function Movie(name, time, director, actors, link) {
        this.name = name;
        this.time = convert.time(time);
        this.director = director;
        this.actors = actors;
        this.link = link;
    }

    return Movie;
});