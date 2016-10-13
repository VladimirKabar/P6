Rails.application.routes.draw do


  get 'resources/index'

  get 'resources/show'

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  root 'static_pages#home'
  get 'about' => 'static_pages#about'
  get 'firma' => 'static_pages#firma'
  get 'projekty' => 'static_pages#projekty'
  get 'kontakt' => 'static_pages#kontakt'
  get 'gen' => 'static_pages#test'
  get 'test' => 'static_pages#index1'
  resources :projects
  resources :resources

  get '*path' => redirect('/')

end

