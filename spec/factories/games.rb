FactoryBot.define do
  factory :game do
    room

    trait :joining do
      status { Game::Status::JOINING }
    end

    trait :playing do
      status { Game::Status::PLAYING }
    end

    trait :ended do
      status { Game::Status::ENDED }
    end

    trait :full do
      after(:create) do |game|
        create_list(:player, Game::MAX_PLAYERS, game: game)
      end
    end
  end
end
