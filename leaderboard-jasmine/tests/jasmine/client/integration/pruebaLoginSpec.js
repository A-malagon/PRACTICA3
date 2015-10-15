describe("Pruebas con login y logout", function(){
    beforeEach(function(done){
        Meteor.loginWithPassword("pepe@gmail.com", "mipassword", function(err){
            Tracker.afterFlush(done);
        });
    });
    afterEach(function(done){
        Meteor.logout(function() {
            Tracker.afterFlush(done);
        });
    });

    it("después de login muestra input para añadir players", function(){
    	var players = Players.find().count();
    	$("#formulario").click();

    	expect(Players.find().count()).toBe(players +1);
    });

    it("después de login borra players", function(){
    	var players = Players.find().count();
    	$("#remo").click();

    	expect(Players.find().count()).toBe(players -1);
    });
});
