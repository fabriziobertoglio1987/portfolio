Rails.application.routes.draw do

	resources :pages
	get '/blog', to: 'pages#blog', as: 'blog'
	root "pages#index"

end
