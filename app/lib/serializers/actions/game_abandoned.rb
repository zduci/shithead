module Serializers
  module Actions
    class GameAbandoned
      def to_h
        { type: 'GAME_ABANDONED' }
      end

      private

      attr_reader :player
    end
  end
end
