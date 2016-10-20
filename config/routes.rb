Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  root 'static_pages#home'
  get 'kontakt' => 'static_pages#kontakt'
  get 'test' => 'static_pages#test'
  resources :projects
  resources :resources

  get '*path' => redirect('/')

end

