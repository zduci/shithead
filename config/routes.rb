Rails.application.routes.draw do
  root to: 'app#index'

  post 'login', to: 'login#create'
end
