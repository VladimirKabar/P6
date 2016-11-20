Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  root 'static_pages#home'
  get 'kontakt' => 'static_pages#kontakt'
  get 'kontakt' => 'static_pages#new'
  post 'kontakt' =>  'static_pages#create'
  get 'offer' => 'static_pages#offer'
  get 'visualizations' => 'projects#projects_visualization'
  get 'realizations' => 'projects#projects_realization'

  resources :projects
  resources :resources

  get '*path' => redirect('/')

end

