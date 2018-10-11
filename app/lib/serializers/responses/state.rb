module Serializers
  module Responses
    class State
      def initialize(player)
        @player = player
      end

      def to_h
        { success: true,
          data: Serializers::State.new(player).to_h }
      end

      private

      attr_reader :player
    end
  end
end
