json.success true

json.data do
  json.room @player.try(:room)
  json.player @player
  json.opponents @player.try(:opponents) || []
  json.game @player.try(:game)
end
