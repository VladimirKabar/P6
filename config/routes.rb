Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users

  root 'static_pages#home'

  match 'contact' , to: 'static_pages#contact', via: 'get'
  match 'mail' , to: 'static_pages#mail', via: 'post'

  get 'about' => 'static_pages#about'

  resources :projects, only: [:index]

  get '*path' => redirect('/')

end
