Rails.application.routes.draw do
  root to: 'app#index'

  post 'login', to: 'login#create'

  get 'rooms/:slug', to: 'rooms#show'
end
