Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  root 'static_pages#home'
  match '/contact' , to: 'static_pages#contact', via: 'get'
  match '/contact' , to: 'static_pages#mail', via: 'post'
  get 'offer' => 'static_pages#offer'
  get 'visualizations' => 'projects#projects_visualization'
  get 'realizations' => 'projects#projects_realization'

  resources :projects
  resources :resources

  get '*path' => redirect('/')

end

