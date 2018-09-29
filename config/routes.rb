Rails.application.routes.draw do
  mount ActionCable.server, at: '/cable'

  root to: 'app#index'

  post 'login', to: 'login#create'

  get 'rooms/:slug.json', to: 'rooms#show', as: :room_json
  get 'rooms/:slug', to: 'app#index', as: :room
end
