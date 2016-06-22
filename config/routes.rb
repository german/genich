Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users, controllers: { 
    registrations: "registrations"
  }
  resources :articles
  resources :hotels do
    resources :reviews
    
    resources :albums, shallow: true do
      resources :photos
    end
  end

  root 'hotels#index'
end
