module Serializers
  module Responses
    class Error
      def initialize(error)
        @error = error
      end

      def to_h
        { success: false,
          messages: @error.message }
      end

      private

      attr_reader :error
    end
  end
end
