describe('PlayersService', function () {
  'use strict';

  describe('decrementPlayer', function () {
    it('should quit 5 points to the player score with the given id', function () {
      var playerId = 1;
      spyOn(Players, 'update');

      PlayersService.decrementPlayer(playerId);
      expect(Players.update.calls.argsFor(0)).toEqual([playerId, {$inc: {score: -5}}]);
    });
  });

  describe('removePlayer', function () {
    it('remove the player', function () {
      var playerId = 1;
      spyOn(Players, 'remove');

      PlayersService.removePlayer(playerId);
      expect(Players.remove.calls.argsFor(0)).toEqual([playerId]);
    });
  });

  describe('addPlayer', function () {
    it('add player form one', function () {
      var playerName = "Alex";
      var score = 0;
      var createdBy = 0;
      spyOn(Players, 'insert');

      PlayersService.addPlayer(playerName,score,createdBy);
      expect(Players.insert.calls.argsFor(0)).toEqual([{name:playerName,score:score,createdBy:createdBy}]);
    });
    
    it("Add Player form two", function () {
      var players = Players.find().count();
      var playerName = "Alex";
      var score = 0;
      var createdBy = 0;
      spyOn(Players, 'insert');

      PlayersService.addPlayer(playerName,score,createdBy);
      expect(Players.find().count()).toBe(players);
     });
  });
});
