module Serializers
  module Actions
    class ReceiveInitialState
      def initialize(player)
        @player = player
      end

      def to_h
        State.new(player).to_h.merge(type: 'RECEIVE_INITIAL_STATE')
      end

      private

      attr_reader :player
    end
  end
end
