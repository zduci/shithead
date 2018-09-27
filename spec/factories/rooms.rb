FactoryBot.define do
  factory :room do
    name { 'Shed' }

    trait :joining do
      after(:create) do |room|
        create(:game, :joining, room: room)
      end
    end

    trait :playing do
      after(:create) do |room|
        create(:game, :playing, room: room)
      end
    end

    trait :ended do
      after(:create) do |room|
        create(:game, :ended, room: room)
      end
    end

    trait :full do
      after(:create) do |room|
        create(:game, :full, room: room)
      end
    end
  end
end
