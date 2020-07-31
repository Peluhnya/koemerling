require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Kbe
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
    config.i18n.fallbacks = [:en, :ru, :uk]
    config.i18n.available_locales = [:ru, :uk]
    config.i18n.default_locale = :uk
    config.autoload_paths += %W(#{config.root}/app/models/ckeditor)
    config.assets.precompile += Ckeditor.assets
    config.assets.precompile += %w( ckeditor/* )
    config.assets.precompile += %w(*.png *.jpg *.jpeg *.gif)
    config.forse_ssh = true
    # config.middleware.insert_before ActionDispatch::Cookies, "Rack::SSL"     
    config.ssl_options = {  redirect: { status: 307, port: 81 } }
  end
end
