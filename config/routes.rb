Rails.application.routes.draw do
  resources :hotels
  root 'hotels#index'
end
