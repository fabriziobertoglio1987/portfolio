Rails.application.routes.draw do

	resources :pages
	root "pages#index"
	
	#get '/portfolio' => 'pages#portfolio'
	#match '/:controller(/:action(/:id))', :via => :get
end
