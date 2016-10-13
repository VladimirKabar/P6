class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  # rescue_from ActionView::MissingTemplate, :with => :template_not_found
  # rescue_from ActionController::UnknownFormat, :with => :template_not_found
  # dodac na samym koncu projektu


  private

  def template_not_found
    redirect_to root_path
  end
end
