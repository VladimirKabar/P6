Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  root 'static_pages#home'
  post 'contact' => 'static_pages#contact'
  get 'contact' => 'static_pages#contact'
  get 'offer' => 'static_pages#offer'
  get 'visualizations' => 'projects#projects_visualization'
  get 'realizations' => 'projects#projects_realization'

  resources :projects
  resources :resources

  get '*path' => redirect('/')

end

