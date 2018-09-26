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
  end
end
