Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  root 'static_pages#home'
  get 'firma' => 'static_pages#firma'
  get 'kontakt' => 'static_pages#kontakt'
  get 'gen' => 'static_pages#test'
  get 'test' => 'static_pages#index1'
  resources :projects
  resources :resources

  get '*path' => redirect('/')

end

