Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  root 'static_pages#home'
  get 'kontakt' => 'static_pages#kontakt'
  get 'wizualizacje' => 'projects#projects_visualization'
  get 'realizacje' => 'projects#projects_implementation'
  resources :projects
  resources :resources

  get '*path' => redirect('/')

end

