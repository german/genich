Rails.application.routes.draw do
  resources :hotels do
    resources :albums do
      resources :photos
    end
  end

  root 'hotels#index'
end
