Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :forum_threads, path: 'threads' do
        resources :comments, only: %i[index create]
      end

      resources :balls do
        resources :categories, except: %i[new edit show]
      end

    #  other resources (houses, kikipedia entries, users, etc.), will go here:
      # resources :houses
      # resources :wiki_entries

    end
  end

  # Serve React frontend (if using Rails for static hosting):
  # get '*path', to: 'static#frontend', constraints: ->(req) { !req.xhr? && req.format.html? }
end
