Rails.application.routes.draw do


  root 'static_pages#home'
  get 'about' => 'static_pages#about'
  get 'firma' => 'static_pages#firma'
  get 'projekty' => 'static_pages#projekty'
  get 'kontakt' => 'static_pages#kontakt'


end

