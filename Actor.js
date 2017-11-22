app.factory("Actor", function(){
    function Actor(firstName, lastName, img, imdbURL) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.img = img;
        this.imdbURL = imdbURL;
    }  
    return Actor;
});