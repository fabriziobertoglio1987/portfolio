Rails.application.routes.draw do
  resources :pages
  get '/blog', to: 'pages#blog', as: 'blog'
  get '/contact', to: 'pages#contact', as: 'contact'
  root "pages#index"
end
