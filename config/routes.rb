Rails.application.routes.draw do
  devise_for :users, controllers: { 
    registrations: "registrations"
  }

  resources :hotels do
    resources :albums, shallow: true do
      resources :photos
    end
  end

  root 'hotels#index'
end
