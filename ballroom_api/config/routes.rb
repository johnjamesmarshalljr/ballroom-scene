Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :forum_threads, path: 'threads' do
        resources :comments, only: %i[index create]
      end

      resources :balls do
        resources :categories, except: %i[new edit show]
      end

      resources :categories, only: [:create] # Independent category creation

      resources :users, only: [:show, :create, :update]

      resources :houses, only: [:index, :show, :create, :update, :destroy]

    #  other resources (houses, kikipedia entries, users, etc.), will go here:
      # resources :wiki_entries

    end
  end

  # Serve React frontend (if using Rails for static hosting):
  # get '*path', to: 'static#frontend', constraints: ->(req) { !req.xhr? && req.format.html? }

  # Google OAuth routes for OmniAuth
  get '/auth/:provider/callback', to: 'sessions#omniauth'
  get '/auth/failure', to: redirect('/')
end
