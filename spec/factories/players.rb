FactoryBot.define do
  factory :player do
    sequence :name do |n|
      "Player #{n}"
    end
    after(:build) do |player|
      player.game = create(:game, :playing) unless player.game
    end
  end
end
