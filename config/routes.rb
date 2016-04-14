Rails.application.routes.draw do
  resources :hotels do
    resources :albums, shallow: true do
      resources :photos
    end
  end

  root 'hotels#index'
end
