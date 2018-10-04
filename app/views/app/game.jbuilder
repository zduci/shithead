json.success true

json.data do
  json.room @player.room
  json.player @player
  json.opponents @player.opponents || []
  json.game @player.game
end
