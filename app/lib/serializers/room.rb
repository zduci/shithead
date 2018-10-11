module Serializers
  class Room
    def initialize(room)
      @room = room
    end

    def to_h
      { name: room.name,
        slug: room.slug }
    end

    private

    attr_reader :room
  end
end
